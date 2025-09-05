import React from 'react';

import Button from '@/shared/ui/Button';
import Telega from '@/shared/assets/icons/Telega';
import Wk from '@/shared/assets/icons/Wk';
import Blik from '@/shared/assets/icons/Blik';
import Play from '@/shared/assets/icons/Play';

const HeroMain = () => {
  return (
    <section className="xl:max-w-[1200px] 2xl:max-w-[1353px] mx-auto">
      <div className="flex justify-between ">
        <h2 className="text-[#FFFFFF]  min-[1280px]:text-[34px] min-[1920px]:text-[43px] min-[1280px]:max-h-[195px] min-[1920px]:max-h-[250px] font-bold min-[1280px]:max-w-[596px] min-[1920px]:max-w-[697px]">
          IPRO — российские световые решения полного цикла для общественных пространств, зданий и
          улиц
        </h2>
        <ul className="flex flex-col gap-[12px]">
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
      </div>
      <p className="text-[#FFFFFF] text-[20px] min-[1280px]:mt-[110px] min-[1920px]:mt-[125px] font-bold">
        Собственное производство
      </p>
      <div className="min-[1280px]:mt-[134px] min-[1920px]:mt-[179px] flex justify-between items-center max-h-[57px]">
        <div className="flex gap-[16px] w-full min-[1280px]:max-w-[335px] min-[1920]:max-w-[447px] min-[1280px]:max-h-[40px] min-[1920px]:max-h-[54px]">
          <Button variant="primary" className="max-w-[215px] w-full">
            Каталог
          </Button>
          <Button variant="second" className="max-w-[215px] w-full">
            Консультация
          </Button>
        </div>
        <ul className="flex flex-wrap gap-[17px] items-center text-[#fff] min-[1280px]:text-[14px] min-[1920px]:text-[20px] min-[1280px]:max-w-[561px] min-[1920px]:max-w-[768px]">
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

export default HeroMain;
