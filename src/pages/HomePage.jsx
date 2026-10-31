import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileSpreadsheet, 
  Layers, 
  TrendingUp, 
  Home, 
  Coins, 
  ArrowRight, 
  Mail,
  HardHat,
  FileText,
  Calculator,
  Zap,
  ShieldCheck,
  Users,
  Clock,
  Handshake
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import QuoteBanner from '../components/QuoteBanner';

export default function HomePage() {
  const serviceCards = [
    {
      title: "Residential Estimating",
      desc: "Accurate cost estimates for residential projects, extensions and refurbishments.",
      link: "/services/residential-estimating",
      image: "/images/residential-estimating.jpg",
      icon: Home,
    },
    {
      title: "Commercial Estimating",
      desc: "Expert estimating services for commercial buildings and large-scale developments.",
      link: "/services/commercial-estimating",
      image: "/images/commercial-estimating.jpg",
      icon: Building2,
    },
    {
      title: "Quantity Take-Offs",
      desc: "Precise quantity take-offs for accurate measurement and planning.",
      link: "/services/quantity-take-offs",
      image: "/images/quantity-takeoffs.jpg",
      icon: Calculator,
    },
    {
      title: "BOQ Preparation",
      desc: "Detailed Bills of Quantities for transparent and reliable project documentation.",
      link: "/services/bill-of-quantities",
      image: "/images/bill-of-quantities.jpg",
      icon: FileSpreadsheet,
    },
    {
      title: "Tender Pricing",
      desc: "Competitive and accurate pricing for construction tenders.",
      link: "/services/tender-pricing",
      image: "/images/tender-pricing.jpg",
      icon: TrendingUp,
    },
    {
      title: "Construction Cost Estimation",
      desc: "Comprehensive cost estimation for projects of all sizes.",
      link: "/services/construction-cost-estimation",
      image: "/images/construction-cost.jpg",
      icon: HardHat,
    },
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION: Matches Exact Design Mockup 1 */}
      <section className="relative bg-[#081a2e] text-white overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background architectural & estimating image on the right with smooth dark gradient fade to left */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
          <img 
            src="/images/hero-estimating.jpg" 
            alt="Professional UK construction estimating and quantity surveying plans" 
            className="w-full h-full object-cover object-center lg:object-right"
          />
          {/* Subtle gradient overlay ensuring text on left is sharp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/95 to-transparent lg:via-[#081a2e]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e] via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            
            {/* Category Pill Tagline */}
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-bold text-[#d4a34b] uppercase tracking-wider mb-4 bg-navy-900/60 px-3 py-1 rounded border border-[#d4a34b]/30">
              <Building2 className="w-3.5 h-3.5 text-[#d4a34b]" />
              <span>CONSTRUCTION ESTIMATING SERVICES</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Accurate Estimates.<br />
              Better Bids. Stronger<br />
              Margins.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
              Professional construction estimating, quantity take-offs and BOQ preparation for UK builders, contractors and developers.
            </p>

            {/* CTA Button and Subtext */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-extrabold px-7 py-3.5 rounded text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-2"
                >
                  <span>REQUEST A FREE QUOTE →</span>
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-[#0d223a]/80 hover:bg-[#0d223a] text-white font-semibold px-5 py-3.5 rounded border border-slate-600/70 hover:border-slate-400 text-xs sm:text-sm tracking-wide transition-all space-x-1.5"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

              <p className="text-xs text-slate-400 font-normal">
                Send your drawings for a project-specific quotation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 1B. TRUST INDICATORS BAR: Matches Exact Design Mockup 1 */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Fast Response */}
            <div className="flex items-center space-x-4 pt-3 md:pt-0 md:pr-4">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ee] border border-[#d4a34b]/40 flex items-center justify-center shrink-0 text-[#b58734]">
                <Zap className="w-5 h-5 text-[#b58734] fill-[#fcf3dc]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#081a2e]">Fast Response</div>
                <div className="text-xs text-slate-500 font-medium">24–48 Hours</div>
              </div>
            </div>

            {/* No Obligation */}
            <div className="flex items-center space-x-4 pt-3 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ee] border border-[#d4a34b]/40 flex items-center justify-center shrink-0 text-[#b58734]">
                <ShieldCheck className="w-5 h-5 text-[#b58734]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#081a2e]">No Obligation</div>
                <div className="text-xs text-slate-500 font-medium">Get a quote with no commitment</div>
              </div>
            </div>

            {/* Expert Advice */}
            <div className="flex items-center space-x-4 pt-3 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#fdf8ee] border border-[#d4a34b]/40 flex items-center justify-center shrink-0 text-[#b58734]">
                <Users className="w-5 h-5 text-[#b58734]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#081a2e]">Expert Advice</div>
                <div className="text-xs text-slate-500 font-medium">Support from experienced estimators</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION: Matches Exact Design Mockup 2 (3x2 Grid + Slogan Strip) */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081a2e] tracking-tight">
              Our <span className="text-[#d4a34b]">Services</span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-medium">
              Professional Quantity Surveying and Cost Consultancy Services
            </p>
          </div>

          {/* 6 Core Service Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group hover:border-[#d4a34b]/60"
                >
                  {/* Image container */}
                  <div className="h-48 sm:h-52 bg-slate-100 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card content with circular dark blue icon badge */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#081a2e] border-2 border-[#d4a34b] text-white flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-[#081a2e] leading-snug group-hover:text-[#b58734] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <div>
                      <Link 
                        to={service.link}
                        className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slogan Banner: Matches bottom strip in Mockup 2 */}
          <div className="mt-12 bg-[#081a2e] rounded-xl border border-navy-800 p-6 sm:p-8 text-white shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Logo & Slogan */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="bg-white rounded-lg p-2 shrink-0 shadow">
                  <img 
                    src={companyInfo.logo} 
                    alt="Orion Build Cost" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:block h-10 w-[1px] bg-slate-700"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Build Smarter. <span className="text-[#d4a34b]">Grow Faster.</span>
                  </div>
                </div>
              </div>

              {/* 3 Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-700/60 w-full lg:w-auto">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0d223a] border border-[#d4a34b]/40 flex items-center justify-center text-[#d4a34b] shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#d4a34b]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Trusted Expertise</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0d223a] border border-[#d4a34b]/40 flex items-center justify-center text-[#d4a34b] shrink-0">
                    <Clock className="w-4 h-4 text-[#d4a34b]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">On-Time Delivery</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0d223a] border border-[#d4a34b]/40 flex items-center justify-center text-[#d4a34b] shrink-0">
                    <Handshake className="w-4 h-4 text-[#d4a34b]" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Dedicated Support</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. DUAL ROW: ABOUT US (Left) & FEATURED PROJECTS (Right) */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: About Orion Build Cost with image & card */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row lg:flex-col">
              <div className="sm:w-1/2 lg:w-full h-56 sm:h-auto lg:h-52 bg-slate-100 relative">
                <img 
                  src="/images/surveyor-tools.jpg" 
                  alt="Quantity surveying drawings, hardhat and measuring tape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:w-1/2 lg:w-full flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                    — ABOUT ORION BUILD COST
                  </div>
                  <h3 className="text-lg font-bold text-[#081a2e] leading-snug mb-2">
                    Your Construction Cost Consultancy Partner
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    We deliver professional quantity surveying and cost consultancy services, helping UK contractors, builders and developers make informed decisions and keep projects on track.
                  </p>
                </div>

                <div>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2 rounded text-xs transition-colors space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Projects 3-image mosaic */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                      — FEATURED PROJECTS
                    </div>
                    <h3 className="text-lg font-bold text-[#081a2e]">
                      Our Work
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                      A selection of our recent project work, showcasing the quality and scale of projects we support.
                    </p>
                  </div>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2 rounded text-xs transition-colors shrink-0 space-x-1"
                  >
                    <span>View Portfolio</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>

                {/* 3 Images Mosaic Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* Big residential photo */}
                  <div className="relative rounded-lg overflow-hidden h-60 bg-navy-950 group">
                    <img 
                      src="/images/residential-estimating.jpg" 
                      alt="Residential Development" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/90 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-xs font-bold leading-tight">Residential Development</div>
                      <div className="text-[10px] text-slate-300">Residential Scheme</div>
                    </div>
                  </div>

                  {/* Two stacked photos */}
                  <div className="grid grid-rows-2 gap-3 h-60">
                    <div className="relative rounded-lg overflow-hidden bg-navy-950 group">
                      <img 
                        src="/images/commercial-estimating.jpg" 
                        alt="Commercial Building" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="text-xs font-bold leading-tight">Commercial Building</div>
                        <div className="text-[10px] text-slate-300">Commercial Scheme</div>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden bg-navy-950 group">
                      <img 
                        src="/images/structural-steel.jpg" 
                        alt="Construction Project" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <div className="text-xs font-bold leading-tight">Construction Project</div>
                        <div className="text-[10px] text-slate-300">Steel Portal Logistics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM BANNER */}
      <QuoteBanner 
        tagline="READY TO DISCUSS YOUR PROJECT?"
        title="Get a Quote for Your Construction Project"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote"
        theme="navy-outline"
      />

    </div>
  );
}
