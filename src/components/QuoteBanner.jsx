import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail, Handshake } from 'lucide-react';

export default function QuoteBanner({ 
  tagline = "READY TO DISCUSS YOUR PROJECT?",
  title = "Get a Quote for Your Construction Project",
  middleTag = null,
  middleDesc = null,
  middleIcon = null,
  buttonText = "Request a Quote",
  buttonLink = "/request-a-quote",
  theme = "gold" // "gold" or "navy-outline"
}) {
  return (
    <section className="bg-[#081a2e] text-white py-8 sm:py-10 border-y border-navy-800 relative overflow-hidden">
      {/* Subtle blueprint pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4a34b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Left Title & Tag */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-navy-900 border border-slate-700/60 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#d4a34b]" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#d4a34b] uppercase tracking-wider">
                {tagline}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Optional Middle Section (as seen in Services Overview & Tender Pricing) */}
          {middleTag && (
            <div className="hidden md:flex items-center space-x-3 border-l border-slate-700/80 pl-6">
              <div className="p-2 rounded bg-navy-900 text-[#d4a34b] shrink-0">
                {middleIcon === 'handshake' ? (
                  <Handshake className="w-5 h-5" />
                ) : (
                  <Mail className="w-5 h-5" />
                )}
              </div>
              <div className="text-xs">
                <div className="text-white font-semibold">{middleTag}</div>
                <div className="text-slate-400 text-[11px]">{middleDesc}</div>
              </div>
            </div>
          )}

          {/* Right Action Button */}
          <div className="shrink-0">
            {theme === "navy-outline" ? (
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded border border-cyan-500/50 hover:border-cyan-400 text-xs sm:text-sm tracking-wide transition-colors space-x-1.5 shadow"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            ) : (
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center bg-[#d4a34b] hover:bg-[#c39139] text-[#081a2e] font-bold px-6 py-3 rounded text-xs sm:text-sm tracking-wide transition-colors space-x-1.5 shadow"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
