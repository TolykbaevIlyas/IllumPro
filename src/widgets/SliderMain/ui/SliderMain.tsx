'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '@/shared/assets/slide1.jpg';
import img2 from '@/shared/assets/slide2.jpg';
import img3 from '@/shared/assets/slide3.jpg';
import img4 from '@/shared/assets/slide4.jpg';
import img5 from '@/shared/assets/slide5.jpg';

const images = [img1.src, img2.src, img3.src, img4.src, img5.src];

const SliderMain = () => {
  return (
    <div className="max-w-[1351px] w-full flex justify-end items-end max-[1280px]:px-[24px] relative mt-[91px]">
      {/* Десктоп */}

      <h2 className="absolute max-[391px]:left-[25px] top-[-50px] max-[391px]:block hidden min-[1280px]:block min-[1920px]:left-0 md:top-[50px] max-[1920px]:left-[70px] max-[391]:max-w-[342px] max-[1920]:max-w-[220px] min-[1920px]:max-w-[280px] max-[391px]:text-[24px] min-[1920px]:text-[24px] max-[1920px]:text-[18px]">
        IPRO — современные и надежные решения для проектов любого масштаба
      </h2>
      <div className="hidden md:flex gap-[14px] max-w-[1129px]">
        {/* Левая колонка */}
        <div className="flex flex-col items-end justify-end gap-[14px]">
          <img
            src={images[0]}
            alt=""
            className="rounded-xl object-cover min-[1920px]:w-[296px] min-[1920px]:h-[245px] max-[1920px]:w-[235px] max-[1920px]:h-[194px]"
          />
          <img
            src={images[1]}
            alt=""
            className="rounded-xl object-cover min-[1920px]:w-[430px] min-[1920px]:h-[245px] max-[1920px]:w-[341px] max-[1920px]:h-[194px]"
          />
        </div>

        {/* Центральная колонка */}
        <div>
          <img
            src={images[2]}
            alt=""
            className="rounded-xl object-cover min-[1920px]:w-[294px] min-[1920px]:h-[500px] max-[1920px]:w-[233px] max-[1920px]:h-[397px]"
          />
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col gap-[14px]">
          <img
            src={images[3]}
            alt=""
            className="rounded-xl object-cover min-[1920px]:w-[376px] min-[1920px]:h-[245px] max-[1920px]:w-[298px] max-[1920px]:h-[194px]"
          />
          <img
            src={images[4]}
            alt=""
            className="rounded-xl object-cover min-[1920px]:w-[296px] min-[1920px]:h-[245px] max-[1920px]:w-[235px] max-[1920px]:h-[194px]"
          />
        </div>

        <div className="absolute block max-[1920px]:hidden right-0 bottom-0">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.948 8L30 16.5L21.948 25L20.514 23.51L26.154 17.557H3V15.442H26.153L20.514 9.49L21.948 8Z"
              fill="#2E2C30"
            />
          </svg>
        </div>
      </div>

      <div className="ml-[50px] mr-[80px] max-[768px]:hidden block min-[1920px]:hidden">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.948 8L30 16.5L21.948 25L20.514 23.51L26.154 17.557H3V15.442H26.153L20.514 9.49L21.948 8Z"
            fill="#2E2C30"
          />
        </svg>
      </div>

      {/* Мобилка */}
      <div className="md:hidden flex w-full mx-auto mt-[135px]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="w-[342px] h-[232px] mx-auto relative"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt="" className="rounded-xl object-cover w-full h-full" />
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{``}</style>
      </div>
    </div>
  );
};

export default SliderMain;
