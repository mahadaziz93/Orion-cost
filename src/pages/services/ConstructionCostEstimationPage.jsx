import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  Mail, 
  Users, 
  FileText, 
  FileSpreadsheet, 
  Check, 
  ShieldCheck, 
  BarChart, 
  Layers
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import QuoteBanner from '../../components/QuoteBanner';

export default function ConstructionCostEstimationPage() {
  const costShowcase = [
    {
      title: "Scheme Feasibility & Early Estimates",
      type: "NRM1 Cost Model",
      desc: "Robust order-of-cost estimates developed from concept sketches and preliminary spatial metrics.",
      image: "/images/construction-cost.jpg"
    },
    {
      title: "Structural & Superstructure Costs",
      type: "Frame & Civils Modeling",
      desc: "Detailed pricing models evaluating concrete frame, structural steel, and hybrid systems for value optimisation.",
      image: "/images/structural-steel.jpg"
    },
    {
      title: "Elemental Design Stage Plans",
      type: "RIBA Stage Costing",
      desc: "Cost plans tracking design progression across RIBA Stages 2 through 4 to ensure schemes stay within budget.",
      image: "/images/architectural-plans.jpg"
    },
    {
      title: "Site Abnormals & Ground Risk",
      type: "Risk Appraisals",
      desc: "Allowances for ground contamination, piling, retaining structures, statutory diversions, and site access constraints.",
      image: "/images/site-inspection.jpg"
    },
    {
      title: "Market Supply Chain Intelligence",
      type: "Rate Benchmarking",
      desc: "Estimates calibrated against current UK construction price indices, tender inflation, and regional labour availability.",
      image: "/images/contractor-review.jpg"
    },
    {
      title: "Bank & Investor Monitoring Reports",
      type: "Financial Validation",
      desc: "Formal construction appraisals providing financial institutions and development funders with independent certainty.",
      image: "/images/about-consultancy.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 3 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/construction-cost.jpg" 
            alt="Multi-storey building construction site at sunset" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: "Construction Cost Estimation" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Construction <span className="text-[#d4a34b]">Cost Estimation</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Accurate, reliable and detailed cost estimates for all types of construction projects. We help you plan, budget and build with confidence.
            </p>

            {/* 4 Feature Badges from Screenshot 3 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Detailed Cost Breakdowns</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Material &amp; Labour Cost Analysis</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Layers className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Build-up &amp; Trade Cost Estimates</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <BarChart className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Risk Assessment &amp; Value Engineering</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote?service=construction-cost-estimation"
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

      {/* 2. MAIN CONTENT AREA: Matches Screenshot 3 */}
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
                  Construction Cost Estimation
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We provide comprehensive and accurate construction cost estimates for all types of projects — from small renovations to large-scale infrastructure. Our detailed estimates cover every aspect of the build, helping you make informed decisions and avoid costly surprises.
                </p>

                {/* 4 Checkmarks matching Screenshot 3 */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Comprehensive cost estimates covering all project elements</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Detailed material, labour and plant cost breakdowns</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Up-to-date pricing based on current UK market data</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Clear and transparent reporting for confident budgeting</span>
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
                    Developers, contractors, architects and property owners needing reliable budget certainty.
                  </div>
                </div>
              </div>

              {/* 3-Image Collage & What's Included Card Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-stretch">
                {/* 3-Image Collage */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 h-44 bg-slate-100 rounded overflow-hidden">
                    <img 
                      src="/images/construction-cost.jpg" 
                      alt="Construction site frame" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-2 h-44">
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/structural-steel.jpg" 
                        alt="Structural frame" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/site-inspection.jpg" 
                        alt="Surveyor inspection" 
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
                        <span>Elemental cost estimates (NRM compliant)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Trade-by-trade cost breakdowns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Contingency &amp; risk analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Professional consultancy summary report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Informational Consultancy Notice */}
              <div className="p-4 rounded-lg bg-slate-50/80 border border-slate-200/90 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#081a2e]">Consultancy Basis:</span> Construction cost estimates are prepared strictly as bespoke professional consultancy assessments based on supplied drawings, specifications, and site information. We do not use generic automatic calculators or synthetic approximations.
              </div>

            </div>

            {/* Right Column (4 cols): Our Process 3 Steps & Navy CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR PROCESS
                </div>
                <h3 className="text-base font-bold text-[#081a2e] mb-5">
                  How We Estimate Your Costs
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
                        Project Brief &amp; Plan Review
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We review your drawings, specifications and project requirements in detail.
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
                        We apply current market rates and industry benchmarks to calculate accurate costs.
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

              {/* Navy CTA Card matching Screenshot 3 */}
              <div className="bg-[#081a2e] text-white rounded-lg p-6 border border-navy-800 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-navy-900 rounded text-[#d4a34b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Need a Construction Cost Estimate?
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Get in touch for a tailored solution and a competitive quote.
                </p>
                <Link
                  to="/request-a-quote?service=construction-cost-estimation"
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

      {/* 2B. CONSTRUCTION COST ESTIMATION SHOWCASE (6 Images) */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] block mb-1">
              — CONSULTANCY COST PLANNING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081a2e]">
              Cost Estimation Models Across Scheme Stages
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Our quantity surveying consultancy supports UK developers and contractors through early appraisals, pre-planning viability, and live contract procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costShowcase.map((item, idx) => (
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
                    to="/request-a-quote?service=construction-cost-estimation"
                    className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1"
                  >
                    <span>Request Cost Plan</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER: Matches Screenshot 3 */}
      <QuoteBanner 
        tagline="ACCURATE ESTIMATES. STRONGER PROJECTS."
        title="Get an Accurate Cost Estimate for Your Project"
        middleTag="From initial budget to final construction —"
        middleDesc="we provide detailed cost estimates to keep your project on budget."
        middleIcon="calculator"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote?service=construction-cost-estimation"
        theme="gold"
      />

    </div>
  );
}
