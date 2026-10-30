import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 py-3" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-gold-400 transition-colors flex items-center">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
            {isLast || !item.link ? (
              <span className="text-gold-400 font-medium truncate max-w-[200px] sm:max-w-xs">
                {item.label}
              </span>
            ) : (
              <Link to={item.link} className="hover:text-slate-200 transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
