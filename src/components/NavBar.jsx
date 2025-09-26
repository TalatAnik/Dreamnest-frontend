import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button.jsx';

const linkBase = 'text-sm font-medium px-3 py-2 rounded-md transition-colors';
const navLinkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'text-primary-600 dark:text-primary-300 bg-primary-50/70 dark:bg-[#334155]' : 'text-text-secondary dark:text-[#cbd5e1] hover:bg-primary-50 dark:hover:bg-[#334155]'}`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-slate-900/85 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center h-16 gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary-600 dark:text-primary-300 tracking-tight">
          <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-tr from-primary-500 to-accent-400 shadow-inner" aria-hidden="true" />
          <span>DreamNest</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          <NavLink to="/properties" className={navLinkClass}>Properties</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/login" className={navLinkClass}>Login</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-2 ml-2">
          <Button
            size="sm"
            variant="primary"
            onClick={() => alert('Listing flow coming in a later phase.')}>
            List Property
          </Button>
        </div>
        
        {/* Enhanced Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/60 dark:border-slate-600/60 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all shadow-sm" >
          <div className="relative w-5 h-5 flex items-center justify-center">
            {open ? (
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </button>
      </div>
      
      {/* Enhanced Mobile Menu with Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        open 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-white/20 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 pb-4 flex flex-col gap-2 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className={`flex flex-col gap-2 transition-all duration-300 delay-75 ${
            open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}>
            <NavLink onClick={() => setOpen(false)} to="/properties" className={navLinkClass}>Properties</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/login" className={navLinkClass}>Login</NavLink>
            <Button
              size="sm"
              variant="primary"
              className="mt-2"
              onClick={() => { setOpen(false); alert('Listing flow coming in a later phase.'); }}>
              List Property
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
