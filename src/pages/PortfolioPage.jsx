import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Calendar, 
  Maximize2, 
  Layers, 
  Home, 
  Warehouse, 
  Wrench, 
  Coins, 
  FileCheck2, 
  Eye, 
  Info,
  Compass,
  FileSpreadsheet
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import QuoteBanner from '../components/QuoteBanner';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    "All", 
    "Residential Projects", 
    "Commercial Projects", 
    "Construction Developments", 
    "Construction Details"
  ];

  // Organised Project Examples matching Phase 7
  const galleryItems = [
    // 1. RESIDENTIAL PROJECTS
    {
      id: "modern-family-home",
      title: "Modern Family Home",
      category: "Residential Projects",
      location: "Surrey, UK",
      size: "4,200 sq ft",
      year: "2024",
      image: "/images/luxury-home.jpg",
      scope: "Bespoke contemporary dwelling with large-format structural glazing, underfloor heating, and high-efficiency building envelope.",
      services: "Residential Estimating & Quantity Take-Offs"
    },
    {
      id: "residential-newbuild-dev",
      title: "Suburban Housing Development",
      category: "Residential Projects",
      location: "Leeds, UK",
      size: "18 Units",
      year: "2024",
      image: "/images/residential-newbuild.jpg",
      scope: "Multi-unit suburban residential housing scheme including external civil works, utility infrastructure, and substructure take-off.",
      services: "Bill of Quantities (BOQ) & Cost Estimation"
    },
    {
      id: "contemporary-extension",
      title: "Rear Extension & Structural Steels",
      category: "Residential Projects",
      location: "Essex, UK",
      size: "1,850 sq ft",
      year: "2024",
      image: "/images/residential-extension.jpg",
      scope: "Double-storey rear extension with structural steel picture frame, skylights, and bespoke internal finishes.",
      services: "Residential Estimating & Take-Offs"
    },
    {
      id: "period-property-renovation",
      title: "Period Property Modernisation",
      category: "Residential Projects",
      location: "London, UK",
      size: "3,800 sq ft",
      year: "2023",
      image: "/images/residential-renovation.jpg",
      scope: "Comprehensive structural remodel, mansard roof conversion, and high-specification kitchen living expansion.",
      services: "Residential Estimating & Trade Take-Offs"
    },
    {
      id: "residential-apartments",
      title: "Medium-Density Residential Scheme",
      category: "Residential Projects",
      location: "Bristol, UK",
      size: "14 Apartments",
      year: "2024",
      image: "/images/residential-apartment.jpg",
      scope: "Apartment block cost planning, communal service risers, fire-stopping detailing, and building envelope quantification.",
      services: "BOQ Preparation & Tender Pricing"
    },
    {
      id: "residential-conversion",
      title: "Bespoke Barn Conversion",
      category: "Residential Projects",
      location: "Hertfordshire, UK",
      size: "2,900 sq ft",
      year: "2023",
      image: "/images/residential-conversion.jpg",
      scope: "Timber frame restoration, structural underpinning, high-efficiency insulation upgrade, and bespoke joinery schedule.",
      services: "Residential Estimating & Quantity Take-Offs"
    },

    // 2. COMMERCIAL PROJECTS
    {
      id: "office-building",
      title: "Commercial Office Building",
      category: "Commercial Projects",
      location: "Manchester, UK",
      size: "12,500 sq ft",
      year: "2023",
      image: "/images/commercial-estimating.jpg",
      scope: "Multi-storey commercial workplace refurbishment, glazed curtain walling, and Cat A interior layout.",
      services: "Bill of Quantities (BOQ) & Tender Pricing"
    },
    {
      id: "commercial-fitout",
      title: "Corporate Office CAT B Fit-Out",
      category: "Commercial Projects",
      location: "City of London, UK",
      size: "9,200 sq ft",
      year: "2023",
      image: "/images/office-fitout-modern.jpg",
      scope: "Cat B commercial fit-out featuring acoustic ceilings, raised access flooring, and mechanical & electrical alterations.",
      services: "Tender Pricing & BOQ"
    },
    {
      id: "retail-hospitality",
      title: "Retail & Commercial Storefront",
      category: "Commercial Projects",
      location: "Cambridge, UK",
      size: "8,700 sq ft",
      year: "2023",
      image: "/images/commercial-retail.jpg",
      scope: "Commercial retail and food premises shell & core build-out with acoustic partitioning and shopfront glazing.",
      services: "Commercial Estimating & Tender Pricing"
    },
    {
      id: "warehouse-logistics",
      title: "Warehouse & Logistics Facility",
      category: "Commercial Projects",
      location: "Birmingham, UK",
      size: "45,000 sq ft",
      year: "2023",
      image: "/images/warehouse-industrial.jpg",
      scope: "Portal-frame logistics depot with reinforced ground slabs, commercial loading docks, and exterior service yard.",
      services: "Quantity Take-Offs & Cost Estimation"
    },
    {
      id: "commercial-business-park",
      title: "Commercial Logistics Business Park",
      category: "Commercial Projects",
      location: "Milton Keynes, UK",
      size: "62,000 sq ft",
      year: "2024",
      image: "/images/commercial-industrial-park.jpg",
      scope: "Multi-unit commercial trade park, service roadways, commercial utilities, and perimeter security fencing.",
      services: "Commercial Cost Planning & Full BOQ"
    },
    {
      id: "urban-commercial-tower",
      title: "Urban Mixed Commercial Complex",
      category: "Commercial Projects",
      location: "Canary Wharf, London",
      size: "34,000 sq ft",
      year: "2024",
      image: "/images/london-architecture.jpg",
      scope: "High-density urban commercial building, commercial MEP services, high-speed lift shafts, and commercial facade.",
      services: "Commercial Estimating & Value Engineering"
    },

    // 3. CONSTRUCTION DEVELOPMENTS
    {
      id: "mixed-use-development",
      title: "Mixed-Use Retail & Residential",
      category: "Construction Developments",
      location: "Reading, UK",
      size: "22,000 sq ft",
      year: "2024",
      image: "/images/mixed-use-development.jpg",
      scope: "Scheme combining ground-floor commercial convenience units with upper-floor residential dwellings and parking.",
      services: "Construction Cost Estimation & BOQ"
    },
    {
      id: "concrete-frame-scheme",
      title: "Multi-Storey Concrete Frame Scheme",
      category: "Construction Developments",
      location: "Stratford, London",
      size: "18,500 sq ft",
      year: "2023",
      image: "/images/construction-cost.jpg",
      scope: "Reinforced concrete frame, post-tensioned slabs, tower crane logistics modeling, and elemental cost plan.",
      services: "Construction Cost Estimation"
    },
    {
      id: "steel-portal-frame",
      title: "Structural Steel Commercial Unit",
      category: "Construction Developments",
      location: "Kent, UK",
      size: "28,000 sq ft",
      year: "2023",
      image: "/images/structural-steel.jpg",
      scope: "Industrial unit steel portal framework, cladding calculations, drainage attenuation, and site logistics.",
      services: "Quantity Take-Offs & Tender Support"
    },
    {
      id: "civil-groundworks",
      title: "Site Infrastructure & Groundworks",
      category: "Construction Developments",
      location: "Hertfordshire, UK",
      size: "3.5 Acres",
      year: "2023",
      image: "/images/site-inspection.jpg",
      scope: "Cut and fill bulk earthworks, retaining structures, surface water drainage attenuation, and access roads.",
      services: "Quantity Take-Offs & Prelims Modeling"
    },

    // 4. CONSTRUCTION DETAILS
    {
      id: "digital-drawing-takeoff",
      title: "Digital Drawing Take-Off & Overlay",
      category: "Construction Details",
      location: "Consultancy Office",
      size: "NRM2 Calibrated",
      year: "2024",
      image: "/images/architectural-plans.jpg",
      scope: "Direct electronic measurement of architectural plans with colour-coded polygon takeoffs for groundworks, masonry, and finishes.",
      services: "Quantity Take-Offs"
    },
    {
      id: "surveyor-measurement-station",
      title: "Surveyor Take-Off Workstation",
      category: "Construction Details",
      location: "Consultancy Office",
      size: "Drawing Audit",
      year: "2024",
      image: "/images/surveyor-tools.jpg",
      scope: "Digital measurement and scale calibration equipment used for trade package breakdowns and structural steel schedules.",
      services: "Precision Measurement"
    },
    {
      id: "boq-measurement-schedule",
      title: "Bill of Quantities Work Schedule",
      category: "Construction Details",
      location: "NRM2 Standard",
      size: "Full Schedule",
      year: "2024",
      image: "/images/bill-of-quantities.jpg",
      scope: "Itemised work sections, standard descriptions, and preliminary matrices compiled into clear spreadsheet models.",
      services: "BOQ Preparation"
    },
    {
      id: "tender-package-review",
      title: "Tender Package & Enquiries Review",
      category: "Construction Details",
      location: "Commercial Bid Audit",
      size: "Contract Package",
      year: "2024",
      image: "/images/tender-documents.jpg",
      scope: "Subcontractor rate audit, trade enquiries, prelims build-up, and commercial risk register compilation.",
      services: "Tender Pricing Support"
    },
    {
      id: "senior-qs-audit",
      title: "Senior QS Consultancy Review",
      category: "Construction Details",
      location: "Chigwell Office",
      size: "Quality QA",
      year: "2024",
      image: "/images/about-consultancy.jpg",
      scope: "Comprehensive independent quality assurance cross-checking mathematical takeoffs against engineering specifications.",
      services: "Consultancy Audit & Verification"
    }
  ];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 4 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/tender-pricing.jpg" 
            alt="Commercial construction site with tower cranes" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Portfolio / <span className="text-[#d4a34b]">Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Explore our project scope and estimating expertise across UK residential builds, commercial developments, and detailed technical quantity surveying packages.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Home className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Residential Projects</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Building2 className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Commercial Projects</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Layers className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Construction Developments</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Compass className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Construction Details</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/request-a-quote"
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-6 py-3 rounded text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY CONTROLS & GRID */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Informative Label */}
          <div className="bg-white border border-slate-200 rounded-lg p-4 mb-8 flex items-start space-x-3 text-xs text-slate-600 shadow-sm">
            <Info className="w-4 h-4 text-[#b58734] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#081a2e]">Portfolio &amp; Scope Showcase:</span> The examples below illustrate the typologies, scale, and technical standards of UK residential schemes, commercial facilities, and construction details supported by Orion Build Cost quantity surveying and estimating services.
            </div>
          </div>

          {/* Filter Pills matching Screenshot 4 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#081a2e] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#d4a34b]/60 hover:text-[#081a2e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group hover:border-[#d4a34b]/60"
              >
                {/* Image */}
                <div className="h-56 bg-slate-100 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#081a2e]/90 text-[#d4a34b] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">
                    {item.size}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-[11px] text-slate-500 mb-1.5 space-x-1.5">
                      <MapPin className="w-3 h-3 text-[#b58734]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#081a2e] mb-2 group-hover:text-[#b58734] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.scope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-600 truncate max-w-[190px]">
                      {item.services}
                    </span>
                    <button
                      onClick={() => setActiveProject(item)}
                      className="text-xs font-bold text-[#b58734] hover:text-[#916720] inline-flex items-center space-x-1"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal View for Project Scope */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-[#081a2e]/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-60 bg-slate-100">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 bg-[#081a2e]/80 text-white p-1.5 rounded-full hover:bg-[#081a2e] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#081a2e]/90 text-[#d4a34b] text-xs font-bold px-3 py-1 rounded">
                {activeProject.category}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center text-xs text-slate-500 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#b58734] mr-1" />
                <span>{activeProject.location}</span>
                <span className="mx-2">•</span>
                <span>{activeProject.size}</span>
              </div>

              <h3 className="text-xl font-bold text-[#081a2e] mb-3">
                {activeProject.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeProject.scope}
              </p>

              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs text-slate-700 mb-6">
                <span className="font-bold text-[#081a2e] block mb-1">Consultancy Scope:</span>
                {activeProject.services}
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 border border-slate-200 rounded text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>
                <Link
                  to="/request-a-quote"
                  className="bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-5 py-2 rounded text-xs transition-colors"
                >
                  Request a Quote for Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BOTTOM CTA BANNER: Matches Screenshot 4 */}
      <QuoteBanner 
        tagline="READY TO DISCUSS YOUR PROJECT?"
        title="Get a Quote for Your Construction Project"
        middleTag="Send us your drawings or specifications —"
        middleDesc="we'll provide a fixed quotation for your project."
        middleIcon="mail"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote"
        theme="gold"
      />

    </div>
  );
}
