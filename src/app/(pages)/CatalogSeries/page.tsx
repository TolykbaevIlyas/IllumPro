'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {

     const [filters, setFilters] = useState({
    power: [],
    voltage: [],
    case: [],
  });

  const products = [
  {
    id: 3803,
    name: "Tornado 4000K S 66IP led",
    img: "/svg/catalog/image 184.png",
    power: 800,
    voltage: 230,
    luminousFlux: 94680,
  },
  {
    id: 3806,
    name: "Tornado 3000K S 66IP led",
    img: "/svg/catalog/image 184.png",
    power: 1400,
    voltage: 230,
    luminousFlux: 161518,
  },
  {
    id: 3809,
    name: "Tornado 4000K S 66IP led",
    img: "/svg/catalog/image 184.png",
    power: 1400,
    voltage: 230,
    luminousFlux: 165690,
  },
];


  return (
    <div className='max-w-[1400px] w-full mx-auto'>
        <div className=''>
            <div className='flex gap-[9px] items-center text-[#A9A9A9] mt-[51px]'>
                <p>Главная</p>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.919922 3H6.41992M6.41992 3L4.1258 1M6.41992 3L4.1258 5" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='max-w-[43px] w-full h-[27px] items-center text-center bg-[#F8F8F8] text-[14px] font-[700] leading-[150%]'>...</div>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.919922 3H6.41992M6.41992 3L4.1258 1M6.41992 3L4.1258 5" stroke="#A9A9A9" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>TORNADO</p>
            </div>
            <div className='flex justify-between max-lg:flex-col'>
                <h3 className='text-[42px] leading-[100%] font-[700] uppercase mt-[40px]'>КАТАЛОГ СЕРИИ TORNADO</h3>
                <div className='flex gap-[17px]'>
                    Скачать каталог (PDF)
                    <img src="/svg/catalog/donwload.svg" alt=""  className='max-w-[17px] w-full h-[21px]'/>
                </div>
            </div>
            <p className='mt-[47px] max-w-[1339px] w-full'>для щитовых решений любого уровня сложности Токовые характеристики от 6 до 63 А, типы кривых B, C, D, установка на DIN-рейку. 
Соответствие ГОСТ, стабильность срабатывания и надёжность в эксплуатации.</p>
            <div className='flex gap-[20px] mt-[57px]'>

            </div>
        </div>
        <div className='flex gap-[20px] max-lg:flex-col'>
            <div className='max-w-[451px] w-full'>
                <div className='bg-[#F8F8F8] max-w-[451px] w-full rounded-t-[8px]'>
                    <div className='bg-[#EF3824] h-[46px] text-[18px] font-[600] text-white flex justify-between p-[14px] rounded-t-[8px]'>
                        <p>Фильтр</p>
                        <p>Сбросить X</p>
                    </div>
                    {/* Power */}
                <div className='mt-[20px] px-[12px] text-[18px] font-[700]'>
                <p className="font-medium text-sm mb-1">Мощность</p>
                <div className='grid grid-cols-3'>
                    {[800,800,1400, 1400,800,800].map((v) => (
                    <label
                    key={v}
                    className="flex items-center space-x-2 text-sm mb-1"
                    >
                    <input
                        type="checkbox"
                        
                    />
                    <span>{v} Вт</span>
                    </label>
                ))}
                </div>
                </div>
                <div className='border border-[#DFDFDF] max-w-[423px] w-full mt-[31px] mx-[13px]'></div>
                {/* Voltage */}
                <div className='text-[18px] font-[700] mt-[20px] px-[12px]'>
                <p className="font-medium text-sm mb-1 mt-3">Напряжение</p>
                <div className='grid grid-cols-3'>
                    {[800,800,1400, 1400,800,800].map((v) => (
                    <label
                    key={v}
                    className="flex items-center space-x-2 text-sm mb-1"
                    >
                    <input
                        type="checkbox"
                        
                    />
                    <span>{v} B</span>
                    </label>
                ))}
                </div>
                
                </div>

                <div className='border border-[#DFDFDF] max-w-[423px] w-full mt-[31px] mx-[13px]'></div>

                <div className='text-[18px] font-[700] mt-[20px] px-[12px]'>
                <p className="font-medium text-sm mb-1 mt-3">Размеры</p>
                <div className='grid grid-cols-3'>
                    {[800,800,1400, 1400,800,800].map((v) => (
                    <label
                    key={v}
                    className="flex items-center space-x-2 text-sm mb-1"
                    >
                    <input
                        type="checkbox"
                        
                    />
                    <span>{v} B</span>
                    </label>
                ))}
                </div>
                
                </div>

                <div className='border border-[#DFDFDF] max-w-[423px] w-full mt-[31px] mx-[13px]'></div>
                {/* Case */}
                <div className='text-[18px] font-[700] mt-[20px] px-[12px]'>
                <p className="font-medium text-sm mb-1 mt-3">Корпус</p>
                {["Литой алюминий", "Алюминий", "Сталь"].map((v) => (
                    <label
                    key={v}
                    className="flex items-center space-x-2 text-sm mb-1"
                    >
                    <input
                        type="checkbox"
                        
                    />
                    <span>{v}</span>
                    </label>
                ))}
                </div>

                <div className='border border-[#DFDFDF] max-w-[423px] w-full mt-[31px] mx-[13px]'></div>

                <div className='text-[18px] font-[700] mt-[20px] px-[12px] pb-[36px]'>
                <p className="font-medium text-sm mb-1 mt-3">Световой поток</p>
                <div className='grid grid-cols-3'>
                    {[800,800,1400, 1400,800,800].map((v) => (
                    <label
                    key={v}
                    className="flex items-center space-x-2 text-sm mb-1"
                    >
                    <input
                        type="checkbox"
                        
                    />
                    <span>{v} B</span>
                    </label>
                ))}
                </div>
                
                </div>
                

                </div>
                <div className='rounded-[7px] mt-[31px] max-w-[202px] text-center items-center justify-center flex w-full h-[48px] bg-[#EF3824] text-white'>Сбросить фильтры</div>
            </div>
             
            <div className="max-w-[883px] w-full bg-white rounded-lg overflow-hidden shadow-sm">
            {/* Заголовки */}
            <div className="grid grid-cols-3 bg-[#EF3824] text-white font-medium text-sm">
                <p className="px-4 py-3">Фото</p>
                <p className="px-4 py-3">Наименование</p>
                <p className="px-4 py-3">Технические характеристики</p>
            </div>

            {/* Строки */}
            {products.map((p, i) => (
                <Link 
                href={"/product"}
                key={p.id}
                className={`grid grid-cols-3 text-sm ${
                    i % 2 === 1 ? "bg-[#F8F8F8]" : "bg-white"
                }`}
                >
                {/* Фото */}
                <div className="p-4 flex items-center">
                    <img src={p.img} alt={p.name} className="h-16 w-auto mx-auto" />
                </div>

                {/* Наименование */}
                <div className="p-4 flex flex-col justify-center">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-gray-500 text-sm">Артикул: {p.id}</p>
                </div>

                {/* Характеристики */}
                <div className="p-4 space-y-1">
                    <p>
                    <span className="font-medium">Мощность:</span> {p.power} Вт
                    </p>
                    <p>
                    <span className="font-medium">Напряжение:</span> {p.voltage} В
                    </p>
                    <p>
                    <span className="font-medium">Световой поток:</span>{" "}
                    {p.luminousFlux.toLocaleString("ru-RU")} Лм
                    </p>
                </div>
                </Link>
            ))}
            </div>
        </div>
    </div>
  )
}

export default page