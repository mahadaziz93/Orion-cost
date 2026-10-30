import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Users, 
  FileCheck, 
  FileSpreadsheet, 
  Scale, 
  Ruler, 
  Check, 
  FileText,
  Search,
  CheckCircle
} from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import QuoteBanner from '../../components/QuoteBanner';

export default function QuantityTakeOffsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 3 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/quantity-takeoffs.jpg" 
            alt="Measuring architectural blueprints with scale ruler" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: "Quantity Take-Offs" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Quantity <span className="text-[#d4a34b]">Take-Offs</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Accurate measurement and quantity analysis from your drawings, supporting better cost control and tendering.
            </p>

            {/* 3 Feature Badges from Screenshot 3 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Ruler className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Detailed Measurements</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileCheck className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Accurate Quantities</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Clear Reporting</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote?service=quantity-take-offs"
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
            
            {/* Left Column (8 cols): Our Service, Checkmarks, Ideal For, 3-image collage, Deliverables */}
            <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
              
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR SERVICE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081a2e] mb-3">
                  Precision in Every Measurement
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We provide professional quantity take-off services by analysing your architectural and structural drawings. Our team identifies and measures all relevant elements to create a detailed quantity schedule, helping you plan, tender and control costs with confidence.
                </p>

                {/* 4 Checkmarks matching Screenshot 3 */}
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Architectural, structural and MEP drawings</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Accurate measurement of all building elements</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Detailed and structured quantity schedules</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#fcf8ee] border border-[#d4a34b] text-[#b58734] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Clear, easy-to-understand reporting</span>
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
                    UK contractors, builders, and developers working on residential and commercial projects.
                  </div>
                </div>
              </div>

              {/* 3-Image Collage & Deliverables Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 items-stretch">
                {/* 3-Image Collage */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1 h-44 bg-slate-100 rounded overflow-hidden">
                    <img 
                      src="/images/site-inspection.jpg" 
                      alt="Construction site engineer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-2 h-44">
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/architectural-plans.jpg" 
                        alt="Scale measurement on plan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded overflow-hidden bg-slate-100">
                      <img 
                        src="/images/tender-documents.jpg" 
                        alt="Detailed schedules" 
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
                        <span>Detailed measurement breakdowns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Quantity schedules (CSV / Excel / PDF)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Annotated drawings (where applicable)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0 mt-0.5" />
                        <span>Professional summary report</span>
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
                  From Drawings to Detailed Quantities
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
                        Receive Drawings
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        We review your architectural and structural drawings to understand the project scope.
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
                        Measure and Analyse
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Our team carries out detailed measurements and checks for accuracy and consistency.
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
                        Deliver Results
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        You receive a clear quantity schedule and report in your preferred format.
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
                    Need Quantity Take-Offs for Your Project?
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Get in touch for a tailored solution and a competitive quote.
                </p>
                <Link
                  to="/request-a-quote?service=quantity-take-offs"
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

      {/* 3. BOTTOM CTA BANNER */}
      <QuoteBanner 
        tagline="READY TO DISCUSS YOUR PROJECT?"
        title="Get a Quote for Your Construction Project"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote?service=quantity-take-offs"
        theme="gold"
      />

    </div>
  );
}
