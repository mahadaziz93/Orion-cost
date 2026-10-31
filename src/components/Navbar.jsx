import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Building2, 
  ChevronDown, 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  FileSpreadsheet, 
  Calculator, 
  Layers, 
  Home, 
  TrendingUp,
  Search,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';

const serviceIcons = {
  "quantity-take-offs": Layers,
  "bill-of-quantities": FileSpreadsheet,
  "tender-pricing": TrendingUp,
  "residential-estimating": Home,
  "commercial-estimating": Building2,
  "construction-cost-estimation": Calculator,
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      {/* Top thin micro bar in deep navy as shown in screenshots */}
      <div className="bg-[#081a2e] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left contact info */}
          <div className="flex items-center space-x-6">
            <a 
              href={`mailto:${companyInfo.email}`}
              className="flex items-center space-x-1.5 text-slate-300 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4a34b] shrink-0" />
              <span>{companyInfo.email}</span>
            </a>
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#d4a34b] shrink-0" />
              <span>{companyInfo.address.full}</span>
            </span>
          </div>

          {/* Right credentials & LinkedIn */}
          <div className="flex items-center space-x-4">
            <a 
              href={companyInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-slate-300 hover:text-gold-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#d4a34b]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400 ml-0.5" />
            </a>
            <span className="text-slate-400 border-l border-navy-700/80 pl-4 hidden md:inline text-[11px]">
              Quantity Surveying | Cost Consultancy | Construction Expertise
            </span>
          </div>
        </div>
      </div>

      {/* Main clean white Navbar matching screenshots */}
      <nav className="bg-white border-b border-slate-200/90 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo container using original logo on clean white with increased prominent size */}
          <Link to="/" className="flex items-center shrink-0 py-1" aria-label="Orion Build Cost Homepage">
            <img 
              src={companyInfo.logo} 
              alt="Orion Build Cost - Cost Estimation Experts" 
              className="h-14 sm:h-16 md:h-20 w-auto object-contain max-w-[240px] sm:max-w-[280px]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-150 py-1 relative ${
                  isActive ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' : 'text-slate-700 hover:text-navy-950'
                }`
              }
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`text-sm font-semibold transition-colors duration-150 flex items-center space-x-1 py-1 relative ${
                  isServicesActive || servicesDropdownOpen 
                    ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' 
                    : 'text-slate-700 hover:text-navy-950'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#d4a34b]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold text-[#b58734] uppercase tracking-wider flex justify-between items-center">
                    <span>Our Services</span>
                    <Link to="/services" className="text-[11px] text-navy-900 hover:underline">
                      View All
                    </Link>
                  </div>
                  <div className="py-1">
                    {servicesData.map((service) => {
                      const IconComponent = serviceIcons[service.id] || Building2;
                      return (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="flex items-center px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-1.5 bg-slate-100 rounded text-navy-950 group-hover:bg-[#fcf8ee] group-hover:text-[#b58734] mr-3 shrink-0 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-navy-950 group-hover:text-[#b58734] transition-colors">
                              {service.title}
                            </p>
                            <p className="text-[11px] text-slate-500 line-clamp-1">
                              {service.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-150 py-1 relative ${
                  isActive ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' : 'text-slate-700 hover:text-navy-950'
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-150 py-1 relative ${
                  isActive ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' : 'text-slate-700 hover:text-navy-950'
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink 
              to="/request-a-quote" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-150 py-1 relative ${
                  isActive ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' : 'text-slate-700 hover:text-navy-950'
                }`
              }
            >
              Request a Quote
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-sm font-semibold transition-colors duration-150 py-1 relative ${
                  isActive ? 'text-navy-950 font-bold after:content-[""] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4a34b]' : 'text-slate-700 hover:text-navy-950'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Right Search & Gold Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-500 hover:text-navy-950 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Search site"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              to="/request-a-quote"
              className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2.5 rounded-md shadow-sm transition-all duration-150 text-xs sm:text-sm tracking-wide space-x-1.5"
            >
              <Mail className="w-4 h-4 mr-1 text-[#081a2e]" />
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/request-a-quote"
              className="bg-[#d4a34b] text-[#081a2e] font-bold px-3 py-1.5 rounded text-xs"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-navy-950 p-2 rounded-lg bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="border-t border-slate-100 py-3 px-4 max-w-7xl mx-auto flex items-center space-x-3">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Search services (e.g. BOQ, Take-Offs, Tender Pricing)..." 
              className="w-full text-sm outline-none text-slate-800"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = e.target.value.toLowerCase();
                  if (val.includes('boq') || val.includes('bill')) window.location.href = '/services/bill-of-quantities';
                  else if (val.includes('take') || val.includes('off')) window.location.href = '/services/quantity-take-offs';
                  else if (val.includes('tender')) window.location.href = '/services/tender-pricing';
                  else window.location.href = '/services';
                }
              }}
            />
            <button onClick={() => setSearchOpen(false)} className="text-xs text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block px-3 py-2 rounded text-sm font-semibold ${isActive ? 'bg-slate-100 text-[#b58734] font-bold' : 'text-slate-700'}`}
            >
              Home
            </NavLink>

            <div>
              <div className="px-3 py-1 text-xs font-bold text-[#b58734] uppercase tracking-wider">
                Our Services
              </div>
              <div className="pl-3 space-y-1">
                <NavLink to="/services" className="block px-3 py-1.5 text-xs font-bold text-navy-950">
                  Services Overview
                </NavLink>
                {servicesData.map((s) => (
                  <NavLink key={s.id} to={s.path} className="block px-3 py-1.5 text-xs text-slate-600 hover:text-navy-950">
                    {s.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/portfolio" className="block px-3 py-2 rounded text-sm font-semibold text-slate-700">
              Portfolio
            </NavLink>
            <NavLink to="/about" className="block px-3 py-2 rounded text-sm font-semibold text-slate-700">
              About Us
            </NavLink>
            <NavLink to="/request-a-quote" className="block px-3 py-2 rounded text-sm font-semibold text-slate-700">
              Request a Quote
            </NavLink>
            <NavLink to="/contact" className="block px-3 py-2 rounded text-sm font-semibold text-slate-700">
              Contact Us
            </NavLink>

            <div className="pt-2">
              <Link
                to="/request-a-quote"
                className="w-full flex items-center justify-center bg-[#d4a34b] text-[#081a2e] font-bold py-2.5 rounded text-xs"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
