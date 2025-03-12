import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider py-4'>
        <div className='container'>
        <Swiper spaceBetween={10} navigation={true} modules={[Navigation, Autoplay]} autoplay={{delay: 3500, disableOnInteraction: false,}}className="sliderHome">
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full'/></div></SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider;