import React from 'react';

type Props = {
  width?: string | number;
};

const Play: React.FC<Props> = ({ width = '57' }) => {
  return (
    <svg
      width={width}
      className="min-[390px]:w-[30px] min-[1280px]:w-[40px] min-[1920px]:w-[57px]"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0205 1.49976H47.5459C51.9384 1.49976 55.4998 5.06046 55.5 9.45288V46.9783C55.5 51.3708 51.9385 54.9324 47.5459 54.9324H10.0205C5.62809 54.9322 2.06738 51.3707 2.06738 46.9783V9.45288C2.06756 5.06057 5.6282 1.49993 10.0205 1.49976Z"
        stroke="white"
        strokeWidth="3"
      />
      <path d="M38.6594 28.6153L22.9772 38.3779L22.9772 18.8527L38.6594 28.6153Z" fill="white" />
    </svg>
  );
};

export default Play;
