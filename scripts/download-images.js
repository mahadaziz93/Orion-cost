import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const images = {
  "hero-architecture.jpg": "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1600&q=80",
  "quantity-takeoffs.jpg": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  "bill-of-quantities.jpg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "tender-pricing.jpg": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  "residential-estimating.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "commercial-estimating.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  "construction-cost.jpg": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "residential-extension.jpg": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  "commercial-interior.jpg": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  "architectural-plans.jpg": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  "contractor-review.jpg": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  "structural-steel.jpg": "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80",
  "luxury-home.jpg": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "surveyor-tools.jpg": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80",
  "site-inspection.jpg": "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
  "mixed-use-development.jpg": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
  "about-consultancy.jpg": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
  "residential-conversion.jpg": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
  "tender-documents.jpg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  "london-architecture.jpg": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
};

const destDir = path.resolve('public/images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

console.log('Starting image downloads with curl...');
for (const [filename, url] of Object.entries(images)) {
  const filePath = path.join(destDir, filename);
  // Check if file already exists and has non-zero size
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.size > 1000) {
      console.log(`Already downloaded: ${filename} (${Math.round(stats.size / 1024)} KB)`);
      continue;
    }
  }

  console.log(`Downloading ${filename}...`);
  try {
    execSync(`curl.exe -L -s --max-time 20 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${url}" -o "${filePath}"`);
    const stats = fs.statSync(filePath);
    console.log(`Saved ${filename} (${Math.round(stats.size / 1024)} KB)`);
  } catch (err) {
    console.error(`Error downloading ${filename}:`, err.message);
  }
}
console.log('Finished downloading images.');
