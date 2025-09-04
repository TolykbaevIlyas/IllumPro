import React from 'react';

interface NewsCardsProps {
  date?: string;
  title?: string;
  description?: string;
}

const NewsCards = ({ date, title, description }: NewsCardsProps) => {
  return (
    <div className="max-w-[442px] w-full max-h-[374px] h-full rounded-[7px] bg-[#F8F8F8E5] opacity-[90%] px-[20px] pb-[32px] pt-[16px]">
      <div className="flex flex-col gap-[37px]">
        <span className="bg-[#FFFFFF] px-[8px] py-[2px] text-[12px] max-w-[111px] rounded-[3px]">
          {date}
        </span>
        <div className="flex flex-col gap-[16px] text-[#2E2C30]">
          <h3 className="max-[1920px]:text-[16px] min-[1920px]:text-[22px] font-bold ">{title}</h3>
          <p className="max-[1920px]:text-[12px] min-[1920px]:text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
