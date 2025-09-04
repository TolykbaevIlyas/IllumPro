import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import React from 'react';

const FormWeCan = () => {
  return (
    <section className="xl:max-w-[1214px] 2xl:max-w-[1420px]  w-full mx-auto lg:px-0 mt-16 xl:mb-20 grid grid-cols-1 md:grid-cols-2">
      {/* left list */}
      <div className="px-[24px] xl:p-[49px] max-w-[710px] w-full mb-[30px] xl:mb-0  bg-[#F8F8F8]">
        <h2 className=" font-bold uppercase mb-[55px] text-[24px] xl:text-[34px] 2xl:text-[42px]">
          Мы можем
        </h2>
        <ul className="space-y-4">
          {[
            'Сделать красивое ландшафтное освещение',
            'Грамотно осветить автомобильные дороги различного класса',
            'Сделать проект АХП (архитектурно-художественную подсветку), поставку и монтаж',
            'Изготовить металлоконструкции и конструкции',
            'Сделать торшеры в историческом стиле с помощью художественного литья',
            'Сделать светильники для интерьера',
            'Материалы для электромонтажа',
            'Реализовать нестандартный проект',
          ].map((text, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="min-w-[24px] text-[#EF3824] pr-[10px] border-r-1 xl:h-[55px] border-[#EF3824] font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px] leading-[22px] text-[#374151]">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* right form */}
      <div className=" bg-[#141416] max-w-[710px] w-full text-white px-[24px] pt-[25px] pb-[40px] xl:p-[49px]">
        <h3 className="max-w-[243px] xl:max-w-[456px]  leading-[120%] font-bold uppercase tracking-wide  text-[24px] xl:text-[34px] 2xl:text-[42px]">
          <span className="text-[#FF4B3A]">Сопровождаем</span> на всех этапах проекта
        </h3>
        <p className="xl:max-w-[521px] text-[16px] 2xl:text-[18px] my-[30px]">
          Оставьте заявку на разработку техническое решения по вашему проекту и мы запустим проект в
          работу
        </p>

        <form className="mt-5 space-y-5 flex flex-col items-center xl:items-baseline max-w-[377px]">
          <Input
            type="text"
            placeholder="Имя"
            className="w-full h-[48px] xl:h-[56px] px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
          />
          <Input
            type="tel"
            placeholder="Телефон"
            className="w-full h-[48px] xl:h-[56px] px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
          />
          <Input
            type="email"
            placeholder="Email"
            className="w-full h-[48px] xl:h-[56px] px-3 rounded-[8px] bg-[#1E1F23] border border-[#2B2C31] text-[14px] placeholder:text-[#6B7280] focus:outline-none"
          />
          <textarea
            placeholder="Текст обращения"
            className="w-full h-[130px] xl:h-[150px] px-3 py-2 border border-[#C4C4C4] rounded-[7px] bg-[#1E1F23] text-[14px] placeholder:text-[#6B7280] focus:outline-none resize-none"
          />
          <Button
            type="submit"
            className="w-full  text-white font-semibold mt-[20px] max-w-[205px] text-[14px] 2xl:text-[18px]"
          >
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormWeCan;
