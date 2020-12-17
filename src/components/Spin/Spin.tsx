/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';

interface SpinProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Spin: React.FC<SpinProps> = ({ size = 'sm', className }) => {
  const classes = classNames(className, {
    'animate-spin': true,
    'inline': true,
    'w-3': size === 'sm',
    'h-3': size === 'sm',
    'w-10': size === 'md',
    'h-10': size === 'md',
    'w-20': size === 'lg',
    'h-20': size === 'lg',
  });

  return (
    <svg className={classes} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};

export default Spin;