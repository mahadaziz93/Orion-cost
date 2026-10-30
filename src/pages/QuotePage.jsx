import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FileCheck2, 
  UploadCloud, 
  FileText, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
  Loader2,
  Check,
  Target,
  Briefcase,
  Layers,
  HelpCircle,
  Users
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/servicesData';
import Breadcrumbs from '../components/Breadcrumbs';

/**
 * BACKEND INTEGRATION POINT SPECIFICATION:
 * -----------------------------------------
 * When connecting a production email/database service (e.g., Node.js / Express, Next.js API, Resend, SendGrid, or AWS SES),
 * replace this client-side handler with an asynchronous POST request:
 *
 * async function sendQuoteEmail(payload, attachedFiles) {
 *   const formData = new FormData();
 *   Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
 *   attachedFiles.forEach(file => formData.append('drawings', file));
 *
 *   const response = await fetch('/api/request-quote', {
 *     method: 'POST',
 *     body: formData
 *   });
 *   if (!response.ok) throw new Error('Failed to dispatch quote request');
 *   return await response.json();
 * }
 */

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    projectType: 'Residential Extension / Renovation',
    requiredService: preselectedService || 'quantity-take-offs',
    projectLocation: '',
    projectDescription: '',
    approximateValue: 'Under £100,000',
    consent: false
  });

  const [attachedFiles, setAttachedFiles] = useState([]);
  const [uploadError, setUploadError] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, requiredService: preselectedService }));
    }
  }, [preselectedService]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid UK email address (e.g. name@company.co.uk)";
      }
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Please specify project location (e.g. Essex, London, Surrey)";
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = "Please provide details about the project (at least 10 characters)";
    }

    if (!formData.consent) {
      newErrors.consent = "Please confirm agreement with our Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const allowedExtensions = ['.pdf', '.dwg', '.dxf', '.xlsx', '.xls', '.csv', '.zip', '.png', '.jpg', '.jpeg'];

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploadError('');
    const validFiles = [];

    for (const file of files) {
      const ext = '.' + file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(ext)) {
        setUploadError(`File format "${ext}" is not supported. Please upload PDF, CAD DWG, Excel or ZIP.`);
        return;
      }
      if (file.size > 25 * 1024 * 1024) {
        setUploadError(`File "${file.name}" exceeds the 25MB limit. Please compress or email larger tender packs.`);
        return;
      }
      validFiles.push(file);
    }

    setAttachedFiles(prev => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Controlled simulation of submission without falsely claiming an email was sent
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({
        ...formData,
        fileCount: attachedFiles.length,
        fileNames: attachedFiles.map(f => f.name)
      });
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 1 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/surveyor-tools.jpg" 
            alt="Drawings, hardhat and blueprints for construction quote" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Request a Quote" }]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Request a <span className="text-[#d4a34b]">Quote</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
              Get a fast, accurate and no-obligation quote for your construction cost estimation, quantity take-offs, BOQs, or tender pricing needs.
            </p>

            {/* 3 Badges from Screenshot 1 */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <Clock className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Fast Response: Within 24–48 Hours</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>No Obligation: Free Consultation</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-navy-900/80 border border-slate-700/80 px-3 py-1.5 rounded text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4a34b]" />
                <span>Expert Advice: From Industry Professionals</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-6 py-3 rounded text-xs sm:text-sm tracking-wide shadow-md transition-all space-x-2"
              >
                <Mail className="w-4 h-4 text-[#081a2e]" />
                <span>Get Your Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BODY: Matches Screenshot 1 layout (Left: Why Choose Us, Right: Form) */}
      <section id="quote-form" className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 cols): Why Choose Orion Build Cost? */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#b58734] mb-1">
                  — WHY CHOOSE ORION BUILD COST?
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#081a2e] mb-3">
                  Your Project. <span className="text-[#b58734]">Our Expertise.</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We make the estimating process simple, accurate and stress-free. Whether you're planning a new build, renovation, or tender submission, our team is ready to help you with reliable cost data and professional support — tailored to your project needs.
                </p>
              </div>

              {/* 6 Grid Icons from Screenshot 1 */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">Accurate &amp; Reliable</h4>
                  <p className="text-[10px] text-slate-500">Estimates grounded in UK market rates.</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">Industry Knowledge</h4>
                  <p className="text-[10px] text-slate-500">NRM2 and SMM7 standards.</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">On-Time Delivery</h4>
                  <p className="text-[10px] text-slate-500">Meeting your tender deadlines.</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">Tailored Solutions</h4>
                  <p className="text-[10px] text-slate-500">Customised to project scope.</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">Dedicated Support</h4>
                  <p className="text-[10px] text-slate-500">Clear communication throughout.</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <div className="w-7 h-7 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center mb-2">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#081a2e] mb-0.5">Confidential Service</h4>
                  <p className="text-[10px] text-slate-500">Strict non-disclosure on drawings.</p>
                </div>
              </div>

              {/* Slogan Banner Card matching Screenshot 1 */}
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-[#081a2e] text-white p-6">
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4a34b] block mb-1">
                    Orion Build Cost
                  </span>
                  <div className="text-xl sm:text-2xl font-serif italic text-white tracking-wide">
                    Build Smarter. <br />
                    <span className="text-[#d4a34b] font-sans font-bold not-italic">Grow Faster.</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2 max-w-xs">
                    Independent construction cost consultancy helping UK builders and contractors win profitable work.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (7 cols): The Request Form */}
            <div className="lg:col-span-7">
              
              {isSuccess ? (
                /* Truthful Success / Preparation State */
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sm:p-8 animate-fadeIn space-y-6">
                  <div className="w-12 h-12 bg-[#fcf8ee] text-[#b58734] rounded-full flex items-center justify-center border border-[#d4a34b]">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#081a2e]">
                      Quotation Request Prepared
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Thank you, <span className="font-semibold text-[#081a2e]">{submittedData?.fullName}</span>. Your project parameters and document requirements have been validated and compiled.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded p-4 text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-[#081a2e]">Service Required:</span>
                      <span className="capitalize">{submittedData?.requiredService.replace(/-/g, ' ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-[#081a2e]">Project Type:</span>
                      <span>{submittedData?.projectType}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-[#081a2e]">Location:</span>
                      <span>{submittedData?.projectLocation}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span className="font-semibold text-[#081a2e]">Contact Email:</span>
                      <span>{submittedData?.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#081a2e]">Attached Documents:</span>
                      <span>{submittedData?.fileCount} file(s) registered</span>
                    </div>
                  </div>

                  {/* Truthful integration status callout per prompt instructions */}
                  <div className="p-4 bg-[#081a2e] text-slate-300 rounded border border-navy-800 text-xs leading-relaxed space-y-2">
                    <div className="text-[#d4a34b] font-bold flex items-center space-x-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Form Processed in Client State</span>
                    </div>
                    <p>
                      Your quotation request has been compiled. In this current pre-backend phase, you can also forward your tender pack or large drawing files directly to our quantity surveying team at:
                    </p>
                    <a 
                      href={`mailto:${companyInfo.email}?subject=Drawing%20Submission%20-%20${encodeURIComponent(submittedData?.fullName || '')}`}
                      className="text-[#d4a34b] font-bold hover:underline inline-flex items-center space-x-1 pt-1"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1" />
                      <span>{companyInfo.email}</span>
                    </a>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          businessName: '',
                          email: '',
                          projectType: 'Residential Extension / Renovation',
                          requiredService: 'quantity-take-offs',
                          projectLocation: '',
                          projectDescription: '',
                          approximateValue: 'Under £100,000',
                          consent: false
                        });
                        setAttachedFiles([]);
                      }}
                      className="bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-4 py-2 rounded text-xs transition-colors"
                    >
                      Submit Another Quote
                    </button>
                    <Link
                      to="/"
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded text-xs transition-colors"
                    >
                      Return Home
                    </Link>
                  </div>
                </div>
              ) : (
                /* Form Card matching Screenshot 1 */
                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm">
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#081a2e]">
                      Let's Get <span className="text-[#b58734]">Started</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below and our team will get back to you shortly with a tailored quote for your project.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. John Smith"
                          className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                            errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                          }`}
                        />
                        {errors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{errors.fullName}</p>}
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
                          placeholder="e.g. john@smithbuilders.co.uk"
                          className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                            errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                          }`}
                        />
                        {errors.email && <p className="text-[10px] text-red-500 mt-0.5">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Business Name & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business / Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="e.g. Smith Construction Ltd"
                          className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#d4a34b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="requiredService"
                          value={formData.requiredService}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#d4a34b]"
                        >
                          {servicesData.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Project Type & Project Location */}
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
                          <option value="Residential Extension / Renovation">Residential Extension / Renovation</option>
                          <option value="Residential Bespoke New Build">Residential Bespoke New Build</option>
                          <option value="Multi-Unit Residential Scheme">Multi-Unit Residential Scheme</option>
                          <option value="Commercial Office Fit-Out">Commercial Office Fit-Out</option>
                          <option value="Commercial New Build">Commercial New Build</option>
                          <option value="Industrial / Warehouse Facility">Industrial / Warehouse Facility</option>
                          <option value="Mixed-Use Scheme">Mixed-Use Scheme</option>
                          <option value="Other Specialist Project">Other Specialist Project</option>
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
                          placeholder="e.g. Essex, London, Surrey"
                          className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                            errors.projectLocation ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                          }`}
                        />
                        {errors.projectLocation && <p className="text-[10px] text-red-500 mt-0.5">{errors.projectLocation}</p>}
                      </div>
                    </div>

                    {/* Row 4: Approximate Project Value (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Approximate Project Value <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        name="approximateValue"
                        value={formData.approximateValue}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-xs rounded border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#d4a34b]"
                      >
                        <option value="Under £100,000">Under £100,000</option>
                        <option value="£100,000 – £250,000">£100,000 – £250,000</option>
                        <option value="£250,000 – £500,000">£250,000 – £500,000</option>
                        <option value="£500,000 – £1,000,000">£500,000 – £1,000,000</option>
                        <option value="£1,000,000 – £3,000,000">£1,000,000 – £3,000,000</option>
                        <option value="Over £3,000,000">Over £3,000,000</option>
                        <option value="Not Yet Determined">Not Yet Determined</option>
                      </select>
                    </div>

                    {/* Row 5: Project Details */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="projectDescription"
                        rows="3"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Tell us about your project (size, location, timeline, etc.)"
                        className={`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-[#d4a34b] ${
                          errors.projectDescription ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      ></textarea>
                      {errors.projectDescription && <p className="text-[10px] text-red-500 mt-0.5">{errors.projectDescription}</p>}
                    </div>

                    {/* Row 6: Drawing Upload Dropzone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Attach Drawings or Specifications <span className="text-slate-400 font-normal lowercase">(PDF, DWG, XLSX, ZIP up to 25MB)</span>
                      </label>
                      <label className="border border-dashed border-slate-300 hover:border-[#d4a34b] rounded p-4 flex flex-col items-center justify-center cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                        <UploadCloud className="w-6 h-6 text-[#b58734] mb-1" />
                        <span className="text-xs font-medium text-slate-700">Click to upload files or drag &amp; drop</span>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.dwg,.dxf,.xlsx,.xls,.csv,.zip,.png,.jpg,.jpeg"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      {uploadError && (
                        <p className="text-[11px] text-red-500 mt-1.5 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                          <span>{uploadError}</span>
                        </p>
                      )}

                      {attachedFiles.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {attachedFiles.map((f, i) => (
                            <div key={i} className="flex items-center justify-between text-[11px] bg-slate-100 px-2.5 py-1 rounded">
                              <span className="truncate">{f.name} ({Math.round(f.size / 1024)} KB)</span>
                              <button type="button" onClick={() => handleRemoveFile(i)} className="text-slate-400 hover:text-red-500 p-0.5">
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Row 7: Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-[#d4a34b] focus:ring-[#d4a34b]"
                        />
                        <span className="text-[11px] text-slate-600 leading-snug">
                          I agree to the processing of my project details in accordance with the{' '}
                          <Link to="/privacy-policy" className="text-[#b58734] underline font-semibold">
                            Privacy Policy
                          </Link>
                          . Drawings are handled under strict confidentiality.
                        </span>
                      </label>
                      {errors.consent && <p className="text-[10px] text-red-500 mt-0.5">{errors.consent}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold py-3 px-4 rounded text-xs sm:text-sm transition-colors space-x-1.5 shadow"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Request</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </div>

          </div>

          {/* Contact Strip matching Screenshot 1 bottom */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded border border-slate-200 text-[#b58734]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Email Us</span>
                <a href={`mailto:${companyInfo.email}`} className="font-semibold text-[#081a2e] hover:text-[#b58734]">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded border border-slate-200 text-[#b58734]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Our Office</span>
                <span className="font-semibold text-[#081a2e]">{companyInfo.address.full}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 md:justify-end">
              <div className="p-2 bg-white rounded border border-slate-200 text-[#b58734]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Professional Standard</span>
                <span className="font-semibold text-[#081a2e]">UK Quantity Surveying &amp; Estimating</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
