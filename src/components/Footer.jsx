import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border dark:border-[#334155] bg-surface dark:bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-text-secondary dark:text-[#cbd5e1] flex flex-col gap-2">
        <p>&copy; {new Date().getFullYear()} DreamNest. All rights reserved.</p>
  <p className="opacity-70">Mock prototype – data & interactions are simulated.</p>
      </div>
    </footer>
  );
}
