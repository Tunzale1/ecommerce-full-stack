import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Pagination, Autoplay} from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className='homeSlider py-4'>
        <div className='container'>
        <Swiper loop="true" pagination={{
          clickable: true,
        }} spaceBetween={10} modules={[ Pagination, Autoplay]} autoplay={{delay: 2500, disableOnInteraction: false,}}className="sliderHome">
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/images.jpeg" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
        <SwiperSlide><div className='item rounded-[20px] overflow-hidden'><img src="/main-logo.png" alt="badge" className='w-full h-[350px] object-cover'/></div></SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider;