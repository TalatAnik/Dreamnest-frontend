import { Link, NavLink } from 'react-router-dom';

const linkBase = 'text-sm font-medium px-3 py-2 rounded-md hover:bg-primary-50 dark:hover:bg-surface-alt transition-colors';

export default function NavBar() {
  return (
    <header className="border-b border-border bg-white dark:bg-[#1e293b] dark:border-[#334155] sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-14 justify-between">
        <Link to="/" className="font-bold text-primary-600 dark:text-primary-400 tracking-tight">DreamNest</Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/properties" className={linkBase}>Properties</NavLink>
          <NavLink to="/services" className={linkBase}>Services</NavLink>
          <NavLink to="/login" className={linkBase}>Login</NavLink>
        </nav>
      </div>
    </header>
  );
}
