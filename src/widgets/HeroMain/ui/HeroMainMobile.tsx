import React from 'react';

import Button from '@/shared/ui/Button';
import Telega from '@/shared/assets/icons/Telega';
import Wk from '@/shared/assets/icons/Wk';
import Blik from '@/shared/assets/icons/Blik';
import Play from '@/shared/assets/icons/Play';
import Image from 'next/image';

import bg from '@/shared/assets/bg.jpg';

const HeroMainMobile = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-between  mx-auto max-w-[342px]">
        <h2 className="text-[#FFFFFF] text-[24px] font-bold ">
          IPRO — российские световые решения полного цикла для общественных пространств, зданий и
          улиц
        </h2>

        <p className="text-[#FFFFFF] text-[16px] uppercase mt-[22px] font-bold">
          Собственное производство
        </p>

        <Image src={bg} className="mt-[55px] rounded-[10px]" width={342} height={232} alt={''} />
      </div>
      <div className="flex flex-col mt-[36px] max-w-[342px] w-full  mx-auto">
        <div className="flex gap-[16px] w-full text-[12px] mx-auto max-w-[342px]">
          <Button variant="primary" className="max-w-[164px] w-full">
            Каталог
          </Button>
          <Button variant="second" className="max-w-[164px] w-full">
            Консультация
          </Button>
        </div>
        <ul className="flex gap-[10px] mx-auto max-w-[150px] mt-[22px]">
          <li>
            <Telega />
          </li>
          <li>
            <Wk />
          </li>
          <li>
            <Blik />
          </li>
          <li>
            <Play />
          </li>
        </ul>
        <ul className="flex flex-wrap text-[10px] mt-[22px] max-w-[280px] gap-[12px] font-semibold text-[#fff]">
          <li>#дороги и улицы</li>
          <li>#Социальные объекты</li>
          <li>#парки и городская среда</li>
          <li>#промышленность</li>
          <li>#спорт</li>
          <li>#офисы</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroMainMobile;
