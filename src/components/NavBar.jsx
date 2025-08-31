import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button.jsx';

const linkBase = 'text-sm font-medium px-3 py-2 rounded-md transition-colors';
const navLinkClass = ({ isActive }) =>
  `${linkBase} ${isActive ? 'text-primary-600 dark:text-primary-300 bg-primary-50/70 dark:bg-[#334155]' : 'text-text-secondary dark:text-[#cbd5e1] hover:bg-primary-50 dark:hover:bg-[#334155]'}`;

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 dark:border-[#334155]/70 backdrop-blur bg-white/85 dark:bg-[#1e293b]/75 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#1e293b]/60">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16 gap-4">
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
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-md border border-border/70 dark:border-[#334155] hover:bg-primary-50 dark:hover:bg-[#334155]" >
          <span className="text-base font-semibold">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 dark:border-[#334155] bg-white dark:bg-[#1e293b] px-4 pb-4 flex flex-col gap-2">
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
      )}
    </header>
  );
}
