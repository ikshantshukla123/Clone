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


  const baseStyles = "inline-flex items-center justify-center border border-[0.5px] font-bold uppercase tracking-[0.2em]  transition-all duration-800 disabled:opacity-50 disabled:cursor-not-allowed";


  const variants = {
    primary: "border-[#223614] text-[#223614] hover:bg-[#223614] hover:text-white",
    inverse: "border-white text-white hover:bg-white hover:text-[#223614]"
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
