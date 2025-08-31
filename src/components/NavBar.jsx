import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const linkBase = 'text-sm font-medium px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-surface-alt transition-colors';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border bg-white dark:bg-[#1e293b] dark:border-[#334155] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 justify-between">
        <Link to="/" className="font-bold text-primary-600 dark:text-primary-400 tracking-tight">DreamNest</Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/properties" className={linkBase}>Properties</NavLink>
          <NavLink to="/services" className={linkBase}>Services</NavLink>
          <NavLink to="/login" className={linkBase}>Login</NavLink>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen(o => !o)} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-border dark:border-[#334155] hover:bg-primary-50 dark:hover:bg-surface-alt">
          <span className="text-sm font-semibold">{open ? 'X' : '≡'}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border dark:border-[#334155] bg-white dark:bg-[#1e293b] px-4 pb-4 flex flex-col gap-1">
          <NavLink onClick={() => setOpen(false)} to="/properties" className={linkBase}>Properties</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/services" className={linkBase}>Services</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/login" className={linkBase}>Login</NavLink>
        </div>
      )}
    </header>
  );
}
