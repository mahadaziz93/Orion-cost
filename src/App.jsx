import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import QuantityTakeOffsPage from './pages/services/QuantityTakeOffsPage';
import BillOfQuantitiesPage from './pages/services/BillOfQuantitiesPage';
import TenderPricingPage from './pages/services/TenderPricingPage';
import ResidentialEstimatingPage from './pages/services/ResidentialEstimatingPage';
import CommercialEstimatingPage from './pages/services/CommercialEstimatingPage';
import ConstructionCostEstimationPage from './pages/services/ConstructionCostEstimationPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

// 404 Fallback
function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg border border-slate-200 shadow text-center">
        <span className="text-4xl font-extrabold text-navy-950 block mb-2">404</span>
        <h1 className="text-xl font-bold text-navy-950 mb-3">Page Not Found</h1>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          The requested page could not be located. Please check the URL or return to our homepage.
        </p>
        <a 
          href="/" 
          className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-2.5 rounded text-xs transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          {/* 1. Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* 2. Services Overview */}
          <Route path="/services" element={<ServicesOverviewPage />} />

          {/* 3 to 8. Dedicated Service Pages */}
          <Route path="/services/quantity-take-offs" element={<QuantityTakeOffsPage />} />
          <Route path="/services/bill-of-quantities" element={<BillOfQuantitiesPage />} />
          <Route path="/services/tender-pricing" element={<TenderPricingPage />} />
          <Route path="/services/residential-estimating" element={<ResidentialEstimatingPage />} />
          <Route path="/services/commercial-estimating" element={<CommercialEstimatingPage />} />
          <Route path="/services/construction-cost-estimation" element={<ConstructionCostEstimationPage />} />

          {/* 9. Portfolio / Project Gallery */}
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* 10. About Us */}
          <Route path="/about" element={<AboutPage />} />

          {/* 11. Request a Quote */}
          <Route path="/request-a-quote" element={<QuotePage />} />
          <Route path="/quote" element={<Navigate to="/request-a-quote" replace />} />

          {/* 12. Contact Us */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 13. Privacy Policy & Terms of Use */}
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-of-use" element={<LegalPage />} />
          <Route path="/legal" element={<LegalPage />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
