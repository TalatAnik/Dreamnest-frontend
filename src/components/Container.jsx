import React from 'react';

// Wider site container (was max-w-6xl ~72rem). Using custom 1400px for broader layout.
export default function Container({ className = '', children }) {
  return <div className={`max-w-[1400px] mx-auto px-5 md:px-8 ${className}`}>{children}</div>;
}
