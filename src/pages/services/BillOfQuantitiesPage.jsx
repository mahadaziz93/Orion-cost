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
  FolderCheck,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import QuoteBanner from '../../components/QuoteBanner';

export default function BillOfQuantitiesPage() {
  const boqShowcase = [
    {
      title: "NRM2 & SMM7 Compliant BOQs",
      type: "Standard Measurement",
      desc: "Structured itemised bills aligned strictly with UK industry measurement conventions and procurement rules.",
      image: "/images/bill-of-quantities.jpg"
    },
    {
      title: "Preliminaries & Logistics Schedules",
      type: "Site Management",
      desc: "Rigorous accounting for site welfare, insurances, site management, hoisting, scaffolding, and temporary works.",
      image: "/images/tender-documents.jpg"
    },
    {
      title: "Elemental Trade Packages",
      type: "Specification Alignment",
      desc: "Distinct work sections detailing substructure, superstructure, envelope, internal finishes, and MEP installations.",
      image: "/images/architectural-plans.jpg"
    },
    {
      title: "Surveyor Calculation Baseline",
      type: "Quality Control",
      desc: "Systematic auditing of drawing versions, architect revisions, and structural schedules to prevent discrepancies.",
      image: "/images/surveyor-tools.jpg"
    },
    {
      title: "Priced & Unpriced Tender Schedules",
      type: "Contractor Bidding",
      desc: "Clean collection sheets ready for subcontractor distribution or employer agent like-for-like tender comparisons.",
      image: "/images/contractor-review.jpg"
    },
    {
      title: "Senior QS Consultancy Sign-Off",
      type: "Executive Review",
      desc: "Comprehensive review by experienced quantity surveyors before delivery to builders, developers, or funding banks.",
      image: "/images/about-consultancy.jpg"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 4 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/bill-of-quantities.jpg" 
            alt="Bill of Quantities binder, spreadsheets and construction plans" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: "Bill of Quantities (BOQ)" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Bill of Quantities <span className="text-[#d4a34b]">(BOQ)</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Structured, itemised schedules for better cost control and clear project documentation.
            </p>

            {/* 4 Feature Badges from Screenshot 4 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FolderCheck className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Detailed Work Sections</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Layers className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Itemised Quantities</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Professional Documentation</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <TrendingUp className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Supports Tendering &amp; Cost Planning</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote?service=bill-of-quantities"
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

      {/* 2. MAIN CONTENT AREA: Matches Screenshot 4 */}
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
                  Structured &amp; Transparent Cost Schedules
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We prepare comprehensive Bills of Quantities (BOQ) that break down your construction project into clearly defined, itemised sections. Designed to standard UK measurement rules, our BOQs provide a consistent baseline for tendering, cost comparison and ongoing contract administration.
                </p>

                {/* 4 Checkmarks matching Screenshot 4 */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Prepared to standard UK measurement conventions</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Itemised work sections with clear descriptions</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Preliminaries, work packages and provisional sums</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Transparent framework for contractor pricing</span>
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
                    Main contractors, developers, architects and employers needing formal tender documents.
                  </div>
                </div>
              </div>

              {/* 3-Image Collage & Deliverables Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-stretch">
                {/* 3-Image Collage */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 h-44 bg-slate-100 rounded overflow-hidden">
                    <img 
                      src="/images/bill-of-quantities.jpg" 
                      alt="BOQ document with highlighter" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-2 h-44">
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/tender-documents.jpg" 
                        alt="Tender contract documents" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/architectural-plans.jpg" 
                        alt="Specification review" 
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
                        <span>Priced or unpriced Bills of Quantities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Preliminaries &amp; work package breakdowns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Provisional sums &amp; prime cost schedules</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Tender collection &amp; summary sheets</span>
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
                  How We Prepare Your BOQ
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
                        Scope &amp; Drawing Review
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We analyse specifications, employer's requirements and drawings to identify all necessary work items.
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
                        Measurement &amp; Itemisation
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We measure quantities and draft standard item descriptions complying with industry measurement conventions.
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
                        Compilation &amp; Handover
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We format your BOQ into clean spreadsheets ready for contractor pricing or client review.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navy CTA Card matching Screenshot 4 */}
              <div className="bg-[#081a2e] text-white rounded-lg p-6 border border-navy-800 shadow-md">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-navy-900 rounded text-[#d4a34b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Need a Bill of Quantities for Your Project?
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Get in touch for a tailored solution and a competitive quote.
                </p>
                <Link
                  to="/request-a-quote?service=bill-of-quantities"
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

      {/* 2B. BOQ DOCUMENTATION & PROCUREMENT SHOWCASE (6 Images) */}
      <section className="py-14 sm:py-18 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] block mb-1">
              — FORMAL DOCUMENTATION &amp; TENDER SUPPORT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#081a2e]">
              Bill of Quantities Package Deliverables
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Our BOQs eliminate contractor ambiguity, protect clients against unwarranted variations, and establish clear procurement baselines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boqShowcase.map((item, idx) => (
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
                    to="/request-a-quote?service=bill-of-quantities"
                    className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1"
                  >
                    <span>Request BOQ</span>
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
        tagline="CLEAR DOCUMENTATION. BETTER BIDS."
        title="Get a Professional Bill of Quantities"
        middleTag="From tender preparation to post-contract administration —"
        middleDesc="we deliver structured, reliable documentation for UK projects."
        middleIcon="fileSpreadsheet"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote?service=bill-of-quantities"
        theme="gold"
      />

    </div>
  );
}
