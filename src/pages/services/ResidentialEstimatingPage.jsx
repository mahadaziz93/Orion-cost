import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowRight, 
  Mail, 
  Users, 
  FileText, 
  FileSpreadsheet, 
  Check, 
  Coins, 
  Hammer, 
  Building
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import QuoteBanner from '../../components/QuoteBanner';

export default function ResidentialEstimatingPage() {
  const residentialShowcase = [
    {
      title: "Bespoke Luxury Dwellings",
      type: "Private Residential",
      desc: "Detailed elemental estimates for custom architect-designed homes, high-efficiency building envelopes, and premium finishes.",
      image: "/images/luxury-home.jpg"
    },
    {
      title: "New Build Housing Developments",
      type: "Multi-Unit Scheme",
      desc: "Complete bill of quantities, substructure measurement, and volume construction cost forecasting for UK home builders.",
      image: "/images/residential-newbuild.jpg"
    },
    {
      title: "Single & Two-Storey Extensions",
      type: "Residential Extension",
      desc: "Comprehensive trade breakdowns for rear extensions, wrap-arounds, and structural steel alterations.",
      image: "/images/residential-extension.jpg"
    },
    {
      title: "Period Property Renovations",
      type: "Refurbishment & Remodel",
      desc: "Accurate labour and material take-offs for internal remodeling, structural opening works, and bespoke joinery.",
      image: "/images/residential-renovation.jpg"
    },
    {
      title: "Apartment Blocks & Multi-Unit",
      type: "Residential Apartments",
      desc: "Robust cost plans for medium-density residential developments, communal areas, and building regulations compliance.",
      image: "/images/residential-apartment.jpg"
    },
    {
      title: "Barn & Property Conversions",
      type: "Conversion Scheme",
      desc: "Cost estimation for heritage restorations, structural timber repairs, and change-of-use residential projects.",
      image: "/images/residential-conversion.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Reference Screenshot */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/luxury-home.jpg" 
            alt="Modern UK residential luxury house at twilight" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: "Residential Estimating" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Residential <span className="text-[#d4a34b]">Estimating</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Accurate and detailed cost estimates for residential projects, helping homeowners, builders and developers plan, budget and build with confidence.
            </p>

            {/* 4 Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>New Builds Estimates</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Home className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Extensions &amp; Renovations</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Detailed Cost Breakdowns</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Coins className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Material &amp; Labour Cost Analysis</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote?service=residential-estimating"
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-6 py-3 rounded text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-2"
              >
                <Mail className="w-4 h-4 text-[#081a2e]" />
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Our Service, Checkmarks, Ideal For, 3-image collage, What's Included */}
            <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR SERVICE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081a2e] mb-3">
                  Residential Estimating
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We provide precise and reliable cost estimates for residential construction projects of all sizes — from single homes to large housing developments. Our team ensures accurate quantity take-offs, up-to-date pricing and detailed breakdowns to keep your project on track and within budget.
                </p>

                {/* 4 Checkmarks */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>New build cost estimates (single homes, multi-unit)</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Extensions, loft conversions and renovations</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Detailed material and labour cost analysis</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Risk assessment and value engineering</span>
                  </div>
                </div>
              </div>

              {/* Ideal For Callout Box */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start space-x-3">
                <div className="p-2 bg-white rounded border border-slate-200 text-[#081a2e] shrink-0">
                  <Users className="w-4 h-4 text-[#b58734]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#081a2e]">Ideal For</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Homeowners, builders, developers and residential construction companies.
                  </div>
                </div>
              </div>

              {/* 3-Image Collage & What's Included Card Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-stretch">
                {/* 3-Image Collage */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 h-44 bg-slate-100 rounded overflow-hidden">
                    <img 
                      src="/images/residential-conversion.jpg" 
                      alt="Residential brick building under construction" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-2 h-44">
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/residential-renovation.jpg" 
                        alt="Residential interior restoration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/residential-extension.jpg" 
                        alt="Residential modern house extension" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* What's Included Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#081a2e] mb-3">
                      <FileSpreadsheet className="w-4 h-4 text-[#b58734]" />
                      <span>What's Included</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Detailed quantity take-offs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Material and labour cost estimates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Itemised cost breakdowns (CSI style)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Professional summary report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope & Information Dependent Callout */}
              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/90 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#081a2e]">Scope &amp; Drawing Dependent:</span> Every residential construction estimate is prepared bespoke to your specific project drawings, site location, foundation depths, and structural specifications. Accurate information enables precise cost forecasting.
              </div>

            </div>

            {/* Right Column (4 cols): Our Process 3 Steps & Navy CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR PROCESS
                </div>
                <h3 className="text-base font-bold text-[#081a2e] mb-5">
                  From Plans to Accurate Cost Estimates
                </h3>

                {/* 3 Step Process List */}
                <div className="space-y-5">
                  
                  {/* Step 1 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">
                        Plan Review &amp; Quantity Take-Offs
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We analyse your architectural drawings and measure all relevant elements.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">
                        Cost Analysis &amp; Pricing
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We apply current market rates and supplier pricing to calculate accurate costs.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">
                        Final Estimate &amp; Report
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        You receive a clear, detailed estimate with breakdowns and recommendations.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navy CTA Card matching Screenshot 1 */}
              <div className="bg-[#081a2e] text-white rounded-lg p-6 border border-navy-800 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-navy-900 rounded text-[#d4a34b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Need a Residential Estimate for Your Project?
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Get in touch for a tailored solution and a competitive quote.
                </p>
                <Link
                  to="/request-a-quote?service=residential-estimating"
                  className="w-full flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold py-2.5 px-4 rounded text-xs transition-colors space-x-1.5 shadow"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2B. RESIDENTIAL PROJECT TYPES SHOWCASE (6 Dedicated Residential Images) */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] block mb-1">
              — RESIDENTIAL PROJECT SHOWCASE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081a2e]">
              Residential Schemes We Estimate
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Our residential quantity surveying covers every scale of UK domestic construction, from architect-led one-off dwellings to multi-plot residential developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialShowcase.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#081a2e]/90 text-[#d4a34b] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-bold text-[#081a2e] mb-1.5 group-hover:text-[#b58734] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    to="/request-a-quote?service=residential-estimating"
                    className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER */}
      <QuoteBanner 
        tagline="BUILD YOUR DREAM HOME"
        title="Accurate Estimates. Better Decisions."
        middleTag="Whether it's a new build, extension or renovation —"
        middleDesc="we've got the numbers to make it happen."
        middleIcon="home"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote?service=residential-estimating"
        theme="gold"
      />

    </div>
  );
}
