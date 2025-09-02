import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'second';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-[#F12C26] text-white',
    second: 'bg-transparent text-white border border-white ',
  };

  return (
    <button
      className={clsx(variants[variant], className, 'rounded-[8.53px] py-[18px]')}
      {...props} // передаём type, onClick, disabled и т.д.
    >
      {children}
    </button>
  );
};

export default Button;
