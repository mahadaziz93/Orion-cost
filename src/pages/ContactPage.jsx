import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Check, 
  ExternalLink,
  Users,
  Building2,
  Clock
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residential Project',
    projectLocation: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid UK email address";
      }
    }

    if (!formData.projectLocation.trim()) errs.projectLocation = "Please specify project location";
    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 10) {
      errs.projectDetails = "Please outline your project enquiry (at least 10 characters)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 2 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/surveyor-tools.jpg" 
            alt="Surveyor tools, hardhat and blueprints" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Contact <span className="text-[#d4a34b]">Us</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Have a project in mind? We're here to help. Get in touch with our team for a free consultation and expert advice on your construction cost estimation and consultancy needs.
            </p>

            {/* 4 Feature Badges from Screenshot 2 */}
            <div className="flex flex-wrap gap-2.5">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Users className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Expert Advice: From Industry Professionals</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Trusted &amp; Reliable Service</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Building2 className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Construction Cost Experts</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Your Project Our Priority</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 3-COLUMN SECTION: Matches Screenshot 2 */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1 (3 cols): Contact Information */}
            <div className="lg:col-span-3 space-y-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — GET IN TOUCH
                </div>
                <h2 className="text-lg font-bold text-[#081a2e] mb-2">
                  Our Contact Information
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  We're available to answer your questions and discuss your project requirements. Reach out to us through the details below or fill out the contact form, and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#081a2e] text-[#d4a34b] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Email Us</span>
                    <a href={`mailto:${companyInfo.email}`} className="text-xs font-semibold text-[#081a2e] hover:text-[#b58734] break-all">
                      {companyInfo.email}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">We typically reply within 24–48 hours.</span>
                  </div>
                </div>

                {/* Office Item */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#081a2e] text-[#d4a34b] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Our Office</span>
                    <p className="text-xs font-semibold text-[#081a2e]">
                      {companyInfo.address.full}
                    </p>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Visit us for a consultation (by appointment).</span>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#081a2e] text-[#d4a34b] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Follow Us</span>
                    <a 
                      href={companyInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-semibold text-[#081a2e] hover:text-[#b58734] inline-flex items-center space-x-1"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 text-slate-400" />
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Stay updated with our latest insights.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 (5 cols): The Form */}
            <div className="lg:col-span-5 bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — SEND US A MESSAGE
                </div>
                <h3 className="text-xl font-bold text-[#081a2e]">
                  Get in <span className="text-[#b58734]">Touch</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about your project and we'll get back to you with the best solution for your needs.
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-[#fcf8ee] text-[#b58734] rounded-full flex items-center justify-center mx-auto border border-[#d4a34b]">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#081a2e]">Enquiry Received</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your message has been compiled and logged. A member of our quantity surveying team will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', projectType: 'Residential Project', projectLocation: '', projectDetails: '' });
                    }}
                    className="bg-[#d4a34b] text-[#081a2e] font-bold px-4 py-2 rounded text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. David Miller"
                        className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. david@millerbuilders.co.uk"
                        className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#d4a34b]"
                      >
                        <option value="Residential Project">Residential Project</option>
                        <option value="Commercial Project">Commercial Project</option>
                        <option value="Industrial Facility">Industrial Facility</option>
                        <option value="Tender Submission">Tender Submission</option>
                        <option value="Quantity Take-Off Enquiry">Quantity Take-Off Enquiry</option>
                        <option value="General Consultancy Query">General Consultancy Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="e.g. London, UK"
                        className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                          errors.projectLocation ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.projectLocation && <p className="text-[10px] text-red-500 mt-0.5">{errors.projectLocation}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="projectDetails"
                      rows="4"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your project (size, location, timeline, etc.)"
                      className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                        errors.projectDetails ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    ></textarea>
                    {errors.projectDetails && <p className="text-[10px] text-red-500 mt-0.5">{errors.projectDetails}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold py-2.5 px-4 rounded text-xs sm:text-sm transition-colors space-x-1.5 shadow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Column 3 (4 cols): Location Card & Why Work With Us matching Screenshot 2 */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Office Map Card */}
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-36 bg-slate-100 relative p-4 flex flex-col justify-end bg-[radial-gradient(#d4a34b_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow border border-slate-200 text-[#081a2e]">
                    <MapPin className="w-5 h-5 text-[#b58734]" />
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm p-3 rounded border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#b58734] block">Our Office</span>
                    <span className="text-xs font-bold text-[#081a2e] block">{companyInfo.address.full}</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center text-[10px] font-bold text-white bg-[#081a2e] hover:bg-navy-900 px-2.5 py-1 rounded space-x-1"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Work With Us Card */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-[#081a2e] uppercase tracking-wider">
                  Why Work With Us?
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Accurate and reliable cost estimates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Industry expertise in construction and QS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Clear communication and professional support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#b58734] shrink-0" />
                    <span>Tailored solutions for your project needs</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 text-right">
                  <span className="font-serif italic text-base text-[#081a2e]">
                    Build Smarter. <span className="font-sans font-bold text-[#b58734] not-italic">Grow Faster.</span>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
