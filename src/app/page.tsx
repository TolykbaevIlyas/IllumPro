import Directions from '@/widgets/Directions';
import FormWeCan from '@/widgets/FormWeCan';
import HeroMain from '@/widgets/HeroMain';
import HeroMainMobile from '@/widgets/HeroMain/ui/HeroMainMobile';
import InfoComp from '@/widgets/InfoComp';
import News from '@/widgets/News';
import OurProduction from '@/widgets/OurProduction';
import SliderMain from '@/widgets/SliderMain';
import TrustUs from '@/widgets/TrustUs';

export default function Home() {
  return (
    <main className="flex w-full min-w-dvw min-h-dvh flex-col items-center ">
      <div className="bg-[url('@/shared/assets/bg.png')] min-[390px]:pt-[21px]  min-[1280px]:pt-[187px] min-[1280px]:px-[70px] min-[1440px]:px-[146px]  min-[1920px]:pt-[332px] min-[1920px]:px-[283px] bg-cover bg-center  max-w-dvw w-full max-h-dvh min-[390px]:h-[736px] min-[1280px]:h-[757px] min-[1920px]:h-[1058px] hidden min-[1280px]:block">
        <HeroMain />
      </div>
      <div className="bg-[url('@/shared/assets/bg.png')] pb-[15px] w-full min-[390px]:pt-[21px] block min-[1280px]:hidden">
        <HeroMainMobile />
      </div>
      <InfoComp />
      <SliderMain />
      <Directions />
      <FormWeCan />
      <OurProduction />
      <div className="bg-[url('@/shared/assets/news.png')] bg-cover bg-center  max-w-dvw w-full max-h-dvh max-[1280px]:h-[525px] max-[1920px]:h-[576px] min-[1920px]:h-[671px]">
        <News />
      </div>
      <TrustUs />
    </main>
  );
}
