import React from 'react';

export default function SectionHeading({ title, subtitle, align='left', className='' }) {
  return (
    <div className={`mb-6 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">{title}</h2>
      {subtitle && <p className="text-text-secondary dark:text-[#cbd5e1] text-sm max-w-2xl">{subtitle}</p>}
    </div>
  );
}
