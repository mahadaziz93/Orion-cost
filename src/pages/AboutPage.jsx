import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Target, 
  Eye, 
  Diamond, 
  HardHat, 
  FileText, 
  Scale, 
  Compass, 
  Users
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import QuoteBanner from '../components/QuoteBanner';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 5 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/contractor-review.jpg" 
            alt="Site consultants reviewing drawings on construction site" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              About <span className="text-[#d4a34b]">Orion Build Cost</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              We are a UK-based construction cost estimation and consultancy company, helping clients turn their construction vision into reality with accurate, reliable and detailed cost solutions.
            </p>

            {/* 4 Feature Badges from Screenshot 5 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <FileText className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Accurate Estimations</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Trusted Expertise</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Users className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Client Focused</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Layers className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>End-to-End Support</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote"
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

      {/* 2. MAIN STORY, MISSION & VALUES ROW: Matches Screenshot 5 */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Column 1 (Left, 5 cols): Our Story */}
            <div className="lg:col-span-5 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — OUR STORY
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081a2e] mb-4">
                  Building Better Projects Through Accurate Costs
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  <p>
                    Orion Build Cost was founded with a clear goal — to provide precise, transparent and professional cost estimation services for construction projects of all sizes. Operating from our registered UK office in Chigwell, Essex, we support contractors, builders, and developers across the nation.
                  </p>
                  <p>
                    From residential homes and structural extensions to large commercial developments, we work closely with our clients at every stage, ensuring your project is planned, priced and built with confidence.
                  </p>
                </div>
              </div>

              <div>
                <Link
                  to="/request-a-quote"
                  className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-5 py-2.5 rounded text-xs transition-colors space-x-1 shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* Column 2 (Middle, 4 cols): Image & Our Mission Navy Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="h-52 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                <img 
                  src="/images/surveyor-tools.jpg" 
                  alt="Construction hardhat, drawings and laptop" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Our Mission Card */}
              <div className="bg-[#081a2e] text-white rounded-lg p-5 border border-navy-800 flex-1 flex flex-col justify-center">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-1.5 rounded bg-navy-900 text-[#d4a34b]">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To deliver accurate, reliable and professional cost estimation and consultancy services that add real value to every project.
                </p>
              </div>
            </div>

            {/* Column 3 (Right, 3 cols): Our Vision & Values */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {/* Vision Card */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 rounded bg-slate-100 text-[#081a2e]">
                    <Eye className="w-4 h-4 text-[#b58734]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#081a2e]">Our Vision</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become a trusted provider of construction cost estimation and consultancy services, known for our accuracy, integrity and commitment to excellence.
                </p>
              </div>

              {/* Values Card */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm flex-1">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-1.5 rounded bg-slate-100 text-[#081a2e]">
                    <Diamond className="w-4 h-4 text-[#b58734]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#081a2e]">Our Values</h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Accuracy &amp; Integrity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Professionalism &amp; Reliability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Client Satisfaction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Continuous Improvement</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* 3. BOTTOM DISCIPLINES ROW: Matches Screenshot 5 */}
          <div>
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                — OUR CONSULTANCY DISCIPLINES
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#081a2e]">
                Experienced. Skilled. Dedicated.
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our consultancy brings together quantity surveying and cost management expertise across the construction lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#081a2e] mb-3">
                  <Layers className="w-5 h-5 text-[#b58734]" />
                </div>
                <h4 className="text-sm font-bold text-[#081a2e] mb-1">
                  Quantity Surveyors
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Accurate digital measurements, trade breakdowns, and comprehensive take-off analysis.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#081a2e] mb-3">
                  <Scale className="w-5 h-5 text-[#b58734]" />
                </div>
                <h4 className="text-sm font-bold text-[#081a2e] mb-1">
                  Cost Consultants
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Strategic advice, market rate benchmarking, and value engineering for better decision making.
                </p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-[#081a2e] mb-3">
                  <Building2 className="w-5 h-5 text-[#b58734]" />
                </div>
                <h4 className="text-sm font-bold text-[#081a2e] mb-1">
                  Project Specialists
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-world experience across residential new-builds, commercial spaces, and refurbishments.
                </p>
              </div>

              {/* Navy CTA Card matching Screenshot 5 */}
              <div className="bg-[#081a2e] text-white rounded-lg p-5 border border-navy-800 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[#d4a34b] mb-1.5">
                    <HardHat className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Let's Build</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Your Next Project
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    Get in touch for a tailored solution and competitive quote.
                  </p>
                </div>
                <Link
                  to="/request-a-quote"
                  className="w-full flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold py-2 px-3 rounded text-xs transition-colors space-x-1 shadow"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. BOTTOM BANNER */}
      <QuoteBanner 
        tagline="READY TO DISCUSS YOUR PROJECT?"
        title="Get a Quote for Your Construction Project"
        middleTag="Send us your drawings or specifications today"
        middleDesc="for a confidential, professional quotation."
        middleIcon="mail"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote"
        theme="gold"
      />

    </div>
  );
}
