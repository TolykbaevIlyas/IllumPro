import React from 'react';

interface DirectionsCardProps {
  title: string;
  img: string;
}

const DirectionsCard = ({ title, img }: DirectionsCardProps) => {
  return (
    <div className="max-w-[215px] w-full max-h-[311px] relative">
      <img src={img} alt={title} />
    </div>
  );
};

export default DirectionsCard;
