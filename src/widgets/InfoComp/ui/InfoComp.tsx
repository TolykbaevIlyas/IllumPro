import React from 'react';

const InfoComp = () => {
  return (
    <ul className="flex max-[1280px]:flex-col w-full  min-[1280px]items-center gap-[15px] mt-[40] max-[1270px]:px-[24px] max-[1281px]:px-[66px] min-[1280px]:mt-[91px] max-w-[1351px] max-[1280px]:h-[491px] max-[1920px]:h-[93px] min-[1920]:h-[124px] text-[#2E2C30]">
      <li className="border-l-2 border-[#EF3824] px-[16px] h-full">
        <h2 className="text-[34px] min-[1920px]:text-[42px] font-bold text-nowrap">
          {'>'} 600 проектов
        </h2>
        <p className="max-[1920px]:text-[16px] text-[18px]">в России и зарубежом</p>
      </li>
      <li className="border-l-2 border-[#EF3824] px-[16px] h-full flex flex-col ">
        <h2 className="text-[34px] min-[1920px]:text-[42px] font-bold">{'>'} 500 видов</h2>
        <p className="max-[1920px]:text-[16px] text-[18px]">
          светильников на собственном заводе в Тульской области
        </p>
      </li>
      <li className="border-l-2 border-[#EF3824] px-[16px] h-full flex flex-col ">
        <h2 className="text-[34px] min-[1920px]:text-[42px] font-bold text-nowrap">17 лет</h2>
        <p className="text-nowrap max-[1920px]:text-[16px] text-[18px]">успешных проектов</p>
      </li>
      <li className="border-l-2 border-[#EF3824] flex flex-col justify-center min-[391px]:justify-end px-[16px] h-full pb-[16px]">
        <h2 className="text-[34px] min-[1920px]:text-[42px] font-bold">{''}</h2>
        <p className="max-[1920px]:text-[16px] text-[18px]">Полный цикл ведения проекта</p>
      </li>
      <li className="border-l-2 border-[#EF3824] flex flex-col justify-end px-[16px] h-full pb-[16px]">
        <h2 className="text-[34px] min-[1920px]:text-[42px] font-bold"></h2>
        <p className="max-[1920px]:text-[16px] text-[18px]">Документы и сертификаты</p>
      </li>
    </ul>
  );
};

export default InfoComp;
