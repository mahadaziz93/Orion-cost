import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081a2e] text-slate-300 border-t border-navy-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer layout from reference screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-navy-800/80">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="inline-block" aria-label="Orion Build Cost Homepage">
              <div className="bg-white rounded p-1.5 inline-block shadow-sm">
                <img 
                  src={companyInfo.logo} 
                  alt="Orion Build Cost" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Professional quantity surveying and construction cost consultancy for UK building contractors, builders and developers.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              &copy; {currentYear} Orion Build Cost. All rights reserved.
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {servicesData.map((service) => (
                <Link 
                  key={service.id} 
                  to={service.path} 
                  className="text-slate-300 hover:text-[#d4a34b] transition-colors truncate"
                >
                  {service.title}
                </Link>
              ))}
              <Link to="/request-a-quote" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                Request a Quote
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-[#d4a34b] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#d4a34b] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#d4a34b] transition-colors truncate">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a34b] shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </li>
              <li className="flex items-center space-x-2 pt-1">
                <svg className="w-3.5 h-3.5 fill-current text-[#d4a34b] shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a 
                  href={companyInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#d4a34b] transition-colors truncate"
                >
                  {companyInfo.linkedin}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4 text-[11px] text-slate-400">
          <Link to="/privacy-policy" className="hover:text-[#d4a34b] transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/terms-of-use" className="hover:text-[#d4a34b] transition-colors">
            Terms of Use
          </Link>
        </div>

      </div>
    </footer>
  );
}
