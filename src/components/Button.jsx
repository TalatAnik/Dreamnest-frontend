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
  { as: Component = 'button', variant='primary', size='md', className='', children, type, loading = false, ...rest },
  ref
) {
  const computedType = Component === 'button' ? (type || 'button') : undefined;
  return (
    <Component
      ref={ref}
      type={computedType}
      disabled={loading || rest.disabled}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...rest}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </Component>
  );
});

export default Button;
