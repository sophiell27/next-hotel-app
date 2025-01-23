import Image from 'next/image';
import hero from '../../images/hero.svg';
const Hero = () => {
  return (
    <section className='min-h-[200px]'>
      <Image
        src={hero}
        alt='hero'
        className='absolute top-0 left-0 -z-20 w-full aspect-video object-cover brightness-50 '
      />
      <div className='grid grid-temp grid-rows-[auto,auto] md:mt-32 xl:mt-24 2xl:mt-[212px] relative '>
        <div className='col-start-5 absolute -top-24 -bottom-24 -left-12 right-0 border border-black'></div>
        <div className='col-span-3 border-b border-b-foreground self-end'>
          <h3 className='text-foreground text-2xl text-left pb-10'>
            享樂酒店
            <br />
            Enjoyment Luxury Hotel
          </h3>
        </div>
        <div className='col-start-5 w-fit relative'>
          <div>
            <h2 className='md:text-7xl 2xl-text-[100px] mb-6 whitespace-nowrap'>
              高雄
              <br />
              豪華住宿之選
            </h2>
            <p className='md:text-2xl 2xl:text-3.5 whitespace-nowrap'>
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
          </div>
          <div className='absolute top-full mt-15 bg-background p-10 w-full '>
            <button className='text-black flex items-center justify-end w-full'>
              立即預約
              <div className='bg-foreground h-[0.3px] w-[150px] inline-block bg-black ml-1'></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
