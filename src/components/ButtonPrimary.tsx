import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const ButtonPrimary = ({ children, className = '', ...props }: ButtonPrimaryProps) => (
  <button
    className={`bg-primary text-white font-bold px-6 py-3 rounded shadow-button transition duration-300 ease-in-out hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${className}`}
    tabIndex={0}
    aria-label="Botão primário"
    {...props}
  >
    {children}
  </button>
);

export default ButtonPrimary; 