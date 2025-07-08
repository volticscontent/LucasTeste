import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => (
  <h2
    className={`text-2xl md:text-3xl font-extrabold text-primary mb-8 tracking-tight leading-tight ${className}`}
  >
    {children}
  </h2>
);

export default SectionTitle; 