import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileSpreadsheet, 
  Layers, 
  HardHat, 
  Home, 
  Coins, 
  ArrowRight, 
  ChevronRight,
  FileText
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import QuoteBanner from '../components/QuoteBanner';

export default function ServicesOverviewPage() {
  const servicesList = [
    {
      id: "quantity-take-offs",
      title: "Quantity Take-Offs",
      desc: "Accurate measurement and quantity analysis from your drawings, supporting better cost control and tendering.",
      path: "/services/quantity-take-offs",
      image: "/images/quantity-takeoffs.jpg",
      icon: Layers
    },
    {
      id: "bill-of-quantities",
      title: "Bill of Quantities (BOQ)",
      desc: "Structured, itemised schedules for better cost control and clear project documentation.",
      path: "/services/bill-of-quantities",
      image: "/images/bill-of-quantities.jpg",
      icon: FileSpreadsheet
    },
    {
      id: "tender-pricing",
      title: "Tender Pricing",
      desc: "Competitive and detailed pricing support for your tender submissions.",
      path: "/services/tender-pricing",
      image: "/images/tender-pricing.jpg",
      icon: HardHat
    },
    {
      id: "residential-estimating",
      title: "Residential Estimating",
      desc: "New builds, extensions and renovations with precise cost planning.",
      path: "/services/residential-estimating",
      image: "/images/residential-estimating.jpg",
      icon: Home
    },
    {
      id: "commercial-estimating",
      title: "Commercial Estimating",
      desc: "Offices, retail, industrial and large-scale commercial developments.",
      path: "/services/commercial-estimating",
      image: "/images/commercial-estimating.jpg",
      icon: Building2
    },
    {
      id: "construction-cost-estimation",
      title: "Construction Cost Estimation",
      desc: "Comprehensive cost advice based on your project requirements.",
      path: "/services/construction-cost-estimation",
      image: "/images/construction-cost.jpg",
      icon: Coins
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 2 with dark navy gradient & engineers in high-vis */}
      <section className="bg-[#081a2e] text-white py-14 sm:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
          <img 
            src="/images/contractor-review.jpg" 
            alt="Site engineers reviewing construction scheme" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          
          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Our <span className="text-[#d4a34b]">Services</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              We provide a comprehensive range of quantity surveying and construction cost consultancy services for UK contractors, builders and developers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SERVICES 2x3 CARD GRID: Matches Screenshot 2 */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {servicesList.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group hover:border-[#d4a34b]/60"
                >
                  {/* Left image column */}
                  <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-100 relative shrink-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right content column */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#081a2e] mb-3 group-hover:bg-[#fcf8ee] group-hover:text-[#b58734] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Title */}
                      <h2 className="text-base font-bold text-[#081a2e] leading-snug mb-2 group-hover:text-[#b58734] transition-colors">
                        {service.title}
                      </h2>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    {/* Gold CTA button */}
                    <div>
                      <Link
                        to={service.path}
                        className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2 rounded text-xs transition-colors space-x-1.5 shadow-sm"
                      >
                        <span>View Service</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA BANNER: Matches Screenshot 2 */}
      <QuoteBanner 
        tagline="NEED SUPPORT WITH YOUR PROJECT?"
        title="Get a Quote for Your Construction Project"
        middleTag="Let's discuss your requirements"
        middleDesc="Send us your project details and we'll get back to you."
        middleIcon="mail"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote"
        theme="gold"
      />

    </div>
  );
}
