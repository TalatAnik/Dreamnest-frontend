import React from 'react';

// Section heading with optional subtitle. Now supports custom class overrides for title & subtitle.
export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) {
  const center = align === 'center';
  return (
    <div className={`mb-10 ${center ? 'text-center mx-auto' : ''} ${className}`}>      
      <h2 className={`mb-4 font-semibold tracking-tight text-[1.7rem] md:text-3xl leading-tight ${titleClassName}`}>{title}</h2>
      {subtitle && (
        <p className={`text-text-secondary/90 dark:text-[#cbd5e1] text-base md:text-lg leading-relaxed ${center ? 'mx-auto max-w-3xl' : 'max-w-2xl'} ${subtitleClassName}`}>{subtitle}</p>
      )}
    </div>
  );
}
