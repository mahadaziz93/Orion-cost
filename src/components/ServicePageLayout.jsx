import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Clock, 
  ShieldCheck, 
  FileSpreadsheet, 
  Building2, 
  ChevronRight,
  HelpCircle,
  FolderDown
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import QuoteBanner from './QuoteBanner';
import { servicesData } from '../data/servicesData';

export default function ServicePageLayout({ service, faqs = [], additionalContent }) {
  if (!service) return null;

  // Other services for sidebar
  const otherServices = servicesData.filter(s => s.id !== service.id);

  return (
    <div className="bg-white">
      
      {/* 1. HERO HEADER */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 relative overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", link: "/services" },
            { label: service.title }
          ]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-gold-400 font-semibold text-xs uppercase tracking-wider bg-navy-900/80 px-2.5 py-1 rounded border border-gold-500/30">
              Quantity Surveying Consultancy
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-3 mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {service.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={`/request-a-quote?service=${service.id}`}
                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3.5 rounded shadow text-sm tracking-wide transition-all"
              >
                <span>Request a Quote for {service.shortTitle}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-3.5 rounded border border-navy-700 text-sm transition-colors"
              >
                <span>Speak to Our QS Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BODY SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main content: 8 cols */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mb-4">
                  Overview &amp; Professional Scope
                </h2>
                <div className="prose max-w-none text-slate-600 space-y-4 text-base leading-relaxed">
                  <p>{service.description}</p>
                  <p>{service.whyNeeded}</p>
                </div>
              </div>

              {/* Feature Image with caption */}
              {service.secondaryImage && (
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-subtle">
                  <img 
                    src={service.secondaryImage} 
                    alt={`${service.title} technical review`} 
                    className="w-full h-72 sm:h-96 object-cover"
                  />
                  <div className="bg-slate-50 p-3 text-xs text-slate-500 border-t border-slate-200">
                    Precision measurements and documentation prepared to UK standards.
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl font-bold text-navy-950 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-gold-600 mr-2" />
                  What You Receive (Key Deliverables)
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Every project is backed by transparent, unencumbered deliverables formatted for immediate commercial use:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-3.5 rounded border border-slate-200/80">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-step Methodology */}
              <div>
                <h3 className="text-2xl font-bold text-navy-950 mb-6">
                  Our Step-by-Step Delivery Process
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((s, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-5 rounded-lg border border-slate-200 bg-white">
                      <div className="p-3 bg-navy-950 text-gold-400 font-extrabold rounded text-base shrink-0">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-navy-950 mb-1">{s.title}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom additional content slot if provided */}
              {additionalContent}

              {/* FAQs */}
              {faqs.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-navy-950 mb-6 flex items-center">
                    <HelpCircle className="w-6 h-6 text-gold-600 mr-2" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                        <h4 className="text-base font-bold text-navy-950 mb-2">{faq.question}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar: 4 cols */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Quote CTA Box */}
              <div className="bg-navy-950 text-white rounded-lg p-6 sm:p-8 border border-navy-800 shadow-xl">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider block mb-2">
                  Request a Quotation
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Need {service.title}?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Upload your architectural drawings, specifications, or tender package. We will review the documents and provide a fixed quotation for our consultancy service.
                </p>
                <Link
                  to={`/request-a-quote?service=${service.id}`}
                  className="w-full flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3.5 px-4 rounded text-sm transition-colors text-center shadow"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <div className="mt-4 pt-4 border-t border-navy-800/80 text-[11px] text-slate-400 text-center">
                  Strict drawing confidentiality guaranteed.
                </div>
              </div>

              {/* Who It's For Box */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle">
                <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  Target Audience
                </h4>
                <ul className="space-y-2.5">
                  {service.targetAudience.map((audience, aIdx) => (
                    <li key={aIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle">
                <h4 className="text-sm font-bold text-navy-950 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  Other Services
                </h4>
                <ul className="space-y-2">
                  {otherServices.map((other) => (
                    <li key={other.id}>
                      <Link 
                        to={other.path}
                        className="text-xs font-semibold text-slate-700 hover:text-gold-600 flex items-center justify-between py-1.5 transition-colors group"
                      >
                        <span>{other.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-500 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <QuoteBanner 
        title={`Get a Fixed Fee Quote for ${service.title}`}
        subtitle="Submit your project drawings or tender documentation for a prompt review by our quantity surveying team."
      />
    </div>
  );
}
