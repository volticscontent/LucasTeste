import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider = ({ className = '' }: DividerProps) => (
  <hr className={`border-t border-neutral-200 my-8 ${className}`} />
);

export default Divider; 