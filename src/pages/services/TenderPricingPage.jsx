import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  Mail, 
  Users, 
  FileText, 
  Layers, 
  Check, 
  HardHat, 
  BarChart3, 
  ShieldAlert, 
  TrendingUp,
  Handshake
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import QuoteBanner from '../../components/QuoteBanner';

export default function TenderPricingPage() {
  const tenderShowcase = [
    {
      title: "Commercial Bid Rate Build-Ups",
      type: "Tender Pricing",
      desc: "Bottom-up labour, material, and plant rate calculations structured to win tenders whilst safeguarding margins.",
      image: "/images/tender-pricing.jpg"
    },
    {
      title: "Subcontractor Package Enquiries",
      type: "Procurement Analysis",
      desc: "Market enquiry management, quote comparison matrices, and trade package scope checks to eliminate double counting.",
      image: "/images/tender-documents.jpg"
    },
    {
      title: "Commercial Strategy & Risk Review",
      type: "Bid Optimisation",
      desc: "Commercial vetting of JCT/NEC contract amendments, liquidated damages liabilities, and retention clauses.",
      image: "/images/contractor-review.jpg"
    },
    {
      title: "Trade Package Market Pricing",
      type: "Supply Chain Rates",
      desc: "Current UK regional benchmark pricing across structural steel, groundworks, building services, and specialist trades.",
      image: "/images/structural-steel.jpg"
    },
    {
      title: "Preliminaries & Site Logistics Models",
      type: "Site Establishment",
      desc: "Project-specific preliminary cost schedules covering plant hire, welfare facilities, craneage, and site supervision.",
      image: "/images/site-inspection.jpg"
    },
    {
      title: "Bid Handover & Qualification Dossier",
      type: "Submission Pack",
      desc: "Polished tender return letter, schedule of clarifications, and priced tender summary ready for employer submission.",
      image: "/images/about-consultancy.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 5 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/tender-pricing.jpg" 
            alt="Contractor in high-vis reviewing tender plans on construction site" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: "Tender Pricing" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Tender <span className="text-[#d4a34b]">Pricing</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Get accurate and competitive tender pricing with detailed analysis, helping you win projects and maximise your profit margins.
            </p>

            {/* 4 Feature Badges from Screenshot 5 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Tender Document Review</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <BarChart3 className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Cost Analysis &amp; Benchmarking</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <TrendingUp className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Competitive Pricing Strategy</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <ShieldAlert className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Risk Assessment &amp; Value Engineering</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote?service=tender-pricing"
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

      {/* 2. MAIN CONTENT AREA: Matches Screenshot 5 */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (8 cols): Our Service, Checkmarks, Ideal For, 3-image collage, Deliverables */}
            <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR SERVICE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081a2e] mb-3">
                  Win More Tenders with Confidence
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We provide professional tender pricing services by reviewing all tender documents, drawings and specifications. Our team conducts detailed cost analyses and applies market-tested pricing to help UK building contractors submit winning bids that protect bottom-line profits.
                </p>

                {/* 4 Checkmarks matching Screenshot 5 */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Comprehensive tender document review</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Accurate and competitive pricing strategies</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Cost benchmarking and market rate analysis</span>
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
                    Main contractors, building firms, and trade subcontractors submitting competitive tenders.
                  </div>
                </div>
              </div>

              {/* 3-Image Collage & Deliverables Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-stretch">
                {/* 3-Image Collage */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 h-44 bg-slate-100 rounded overflow-hidden">
                    <img 
                      src="/images/tender-pricing.jpg" 
                      alt="Tender document and calculator" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-2 h-44">
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/contractor-review.jpg" 
                        alt="Contractor review meeting" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/tender-documents.jpg" 
                        alt="Tender submission pack" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Deliverables Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#081a2e] mb-3">
                      <FileSpreadsheet className="w-4 h-4 text-[#b58734]" />
                      <span>Deliverables</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Itemised tender pricing build-up</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Subcontract enquiry comparison sheets</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Preliminaries &amp; site overhead schedules</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Commercial tender qualification notes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (4 cols): Our Process 3 Steps & Navy CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR PROCESS
                </div>
                <h3 className="text-base font-bold text-[#081a2e] mb-5">
                  Our Tender Pricing Approach
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
                        Tender Review &amp; Scope Analysis
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We review the tender package, contract terms, drawings and specifications in detail.
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
                        Cost Build-Up &amp; Benchmarking
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We build realistic labor, plant and material rates informed by real-time market data.
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
                        Commercial Submission
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We structure your final bid to maximise competitive edge while securing profitable margins.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navy CTA Card matching Screenshot 5 */}
              <div className="bg-[#081a2e] text-white rounded-lg p-6 border border-navy-800 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-navy-900 rounded text-[#d4a34b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Need Tender Pricing Support?
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Get in touch for a tailored solution and a competitive quote.
                </p>
                <Link
                  to="/request-a-quote?service=tender-pricing"
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

      {/* 2B. TENDER PRICING SHOWCASE (6 Images) */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] block mb-1">
              — COMMERCIAL BID MANAGEMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081a2e]">
              Tender Pricing &amp; Bid Win Strategy
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              We help UK contractors submit competitive tenders with absolute rate certainty and protected cash flow margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenderShowcase.map((item, idx) => (
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
                    to="/request-a-quote?service=tender-pricing"
                    className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1"
                  >
                    <span>Request Tender Pricing</span>
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
        tagline="WIN MORE TENDERS. PROTECT YOUR MARGINS."
        title="Get Competitive Tender Pricing Support"
        middleTag="From small works to major commercial contracts —"
        middleDesc="we build accurate, bid-winning estimates you can trust."
        middleIcon="trendingUp"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote?service=tender-pricing"
        theme="gold"
      />

    </div>
  );
}
