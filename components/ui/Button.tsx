import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'inverse';
}

export default function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary'
}: ButtonProps) {


  const baseStyles =
    "inline-flex items-center justify-center rounded-full border border-[0.5px] font-bold uppercase tracking-[0.2em] transition-all duration-600 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";


  const variants = {
    primary: "border-primary bg-primary text-white hover:bg-secondary hover:border-secondary",
    inverse: "border-white bg-white text-primary hover:bg-accent"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className} /* Allow merging/overriding styles */
      `}
    >
      {children}
    </button>
  );
}
