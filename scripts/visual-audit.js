import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const screenshotDir = path.resolve('audit_screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const routes = [
  { name: '1-homepage', path: '/' },
  { name: '2-services-overview', path: '/services' },
  { name: '3-quantity-take-offs', path: '/services/quantity-take-offs' },
  { name: '4-bill-of-quantities', path: '/services/bill-of-quantities' },
  { name: '5-tender-pricing', path: '/services/tender-pricing' },
  { name: '6-residential-estimating', path: '/services/residential-estimating' },
  { name: '7-commercial-estimating', path: '/services/commercial-estimating' },
  { name: '8-construction-cost-estimation', path: '/services/construction-cost-estimation' },
  { name: '9-portfolio', path: '/portfolio' },
  { name: '10-about-us', path: '/about' },
  { name: '11-request-a-quote', path: '/request-a-quote' },
  { name: '12-contact-us', path: '/contact' },
  { name: '13-privacy-policy', path: '/privacy-policy' },
  { name: '14-terms-of-use', path: '/terms-of-use' }
];

async function runAudit() {
  console.log('--- STARTING ORION BUILD COST COMPREHENSIVE VISUAL AUDIT ---');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleLogs = [];
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleLogs.push(`[${msg.type().toUpperCase()}] ${msg.text()}`);
    }
  });

  page.on('pageerror', err => {
    consoleLogs.push(`[PAGE_ERROR] ${err.message}`);
  });

  const auditResults = [];

  for (const r of routes) {
    const url = `http://localhost:3000${r.path}`;
    console.log(`Auditing: ${r.name} (${url})...`);

    // Desktop viewport
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(res => setTimeout(res, 500));

    // Page title and meta description
    const title = await page.title();
    const metaDesc = await page.$eval('meta[name="description"]', el => el.getAttribute('content')).catch(() => 'NONE');

    // Check broken images
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.src || img.getAttribute('src'));
    });

    // Check all image sources and alt texts
    const imageInfo = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || 'MISSING_ALT',
        width: img.naturalWidth,
        height: img.naturalHeight
      }));
    });

    // Check horizontal scroll / overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // Screenshot desktop full page
    const desktopScreenshot = path.join(screenshotDir, `${r.name}-desktop.png`);
    await page.screenshot({ path: desktopScreenshot, fullPage: true });

    // Mobile viewport
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await new Promise(res => setTimeout(res, 300));
    const mobileOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    const mobileScreenshot = path.join(screenshotDir, `${r.name}-mobile.png`);
    await page.screenshot({ path: mobileScreenshot, fullPage: false });

    auditResults.push({
      route: r.name,
      path: r.path,
      title,
      metaDesc,
      hasHorizontalOverflowDesktop: hasHorizontalOverflow,
      hasHorizontalOverflowMobile: mobileOverflow,
      brokenImagesCount: brokenImages.length,
      brokenImages,
      imagesTotal: imageInfo.length,
      missingAltCount: imageInfo.filter(i => i.alt === 'MISSING_ALT').length
    });
  }

  // Functional Form Testing: Quote Form
  console.log('\n--- TESTING QUOTE FORM INTERACTION & STATES ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/request-a-quote', { waitUntil: 'networkidle0' });

  // 1. Submit empty form to test validation errors
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise(res => setTimeout(res, 400));
    const errorsShown = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('p.text-red-500')).map(el => el.textContent.trim());
    });
    console.log('Quote Form Empty Validation Errors detected:', errorsShown);
  }

  // 2. Fill form and submit to test truthful success state
  await page.type('input[name="fullName"]', 'Edward Sterling');
  await page.type('input[name="email"]', 'edward@sterlingdevelopments.co.uk');
  await page.type('input[name="projectLocation"]', 'Chigwell, Essex');
  await page.type('textarea[name="projectDescription"]', 'Proposed residential extension and high-specification internal remodel requiring full trade take-offs.');
  await page.click('input[name="consent"]');
  
  const submitBtnAfterFill = await page.$('button[type="submit"]');
  await submitBtnAfterFill.click();
  await new Promise(res => setTimeout(res, 1500));

  const quoteSuccessStateText = await page.evaluate(() => {
    const heading = document.querySelector('h3, h2');
    const notice = document.querySelector('.bg-\\[\\#081a2e\\]');
    return {
      heading: heading ? heading.textContent.trim() : null,
      noticeText: notice ? notice.textContent.trim() : null
    };
  });
  console.log('Quote Form Success State text verified:', quoteSuccessStateText);

  // Functional Form Testing: Contact Form
  console.log('\n--- TESTING CONTACT FORM INTERACTION & STATES ---');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle0' });
  const contactSubmit = await page.$('button[type="submit"]');
  if (contactSubmit) {
    await contactSubmit.click();
    await new Promise(res => setTimeout(res, 400));
    const contactErrors = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('p.text-red-500')).map(el => el.textContent.trim());
    });
    console.log('Contact Form Empty Validation Errors detected:', contactErrors);
  }

  // Test Portfolio Modal interaction
  console.log('\n--- TESTING PORTFOLIO MODAL INTERACTION ---');
  await page.goto('http://localhost:3000/portfolio', { waitUntil: 'networkidle0' });
  const firstCard = await page.$('.cursor-pointer');
  if (firstCard) {
    await firstCard.click();
    await new Promise(res => setTimeout(res, 500));
    const modalVisible = await page.evaluate(() => {
      const modal = document.querySelector('.fixed.inset-0.z-50');
      return !!modal;
    });
    console.log('Portfolio Modal opens successfully:', modalVisible);
  }

  await browser.close();

  // Save audit report JSON
  fs.writeFileSync(path.join(screenshotDir, 'audit_summary.json'), JSON.stringify({
    results: auditResults,
    consoleLogs
  }, null, 2));

  console.log('\n--- AUDIT COMPLETED. Summary saved to audit_screenshots/audit_summary.json ---');
  console.log('Console Errors/Warnings Count:', consoleLogs.length);
  if (consoleLogs.length > 0) {
    console.log('Console details:', consoleLogs);
  }
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
