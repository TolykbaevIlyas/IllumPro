'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import NewsCards from '@/entities/NewsCard';
import Button from '@/shared/ui/Button'; // если не форвардит ref — см. ниже

const news = [
  {
    date: '22 августа 2025',
    title: 'Т-Инвестиции запускают торги фьючерсами по выходным',
    description:
      'Т-Инвестиции планомерно расширяют возможности торговли для российских инвесторов. С 2021 года клиентам брокера доступна торговля 156 акциями в выходные дни. В 2025 году общий объем операций в выходные превысил 558 млрд рублей, а число участников — 1,1 млн чел. Теперь же к акциям добавились еще и фьючерсы.',
  },
  {
    date: '22 августа 2025',
    title: 'Т-Инвестиции запускают торги фьючерсами по выходным',
    description:
      'Т-Инвестиции планомерно расширяют возможности торговли для российских инвесторов. С 2021 года клиентам брокера доступна торговля 156 акциями в выходные дни. В 2025 году общий объем операций в выходные превысил 558 млрд рублей, а число участников — 1,1 млн чел. Теперь же к акциям добавились еще и фьючерсы.',
  },
  {
    date: '22 августа 2025',
    title: 'Т-Инвестиции запускают торги фьючерсами по выходным',
    description:
      'Т-Инвестиции планомерно расширяют возможности торговли для российских инвесторов. С 2021 года клиентам брокера доступна торговля 156 акциями в выходные дни. В 2025 году общий объем операций в выходные превысил 558 млрд рублей, а число участников — 1,1 млн чел. Теперь же к акциям добавились еще и фьючерсы.',
  },
  {
    date: '22 августа 2025',
    title: 'Т-Инвестиции запускают торги фьючерсами по выходным',
    description:
      'Т-Инвестиции планомерно расширяют возможности торговли для российских инвесторов. С 2021 года клиентам брокера доступна торговля 156 акциями в выходные дни. В 2025 году общий объем операций в выходные превысил 558 млрд рублей, а число участников — 1,1 млн чел. Теперь же к акциям добавились еще и фьючерсы.',
  },
  {
    date: '22 августа 2025',
    title: 'Т-Инвестиции запускают торги фьючерсами по выходным',
    description:
      'Т-Инвестиции планомерно расширяют возможности торговли для российских инвесторов. С 2021 года клиентам брокера доступна торговля 156 акциями в выходные дни. В 2025 году общий объем операций в выходные превысил 558 млрд рублей, а число участников — 1,1 млн чел. Теперь же к акциям добавились еще и фьючерсы.',
  },
];

const News = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="max-w-[1352px] w-full py-[53px] mx-auto px-[24px] flex flex-col gap-[50px]">
      <h2 className="text-[#fff] font-bold text-[34px] md:text-[42px]">Новости</h2>

      <div className="h-full">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          className="w-full overflow-visible h-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <NewsCards {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mt-6">
          <div className="flex justify-between w-full gap-4">
            <div className="flex gap-4">
              <button ref={prevRef} className="news-prev cursor-pointer">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.933 16.6765L1.37939 10.8517L6.933 5.02686L7.92206 6.04791L4.03205 10.1273H20.0018V11.5767H4.03274L7.92206 15.6554L6.933 16.6765Z"
                    fill="white"
                  />
                </svg>
              </button>

              <button ref={nextRef} className="news-next cursor-pointer">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2814 5.71267L20.835 11.5375L15.2814 17.3623L14.2923 16.3412L18.1823 12.2618H2.21258V10.8125H18.1816L14.2923 6.73373L15.2814 5.71267Z"
                    fill="#EF3824"
                  />
                </svg>
              </button>
            </div>
            <Button variant="primary" className="px-6 py-2">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
