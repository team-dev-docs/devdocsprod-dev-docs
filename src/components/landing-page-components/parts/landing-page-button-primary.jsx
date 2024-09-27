import React from 'react';

const PrimaryButton = ({
  onClick,
  children,
  className='',
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#808AFF] px-[1.25rem] py-[0.5rem] flex items-center justify-center rounded-full text-[#0B081C] font-semibold border border-[#808AFF] ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
