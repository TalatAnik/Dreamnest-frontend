import React from 'react';

const base = 'inline-flex items-center justify-center font-medium rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-60 disabled:cursor-not-allowed';
const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-surface-alt hover:bg-primary-50 text-text-primary dark:bg-[#334155] dark:hover:bg-[#475569] dark:text-[#f1f5f9]',
  outline: 'border border-border hover:bg-primary-50 dark:border-[#334155] dark:hover:bg-[#334155] text-text-primary dark:text-[#f1f5f9]',
  subtle: 'bg-transparent hover:bg-primary-50 dark:hover:bg-[#334155] text-text-secondary dark:text-[#cbd5e1]'
};
const sizes = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-base'
};

const Button = React.forwardRef(function Button(
  { as: Component = 'button', variant='primary', size='md', className='', children, type, ...rest },
  ref
) {
  const computedType = Component === 'button' ? (type || 'button') : undefined;
  return (
    <Component
      ref={ref}
      type={computedType}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
});

export default Button;
