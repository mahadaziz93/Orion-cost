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
  FileText
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import QuoteBanner from '../components/QuoteBanner';

export default function HomePage() {
  const serviceCards = [
    {
      title: "Quantity Take-Offs",
      desc: "Accurate measurement and quantity analysis from your drawings.",
      link: "/services/quantity-take-offs",
      icon: Layers,
    },
    {
      title: "Bill of Quantities (BOQ)",
      desc: "Structured, itemised schedules for better cost control and tendering.",
      link: "/services/bill-of-quantities",
      icon: FileSpreadsheet,
    },
    {
      title: "Tender Pricing",
      desc: "Competitive and detailed pricing support for your tender submissions.",
      link: "/services/tender-pricing",
      icon: HardHat,
    },
    {
      title: "Residential Estimating",
      desc: "New builds, extensions and renovations with precise cost planning.",
      link: "/services/residential-estimating",
      icon: Home,
    },
    {
      title: "Commercial Estimating",
      desc: "Offices, retail, industrial and large-scale commercial developments.",
      link: "/services/commercial-estimating",
      icon: Building2,
    },
    {
      title: "Construction Cost Estimation",
      desc: "Comprehensive cost advice based on your project requirements.",
      link: "/services/construction-cost-estimation",
      icon: Coins,
    },
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION: Matches Screenshot 1 with navy left block & architectural luxury house on right */}
      <section className="relative bg-[#081a2e] text-white overflow-hidden min-h-[580px] flex items-center">
        {/* Background architectural image on the right with smooth dark gradient fade to left */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
          <img 
            src="/images/luxury-home.jpg" 
            alt="Modern UK residential luxury architecture" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay ensuring text on left is sharp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent lg:via-[#081a2e]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e] via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            
            {/* Tagline */}
            <div className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
              QUANTITY SURVEYING &amp; CONSTRUCTION COST CONSULTANCY
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Plan Your Build <br />
              <span className="text-[#d4a34b]">
                With Confidence.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
              Professional quantity surveying and construction cost consultancy services for UK building projects.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-6 py-3 rounded-md text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-2"
              >
                <Mail className="w-4 h-4 text-[#081a2e]" />
                <span>Request a Quote</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-[#0d223a]/80 hover:bg-[#0d223a] text-white font-semibold px-5 py-3 rounded-md border border-slate-600/70 hover:border-slate-400 text-xs sm:text-sm tracking-wide transition-all space-x-1.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION: Matches Screenshot 1 with 6 clean white cards */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b58734] mb-1">
              — OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#081a2e]">
              Expert Support for Every Stage
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              From initial planning to final construction, we provide accurate, detailed and reliable cost consultancy services to help you build with confidence.
            </p>
          </div>

          {/* 6 Core Service Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#d4a34b]/60"
                >
                  <div>
                    {/* Icon in blue border/circle */}
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#081a2e] mb-4 group-hover:bg-[#fcf8ee] group-hover:border-[#d4a34b]/40 group-hover:text-[#b58734] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-bold text-[#081a2e] leading-snug mb-2 group-hover:text-[#b58734] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <Link 
                    to={service.link}
                    className="text-[11px] font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1 pt-2 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 ml-0.5" />
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. DUAL ROW: ABOUT US (Left) & FEATURED PROJECTS (Right) — Matches Screenshot 1 */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: About Orion Build Cost with image & card */}
            <div className="lg:col-span-5 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row lg:flex-col">
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
            <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
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

      {/* 4. BOTTOM BANNER: Matches Screenshot 1 with navy button */}
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
