import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Scale, 
  Mail, 
  Check, 
  ExternalLink,
  Shield,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import Breadcrumbs from '../components/Breadcrumbs';

export default function LegalPage() {
  const location = useLocation();
  const isPrivacyOnly = location.pathname.includes('privacy');
  const isTermsOnly = location.pathname.includes('terms');

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO BANNER: Matches Screenshot 3 */}
      <section className="bg-[#081a2e] text-white py-12 sm:py-16 relative overflow-hidden border-b border-navy-800">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
          <img 
            src="/images/surveyor-tools.jpg" 
            alt="Surveyor documentation and architectural blueprints" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: isPrivacyOnly ? "Privacy Policy" : isTermsOnly ? "Terms of Use" : "Privacy Policy & Terms of Use" }
          ]} />

          <div className="max-w-2xl mt-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              {isPrivacyOnly ? (
                <>Privacy <span className="text-[#d4a34b]">Policy</span></>
              ) : isTermsOnly ? (
                <>Terms of <span className="text-[#d4a34b]">Use</span></>
              ) : (
                <>Privacy Policy &amp; <span className="text-[#d4a34b]">Terms of Use</span></>
              )}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Your privacy matters to us. This page explains how we collect, use and protect your information, and the terms and conditions for using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DUAL LEGAL CARDS: Matches Screenshot 3 */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Review-Ready Template Notice */}
          <div className="mb-8 p-3.5 bg-white border border-slate-200 rounded-lg flex items-center space-x-2 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-[#b58734] shrink-0" />
            <span>
              <strong>Review-Ready Template:</strong> Specific corporate details [Data Protection Officer, specific cookie analytics providers, external cloud processors] are marked as placeholders subject to client confirmation before formal legal audit.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Card 1: Privacy Policy */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-start space-x-3.5 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#081a2e] text-[#d4a34b] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#081a2e]">
                    Privacy Policy
                  </h2>
                  <span className="text-[11px] text-slate-400">
                    Last updated: 26 October 2026 • Governed under UK GDPR &amp; DPA 2018
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                At Orion Build Cost, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when visiting our website or using our services.
              </p>

              <div className="space-y-5 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    1. Information We Collect
                  </h3>
                  <p className="text-slate-600">
                    We may collect personal information such as your name, email address, optional business name, project location, and any specifications or drawings you choose to share with us through our website, quote forms or email communications.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    <em>[Placeholder: Specify analytics cookies or session storage providers upon deployment confirmation.]</em>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    2. How We Use Your Information
                  </h3>
                  <p className="text-slate-600">
                    Your information is used to respond to your enquiries, provide quantity surveying and cost estimation services, review submitted drawings, improve our website, and communicate with you about your project.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    3. Data Protection &amp; Confidentiality
                  </h3>
                  <p className="text-slate-600">
                    We take appropriate technical security measures to protect your information and drawings from unauthorised access, alteration, disclosure or loss. All client drawings remain confidential commercial property.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    <em>[Placeholder: Specify exact retention period, e.g. 6 years under standard English commercial limitation rules, pending final audit.]</em>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    4. Third-Party Links &amp; Processors
                  </h3>
                  <p className="text-slate-600">
                    Our website may contain links to external sites (such as LinkedIn). We are not responsible for the privacy practices or content of those sites.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    <em>[Placeholder: List third-party email delivery services (e.g. SendGrid / AWS SES) once API keys are established.]</em>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    5. Your Statutory Rights
                  </h3>
                  <p className="text-slate-600">
                    Under the UK GDPR, you have the right to access, correct, or request deletion of your personal information. For any privacy-related requests, please contact us at:
                  </p>
                  <a href={`mailto:${companyInfo.email}`} className="text-[#b58734] font-semibold hover:underline block mt-1">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Card 2: Terms of Use */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-start space-x-3.5 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#081a2e] text-[#d4a34b] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#081a2e]">
                    Terms of Use
                  </h2>
                  <span className="text-[11px] text-slate-400">
                    Last updated: 26 October 2026 • Governed under the Laws of England &amp; Wales
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                By accessing and using this website, you agree to be bound by the following terms and conditions. Please read them carefully before using our website or services.
              </p>

              <div className="space-y-5 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    1. Use of Website
                  </h3>
                  <p className="text-slate-600">
                    You agree to use our website for lawful purposes only and in a manner that does not infringe on the rights of others or restrict their use and enjoyment of the website.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    2. Intellectual Property
                  </h3>
                  <p className="text-slate-600">
                    All content on this website, including text, images, logos and design, is the property of Orion Build Cost or its licensors and is protected by copyright and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    3. Limitation of Liability
                  </h3>
                  <p className="text-slate-600">
                    While we strive to ensure the information on our website is accurate and up to date, we make no guarantees or warranties, and we are not liable for any loss or damage arising from its use. Consultancy estimates are subject to separate formal written agreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    4. Changes to Terms
                  </h3>
                  <p className="text-slate-600">
                    We reserve the right to update these Terms of Use and Privacy Policy at any time. Changes will be posted on this page with the updated date.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#081a2e] text-sm mb-1">
                    5. Governing Law
                  </h3>
                  <p className="text-slate-600">
                    These terms are governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales hold exclusive jurisdiction over any dispute.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* 3. BOTTOM TRUST STRIP: Matches Screenshot 3 */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081a2e]">Your Privacy Matters</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">We protect your data with industry best practices.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081a2e]">Secure Information</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Your information is safe and confidential.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081a2e]">Transparent Process</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Clear terms, no hidden conditions.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded bg-[#fcf8ee] text-[#b58734] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#081a2e]">Dedicated Support</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">We're here to help with any questions.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-right">
              <span className="font-serif italic text-base text-[#081a2e]">
                Build Smarter. <span className="font-sans font-bold text-[#b58734] not-italic">Grow Faster.</span>
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
