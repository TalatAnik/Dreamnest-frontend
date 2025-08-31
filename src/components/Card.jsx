import React from 'react';

export default function Card({ children, className='' }) {
  return <div className={`rounded-lg border border-border dark:border-[#334155] bg-white dark:bg-[#1e293b] shadow-sm ${className}`}>{children}</div>;
}
