import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'search' | 'classic';
}

const Input: React.FC<InputProps> = ({ variant = 'classic', className, ...props }) => {
  if (variant === 'search') {
    return (
      <div className="relative w-full">
        <span className="absolute left-[13px] top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.783 14.391L20 18.607L18.607 20L14.391 15.783C12.8225 17.0407 10.8715 17.7248 8.861 17.722C3.97 17.722 0 13.752 0 8.86C0 3.968 3.97 0 8.86 0C13.752 0 17.722 3.97 17.722 8.86C17.725 10.8708 17.0409 12.8223 15.783 14.391ZM13.808 13.661C15.0577 12.376 15.7557 10.6535 15.753 8.861C15.7533 7.95586 15.5752 7.05953 15.2289 6.22324C14.8827 5.38694 14.375 4.62707 13.735 3.98703C13.0949 3.347 12.3351 2.83935 11.4988 2.49309C10.6625 2.14682 9.76614 1.96874 8.861 1.969C7.95586 1.96874 7.05953 2.14682 6.22324 2.49309C5.38694 2.83935 4.62707 3.347 3.98703 3.98703C3.347 4.62707 2.83935 5.38694 2.49309 6.22324C2.14682 7.05953 1.96874 7.95586 1.969 8.861C1.96874 9.76614 2.14682 10.6625 2.49309 11.4988C2.83935 12.3351 3.347 13.0949 3.98703 13.735C4.62707 14.375 5.38694 14.8827 6.22324 15.2289C7.05953 15.5752 7.95586 15.7533 8.861 15.753C10.6535 15.7557 12.376 15.0577 13.661 13.808L13.808 13.661Z"
              fill="#C4C4C4"
            />
          </svg>
        </span>
        <input
          className={clsx(
            'w-full border border-[#C4C4C4] rounded-[7px] pl-10 pr-3 py-[11px] focus:outline-none focus:ring-2 focus:ring-blue-500',
            className,
          )}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      className={clsx(
        'w-full border border-gray-300 rounded-md px-3 py-[11px] focus:outline-none focus:ring-2 focus:ring-red-500',
        className,
      )}
      {...props}
    />
  );
};

export default Input;
