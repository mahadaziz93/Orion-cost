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
  Info
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import QuoteBanner from '../components/QuoteBanner';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Industrial", "Renovation"];

  // 12 Distinct Architectural & Construction Project Examples
  const galleryItems = [
    {
      id: "modern-family-home",
      title: "Modern Family Home",
      category: "Residential",
      location: "Surrey, UK",
      size: "4,200 sq ft",
      year: "2024",
      image: "/images/luxury-home.jpg",
      scope: "Bespoke contemporary dwelling with large-format structural glazing, underfloor heating, and high-efficiency building envelope.",
      services: "Residential Estimating & Quantity Take-Offs"
    },
    {
      id: "office-building",
      title: "Commercial Office Building",
      category: "Commercial",
      location: "Manchester, UK",
      size: "12,500 sq ft",
      year: "2023",
      image: "/images/commercial-estimating.jpg",
      scope: "Multi-storey commercial workplace refurbishment, glazed curtain walling, and Cat A interior layout.",
      services: "Bill of Quantities (BOQ) & Tender Pricing"
    },
    {
      id: "warehouse-logistics",
      title: "Warehouse & Logistics Facility",
      category: "Industrial",
      location: "Birmingham, UK",
      size: "45,000 sq ft",
      year: "2023",
      image: "/images/warehouse-industrial.jpg",
      scope: "Portal-frame logistics depot with reinforced ground slabs, commercial loading docks, and exterior service yard.",
      services: "Quantity Take-Offs & Cost Estimation"
    },
    {
      id: "property-renovation",
      title: "Period Property Modernisation",
      category: "Renovation",
      location: "London, UK",
      size: "3,800 sq ft",
      year: "2022",
      image: "/images/residential-conversion.jpg",
      scope: "Comprehensive structural remodel, mansard roof conversion, and high-specification kitchen living expansion.",
      services: "Residential Estimating & Trade Take-Offs"
    },
    {
      id: "residential-development",
      title: "Residential Housing Scheme",
      category: "Residential",
      location: "Leeds, UK",
      size: "18 Units",
      year: "2022",
      image: "/images/residential-estimating.jpg",
      scope: "Multi-unit suburban residential housing scheme including external civil works and utility infrastructure.",
      services: "Bill of Quantities (BOQ) & Cost Estimation"
    },
    {
      id: "retail-hospitality",
      title: "Retail & Hospitality Scheme",
      category: "Commercial",
      location: "Cambridge, UK",
      size: "8,700 sq ft",
      year: "2023",
      image: "/images/mixed-use-development.jpg",
      scope: "Commercial retail and food premises shell & core build-out with acoustic partitioning and shopfront glazing.",
      services: "Commercial Estimating & Tender Pricing"
    },
    {
      id: "contemporary-extension",
      title: "Rear Extension & Structural Steels",
      category: "Renovation",
      location: "Essex, UK",
      size: "1,850 sq ft",
      year: "2024",
      image: "/images/residential-extension.jpg",
      scope: "Double-storey rear extension with structural steel picture frame, skylights, and bespoke internal finishes.",
      services: "Residential Estimating & Take-Offs"
    },
    {
      id: "commercial-fitout",
      title: "Commercial Office Fit-Out",
      category: "Commercial",
      location: "City of London, UK",
      size: "9,200 sq ft",
      year: "2023",
      image: "/images/office-fitout-modern.jpg",
      scope: "Cat B commercial fit-out featuring acoustic ceilings, raised access flooring, and mechanical & electrical alterations.",
      services: "Tender Pricing & BOQ"
    },
    {
      id: "steel-portal-frame",
      title: "Structural Steel Commercial Unit",
      category: "Industrial",
      location: "Kent, UK",
      size: "28,000 sq ft",
      year: "2023",
      image: "/images/structural-steel.jpg",
      scope: "Industrial unit steel portal framework, cladding calculations, drainage attenuation, and site logistics.",
      services: "Quantity Take-Offs & Tender Support"
    },
    {
      id: "urban-apartments",
      title: "Urban Mixed-Use Development",
      category: "Commercial",
      location: "Bristol, UK",
      size: "14 Apartments",
      year: "2024",
      image: "/images/london-architecture.jpg",
      scope: "Ground floor commercial with high-density residential apartments above, concrete frame, and modern facade.",
      services: "Construction Cost Estimation"
    },
    {
      id: "bespoke-residence",
      title: "Bespoke Contemporary Villa",
      category: "Residential",
      location: "Chigwell, Essex",
      size: "5,600 sq ft",
      year: "2024",
      image: "/images/hero-architecture.jpg",
      scope: "High-end detached luxury home with subterranean basement leisure suite, cantilevered balconies, and landscaping.",
      services: "Residential Estimating & Full BOQ"
    },
    {
      id: "civil-groundworks",
      title: "Site Infrastructure & Groundworks",
      category: "Industrial",
      location: "Hertfordshire, UK",
      size: "3.5 Acres",
      year: "2023",
      image: "/images/site-inspection.jpg",
      scope: "Cut and fill bulk earthworks, retaining structures, surface water drainage attenuation, and access roads.",
      services: "Quantity Take-Offs & Prelims Modeling"
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
              Explore our completed and ongoing projects. See the quality, accuracy and expertise we bring to every construction estimation and cost consultancy service.
            </p>

            {/* 5 Feature Badges from Screenshot 4 */}
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
                <Warehouse className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Industrial Projects</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Wrench className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Renovations &amp; Refurbishments</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-navy-900/80 border border-slate-700/80 px-2.5 py-1.5 rounded text-xs text-slate-200">
                <Coins className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Estimation &amp; Cost Consultancy</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#gallery-grid"
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-5 py-2.5 rounded text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-1.5"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY FILTER & GRID: Matches Screenshot 4 */}
      <section id="gallery-grid" className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Gallery Left (8 cols): Filter Buttons & 6 to 12 Cards Grid */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#081a2e] text-[#d4a34b] shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Illustrative Notice per prompt instructions */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 bg-white p-3 rounded border border-slate-200">
                <Info className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                <span>Visual Project Typology Examples — illustrating representative UK construction scopes supported by our consultancy.</span>
              </div>

              {/* Grid of Cards (2 columns on tablet/desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setActiveProject(item)}
                    className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-[#d4a34b]/60 flex flex-col justify-between"
                  >
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#081a2e]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {item.category}
                      </div>
                      <div className="absolute inset-0 bg-[#081a2e]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-[#081a2e] text-[#d4a34b] text-xs font-bold px-3 py-1.5 rounded flex items-center space-x-1 shadow">
                          <Eye className="w-3.5 h-3.5 mr-1" />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-[#081a2e] group-hover:text-[#b58734] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                          {item.scope}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#b58734]" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>{item.year}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Maximize2 className="w-3 h-3 text-slate-400" />
                            <span>{item.size}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Sidebar Right (4 cols): Highlights & Standards Card matching Screenshot 4 */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm space-y-6">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                    — CONSULTANCY CAPABILITIES
                  </div>
                  <h3 className="text-base font-bold text-[#081a2e]">
                    Consultancy Scope &amp; Expertise
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#081a2e] shrink-0">
                      <Home className="w-4 h-4 text-[#b58734]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e]">Residential &amp; Commercial</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Supporting single dwellings, extensions, commercial fit-outs, and multi-unit developments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#081a2e] shrink-0">
                      <FileCheck2 className="w-4 h-4 text-[#b58734]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e]">UK Industry Standards</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Measurement aligned with standard UK construction conventions (NRM / SMM7 methods).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#081a2e] shrink-0">
                      <Layers className="w-4 h-4 text-[#b58734]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e]">Itemised Bills &amp; Take-Offs</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Delivered in structured Excel workbooks ready for sub-contractor pricing and tender submission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#081a2e] shrink-0">
                      <Coins className="w-4 h-4 text-[#b58734]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#081a2e]">Contractor &amp; Developer Focused</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Dedicated overflow estimating support helping UK building businesses win profitable contracts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-card CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-lg bg-[#081a2e] text-white flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-xs font-bold text-white">Let's Build Your Next Project</div>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Get in touch for a tailored estimate and expert advice.
                      </p>
                    </div>
                    <Link
                      to="/request-a-quote"
                      className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold py-2 px-3 rounded text-xs transition-colors space-x-1"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. MODAL FOR ACCESSIBLE IMAGE VIEWING */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200">
            <div className="relative h-64 bg-slate-900">
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
              <div className="absolute bottom-3 left-4 text-white">
                <span className="bg-[#d4a34b] text-[#081a2e] font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                  {activeProject.category}
                </span>
                <h3 className="text-xl font-bold mt-1">{activeProject.title}</h3>
                <span className="text-xs text-slate-300">{activeProject.location} • {activeProject.size}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Scope</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{activeProject.scope}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Consultancy Services Provided</h4>
                <p className="text-xs sm:text-sm text-[#081a2e] font-semibold mt-1">{activeProject.services}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <Link
                  to="/request-a-quote"
                  onClick={() => setActiveProject(null)}
                  className="bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2 rounded text-xs transition-colors"
                >
                  Request a Quote for Similar Project
                </Link>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA BANNER: Matches Screenshot 4 */}
      <QuoteBanner 
        tagline="QUALITY WORK. REAL RESULTS."
        title="Your Vision, Our Expertise."
        middleTag="From small residential builds to large commercial developments —"
        middleDesc="we're here to bring your project to life, accurately and efficiently."
        middleIcon="handshake"
        buttonText="Request a Quote"
        buttonLink="/request-a-quote"
        theme="gold"
      />

    </div>
  );
}
