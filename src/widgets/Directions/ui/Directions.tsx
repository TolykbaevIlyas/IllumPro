import DirectionsCard from '@/entities/DirectionsCard';
import React from 'react';

import img1921 from '@/shared/assets/1921.jpg';
import img1922 from '@/shared/assets/1922.jpg';
import img1923 from '@/shared/assets/1923.jpg';
import img1924 from '@/shared/assets/1924.jpg';
import img1925 from '@/shared/assets/1925.jpg';
import img1926 from '@/shared/assets/1926.jpg';

const cards = [
  {
    title: 'Направление 1',
    img: img1921.src,
  },
  {
    title: 'Направление 2',
    img: img1923.src,
  },
  {
    title: 'Направление 2',
    img: img1925.src,
  },
  {
    title: 'Направление 2',
    img: img1922.src,
  },
  {
    title: 'Направление 2',
    img: img1924.src,
  },
  {
    title: 'Направление 2',
    img: img1926.src,
  },
];

const Directions = () => {
  return (
    <div className="mt-[42px] min-[1280px]:mt-[110px] max-[1280px]:px-[24px]">
      <h2 className="max-[390px]:text-[24px] max-[1920px]:text-[34px] font-bold mb-[42px] text-[42px]">
        Направления
      </h2>

      <div className="grid grid-cols-2 xl:grid-cols-6 gap-[9px] items-center">
        {cards.map((card, index) => (
          <DirectionsCard key={index} title={card.title} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default Directions;
