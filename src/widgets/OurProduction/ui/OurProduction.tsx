import React from 'react';
import Image from 'next/image';

import ourProd from '@/shared/assets/OurProd.jpg';

const OurProduction = () => {
  return (
    <div className="max-w-[1456px] w-full mb-[167px] px-[24px] md:px-0 ">
      <h2 className="mb-[26px] md:mb-[80px] uppercase text-[#2E2C30] font-bold min-[1920]:text-[42px] max-[1920]:text-[34px] max-[391]:text-[24px] max-w-[221px] md:max-w-full">
        Наше производство
      </h2>
      <div className="flex gap-[27px] items-center w-full">
        <div className="max-w-[781] w-full hidden md:block">
          <Image
            src={ourProd.src}
            alt="Наше производство"
            layout="responsive"
            width={781}
            height={541}
          />
        </div>

        <div className="max-w-[613px] flex flex-col gap-[26px]">
          <span className="text-[#2E2C30] min-[1920]:text-[20px] max-[1920]:text-[16px] max-[391]:text-[14px] leading-[114%] ">
            Наш завод расположен в Тульской области. Это современная производственная площадка с
            оборудованием, соответствующим уровню ведущих европейских предприятий. Мы стремимся к
            максимальной независимости от внешних поставщиков — все ключевые этапы локализованы
            внутри завода.
          </span>

          <div className="max-w-[781] w-full block md:hidden">
            <Image
              src={ourProd.src}
              alt="Наше производство"
              layout="responsive"
              width={781}
              height={541}
            />
          </div>

          <div
            className="grid gap-2
                      grid-cols-2
                      md:grid-cols-3
                      min-[1920]:text-[14px] max-[1920]:text-[12px]
                      "
          >
            {/* Карточка 1 */}
            <div className="bg-[#F8F8F8]  rounded-[9px] col-span-2  min-[1920px]:pt-[80px] min-[1920px]:pl-[13px] min-[1920px]:pb-[38px] max-[1920px]:pt-[71px] max-[1920px]:pl-[10px] max-[1920px]:pb-[30px] max-[391]:pt-[54px]">
              <span>Производство светодиодов, блоков питания, оптики</span>
            </div>

            {/* Карточка 2 */}
            <div className="bg-[#F8F8F8] rounded-[9px] min-[1920px]:pt-[80px] min-[1920px]:pl-[13px] min-[1920px]:pb-[38px] max-[1920px]:pt-[71px] max-[1920px]:pl-[10px] max-[1920px]:pb-[30px]">
              <span>Литьё алюминия и пластика под давлением</span>
            </div>

            {/* Карточка 3 */}
            <div className="bg-[#F8F8F8] rounded-[9px] min-[1920px]:pt-[80px] min-[1920px]:pl-[13px] min-[1920px]:pb-[38px] max-[1920px]:pt-[71px] max-[1920px]:pl-[10px] max-[1920px]:pb-[30px]">
              <span>CNC-гибка и резка стекла, металла и прутка</span>
            </div>

            {/* Карточка 4 */}
            <div className="bg-[#F8F8F8] rounded-[9px] min-[1920px]:pt-[80px] min-[1920px]:pl-[13px] min-[1920px]:pb-[38px] max-[1920px]:pt-[71px] max-[1920px]:pl-[10px] max-[1920px]:pb-[30px]">
              <span>Токарные и фрезерные работы</span>
            </div>

            {/* Карточка 5 */}
            <div className="bg-[#F8F8F8] rounded-[9px] min-[1920px]:pt-[80px] min-[1920px]:pl-[13px] min-[1920px]:pb-[38px] max-[1920px]:pt-[71px] max-[1920px]:pl-[10px] max-[1920px]:pb-[30px]">
              <span>Обработка алюминиевого профиля, лазерная резка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduction;
