import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeMeta = {
  "/": {
    title: "Orion Build Cost | Professional UK Quantity Surveying & Cost Consultancy",
    desc: "Professional quantity surveying, bill of quantities, tender pricing, and construction cost consultancy for UK building contractors, developers, and residential builders."
  },
  "/services": {
    title: "Our Services | Orion Build Cost | UK Quantity Surveying & Estimating",
    desc: "Comprehensive quantity surveying, digital take-offs, bills of quantities, tender pricing, and cost consultancy for UK building projects."
  },
  "/services/quantity-take-offs": {
    title: "Quantity Take-Offs | Orion Build Cost",
    desc: "Precise measurement and quantity take-offs from architectural and structural drawings for UK building contractors."
  },
  "/services/bill-of-quantities": {
    title: "Bill of Quantities (BOQ) | Orion Build Cost",
    desc: "Structured, itemised Bill of Quantities schedules prepared to standard UK construction conventions."
  },
  "/services/tender-pricing": {
    title: "Tender Pricing & Bid Support | Orion Build Cost",
    desc: "Competitive and detailed pricing support to help UK building contractors win profitable tenders."
  },
  "/services/residential-estimating": {
    title: "Residential Estimating | Orion Build Cost",
    desc: "Comprehensive residential cost plans and estimating for new builds, extensions, and renovations."
  },
  "/services/commercial-estimating": {
    title: "Commercial Estimating | Orion Build Cost",
    desc: "Robust cost forecasting and commercial estimating for UK offices, retail, industrial, and mixed-use builds."
  },
  "/services/construction-cost-estimation": {
    title: "Construction Cost Estimation | Orion Build Cost",
    desc: "Professional consultancy cost planning, feasibility budgets, and early-stage cost models for UK projects."
  },
  "/portfolio": {
    title: "Portfolio & Project Gallery | Orion Build Cost",
    desc: "Visual examples of UK residential, commercial, industrial, and renovation project typologies supported by our cost consultancy."
  },
  "/about": {
    title: "About Us | Orion Build Cost",
    desc: "Learn about Orion Build Cost, our quantity surveying ethos, and our dedicated cost consultancy for UK building contractors."
  },
  "/request-a-quote": {
    title: "Request a Quote | Orion Build Cost",
    desc: "Submit your architectural drawings and project specifications for a professional, fixed-fee quantity surveying quote."
  },
  "/contact": {
    title: "Contact Us | Orion Build Cost",
    desc: "Contact Orion Build Cost in Chigwell, Essex. Direct email, registered address, and project enquiry details."
  },
  "/privacy-policy": {
    title: "Privacy Policy | Orion Build Cost",
    desc: "Privacy Policy and UK GDPR data handling standards for Orion Build Cost and drawing confidentiality."
  },
  "/terms-of-use": {
    title: "Terms of Use | Orion Build Cost",
    desc: "Terms of Use governing the Orion Build Cost website and professional consultancy parameters."
  }
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    const meta = routeMeta[pathname] || {
      title: "Orion Build Cost | Professional UK Quantity Surveying",
      desc: "Professional quantity surveying and construction cost consultancy services for UK building projects."
    };

    document.title = meta.title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', meta.desc);
    }
  }, [pathname]);

  return null;
}
