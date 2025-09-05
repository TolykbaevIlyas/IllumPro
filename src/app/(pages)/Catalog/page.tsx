'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {

     const [open, setOpen] = useState(false);

    const modules = [
        {id: 1, name: 'Автоматические выключатели', img: '/svg/catalog/avtomat.svg'},
        {id: 2, name: 'Контакторы', img: '/svg/catalog/kontaktor.svg'},
        {id: 3, name: 'Ограничители пускового тока', img: '/svg/catalog/opt.svg'},
        {id: 4, name: 'Устройства защитного отключения (УЗО)', img: '/svg/catalog/uzo.svg'},
    ];

    const catalog = [
        { id: 1, name: "Архитектурное освещение", multiline: true, img: "/svg/catalog/ikonka_as 2.svg", bg: "" },
        { id: 2, name: "Ландшафтное освещение",multiline: true, img: "/svg/catalog/icon-wa 4.svg", bg: "" },
        { id: 3, name: "Дорожное освещение",multiline: true, img: "/svg/catalog/speedway_60-2.svg", bg: "" },
        { id: 4, name: "Интерьерное освещение",multiline: true, img: "/svg/catalog/morrigan_ik.svg", bg: "" },
        { id: 5, name: "Светильники для музеев",multiline: true, img: "/svg/catalog/ikonka.svg", bg: "" },
        { id: 6, name: "Болларды", img: "/svg/catalog/zigzag_600-1.svg", bg: "" },
        { id: 7, name: "Художественное литьё",multiline: true, img: "/svg/catalog/vivaldi_ikonka.svg", bg: "" },
        { id: 8, name: "Световые фасады",multiline: true, img: "/svg/catalog/dom-tip-1-1.svg", bg: "" },
        { id: 9, name: "Поля света",multiline: true, img: "/svg/catalog/svetilnik-svetodiodnyj-shar.png.svg", bg: "" },
        { id: 10, name: "Опоры освещения",multiline: true, img: "/svg/catalog/modulnyj-stolb.svg", bg: "" },
        { id: 11, name: "Модульное оборудование",desk: "Автоматы, УЗО, контакторы и защита", multiline: true, img: "", bg: "#ef3824;" },
        { id: 12, name: "Аксессуары", img: "/svg/catalog/2-plates-512x512-1.svg", bg: "" },
    ];

    const Quality = [
        {id:1, name: 'гарантийные обязательства', desc: 'Наши светильники разрабатываются собственным конструкторским бюро и проходят испытания. Поэтому мы даем на них фирменную гарантию не менее трех лет.', icon: '/svg/catalog/Group 2087329838.svg'},
        {id:2, name: 'Согласовательные работы', desc: 'Мы готовим проекты освещения для согласования с городскими службами, структурами, собственниками и эксплуатирующими организациями.', icon: '/svg/catalog/Text Flow Columns--Streamline-Ultimate.svg'},
        {id:3, name: 'Квалифицированный монтаж', desc: 'Мы располагаем собственными электромонтажными бригадами. Благодаря опыту работы во множестве регионов и климатических зон они обеспечивают качественный монтаж на каждом объекте.', icon: '/svg/catalog/Group.svg'},
        {id:4, name: 'Испытания', desc: 'Мы производим большинство компонентов светильников IPRO на собственном заводе в Тульской области. Наша продукция проходит испытания в светотехнической лаборатории, тестирование в климатической камере.', icon: '/svg/catalog/Cursor Choose 1--Streamline-Ultimate.svg'},
        {id:5, name: 'Эксплуатация и обслуживание', desc: 'Мы осуществляем обслуживание объектов: проводим мойку и чистку, мониторинг технического состояния светильников, проверку герметичности соединений и целостности изоляции, выверку нацеливания светильников.', icon: '/svg/catalog/Cog--Streamline-Ultimate.svg'},
        {id:6, name: 'Продуманная логистика', desc: 'Мы реализуем проекты на территории России и других стран, например, в Казахстане и Саудовской Аравии. При необходимости подберем поставщиков специальных светотехнических решений, возьмем на себя вопросы ВЭД, организуем доставку оборудования', icon: '/svg/catalog/Group 2087329652.svg'},
    ]

  return (
    <div className='max-w-[1400px] mx-auto'>
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
                <h3 className='text-[42px] leading-[100%] font-[700] uppercase mt-[40px] max-lg:text-[24px]'>Каталог</h3>
                <div className="relative inline-block">
      {/* Кнопка */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-[8px] text-[#F44336] hover:text-[#d9362c] transition font-medium"
      >
        Скачать каталог (PDF)
        <img
          src="/svg/catalog/donwload.svg"
          alt="download"
          className={`w-[17px] h-[21px] transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Выпадающий список */}
      {open && (
        <div className="absolute mt-3 w-[230px] bg-white shadow-md rounded-md overflow-hidden border">
          <a
            href="/pdf/catalog-2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
          >
            Каталог 2021 год (PDF)
            <img
              src="/svg/catalog/donwload.svg"
              alt=""
              className="w-[17px] h-[21px]"
            />
          </a>
          <a
            href="/pdf/catalog-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
          >
            Каталог 2022 год (PDF)
            <img
              src="/svg/catalog/donwload.svg"
              alt=""
              className="w-[17px] h-[21px]"
            />
          </a>
        </div>
      )}
    </div>
            </div>
            <div className='flex gap-[20px] mt-[57px] max-lg:mt-[25px]'>
                <div className='grid grid-cols-3 gap-[20px] max-w-[858px] w-full rounded-[9px]'>
                    {catalog.map((item)=> (
                        item.id === 11 ? (
                            <Link href={'/CatalogInner'} key={item.id} className='flex flex-col gap-[33px] text-white relative *:max-w-[273px] h-[201] w-full bg-[#EF3824] p-[14px] max-lg:p-[5px] rounded-[9px] max-sm:max-w-[108px] max-sm:h-[108px]'>
                                <p className='flex flex-col text-[16px] font-[600] leading-[120%] max-sm:text-[12px]'>
                                    {item.name.split(" ").map((word, i) => (
                                        <span key={i}>
                                            {word}
                                        </span>
                                    ))}</p>
                                <p className='text-[16px] font-[400] opacity-60 max-lg:hidden'>Автоматы, УЗО, контакторы <br/>и защита</p>
                                <span className='flex items-center justify-between max-lg:hidden'>Подобрать решение <img src="/svg/catalog/arrow.svg" className='' alt="" /></span>
                            </Link>) : (
                            <Link href={'/CatalogInner'} key={item.id} className='relative *:max-w-[273px] h-[201] w-full bg-[#F8F8F8] p-[14px] max-lg:p-[5px] rounded-[9px] max-sm:max-w-[108px] max-sm:h-[108px]'>
                                <p className='flex flex-col text-[16px] font-[600] leading-[120%] max-sm:text-[12px]'>
                                    {item.name.split(" ").map((word, i) => (
                                        <span key={i}>
                                            {word}
                                        </span>
                                    ))}</p>
                                <Image width={0} height={0} sizes="100vw" src={item.img} alt=""  className='w-auto h-auto absolute right-0 bottom-0 max-lg:scale-50 max-lg:origin-bottom-right'/>
                            </Link>
                        )
                ))}
                </div>
                <div className=' max-lg:hidden max-w-[476px] w-full border border-[#EF3824] py-[39px] px-[36px] rounded-[9px]'>
                    <h4 className='text-[42px] uppercase leading-[120%] font-[700]'>Модульное <br/>оборудование</h4>
                    <p className='mt-[41px] text-[18px] leading-[120%] font-[400]'>
                        Надёжные компоненты <span className='text-[#EF3824]'>для щитовых <br/>
                        систем и электробезопасности.<br/></span> 
                        Подходят для промышленных<br/>
                        и городских объектов<br/>
                    </p>
                    <div className='mt-[129px] flex flex-col gap-[10px] mb-[207px]'>
                        {modules.map((item) => (
                            <div key={item.id} className='flex gap-[20px]'>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[110px]'>
            <h4 className='text-[42px] leading-[100%] font-[700] uppercase'>Наше Качество</h4>
            <div className='mt-[57px] mb-[137px] grid grid-cols-3  max-lg:grid-cols-2 gap-[23px]'>
                {Quality.map((item)=> (
                    <div key={item.id} className='flex gap-[27px] py-[27px] pl-[16px] pr-[13px] bg-[#F8F8F8] max-w-[437px] w-full rounded-[9px]'>
                        <img src={item.icon} alt=""  className='max-w-[25px] w-full h-[25px] max-lg:hidden'/>
                        <div className='flex flex-col gap-[27px]'>
                            <h5 className='uppercase font-[700] text-[16px] leading-[120%] flex max-lg:break-words max-lg:text-[12px] break-words line-clamp-3 max-sm:text-[12px]'>{item.name}</h5>
                            <p className='text-[14px] leading-[120%] font-[400] max-lg:text-[10px] max-sm:text-[10px]'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page