import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const ButtonPrimary = ({ children, className = '', ...props }: ButtonPrimaryProps) => (
  <button
    className={`bg-accent text-foreground font-bold px-6 py-3 rounded-full shadow-button transition-all duration-300 ease-in-out hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    tabIndex={0}
    aria-label="Botão primário"
    {...props}
  >
    {children}
  </button>
);

export default ButtonPrimary; 