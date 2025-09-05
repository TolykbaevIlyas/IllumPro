'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {

    const modules = [
        {id: 1, name: 'Автоматические выключатели', img: '/svg/catalog/avtomat.svg'},
        {id: 2, name: 'Контакторы', img: '/svg/catalog/kontaktor.svg'},
        {id: 3, name: 'Ограничители пускового тока', img: '/svg/catalog/opt.svg'},
        {id: 4, name: 'Устройства защитного отключения (УЗО)', img: '/svg/catalog/uzo.svg'},
    ];

    const catalog = [
        { id: 1, name: "Tornado", multiline: true, img: "/svg/catalog/image 184.png", bg: "" },
        { id: 2, name: "Archspot",multiline: true, img: "/svg/catalog/image 185.png", bg: "" },
        { id: 3, name: "Mesh",multiline: true, img: "/svg/catalog/image 196.png", bg: "" },
        { id: 4, name: "Pin",multiline: true, img: "/svg/catalog/image 197.png", bg: "" },
        { id: 5, name: "Bruce",multiline: true, img: "/svg/catalog/image 186.png", bg: "" },
        { id: 6, name: "Sofia", img: "/svg/catalog/image 198.png", bg: "" },
        { id: 7, name: "Proline Premium",multiline: true, img: "/svg/catalog/image 199.png", bg: "" },
        { id: 8, name: "TD",multiline: true, img: "/svg/catalog/image 200.png", bg: "" },
        { id: 9, name: "Stem",multiline: true, img: "/svg/catalog/image 201.png", bg: "" },
        { id: 10, name: "TC",multiline: true, img: "/svg/catalog/image 202.png", bg: "" },
        { id: 11, name: "Flex IP68",desk: "Автоматы, УЗО, контакторы и защита", multiline: true, img: "/svg/catalog/image 204.png", bg: "#ef3824;" },
        { id: 12, name: "Underwater", img: "/svg/catalog/image 205.png", bg: "" },
        { id: 13, name: "Archline", img: "/svg/catalog/image 206.png", bg: "" },
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
                <h3 className='text-[42px] leading-[100%] font-[700] uppercase mt-[40px] max-lg:text-[24px]'>Архитектурное освещение</h3>
                <div className='flex gap-[17px]'>
                    Скачать каталог (PDF)
                    <img src="/svg/catalog/donwload.svg" alt=""  className='max-w-[17px] w-full h-[21px]'/>
                </div>
            </div>
            <p className='mt-[47px] max-w-[890px] w-full max-lg:text-[14px]'>Мы разрабатывает решения для архитектурной подсветки фасадов, ниш, колонн и кровель. Мы поставляем надёжные светильники с разной оптикой, цветовой температурой
и DALI-управлением. Работаем с современными и историческими объектами.</p>
            <div className='flex gap-[20px] mt-[57px]'>
                <div className='grid grid-cols-5 max-lg:grid-cols-3 gap-[25px] max-w-[1349px] w-full '>
                    {catalog.map((item)=> (
                        item.id === 11 ? (
                            <Link href={'/CatalogSeries'} key={item.id} className='flex flex-col gap-[33px] text-white relative *:max-w-[273px] h-[201] w-full bg-[#EF3824] p-[14px] max-lg:p-[5px] rounded-[9px] max-sm:max-w-[108px] max-sm:h-[108px]'>
                                <p className='flex flex-col text-[16px] font-[600] leading-[120%] max-sm:text-[12px]'>
                                    {item.name.split(" ").map((word, i) => (
                                        <span key={i}>
                                            {word}
                                        </span>
                                    ))}</p>
                                <p className='text-[16px] font-[400] opacity-60 max-lg:hidden'>Автоматы, УЗО, контакторы <br/>и защита</p>
                                <span className='flex items-center justify-between max-lg:hidden'>Подобрать решение <img src="/svg/catalog/arrow.svg" className='' alt="" /></span>
                            </Link>) : (
                            <Link href={'/CatalogSeries'} key={item.id} className='relative *:max-w-[273px] h-[201] w-full bg-[#F8F8F8] p-[14px] max-lg:p-[5px] rounded-[9px] max-sm:max-w-[108px] max-sm:h-[108px]'>
                                <p className='flex flex-col text-[16px] font-[600] leading-[120%] max-sm:text-[12px]'>
                                    {item.name.split(" ").map((word, i) => (
                                        <span key={i}>
                                            {word}
                                        </span>
                                    ))}</p>
                                <Image width={0} height={0} sizes="200vw" src={item.img} alt=""  className='w-auto h-auto absolute right-0 bottom-0 max-lg:scale-200 max-lg:origin-bottom-right'/>
                            </Link>
                        )
                ))}
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