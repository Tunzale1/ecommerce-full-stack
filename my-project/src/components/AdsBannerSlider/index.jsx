
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';


const AdsBannerSlider = (probs) => {
  return (
    <div className='py-5 w-full'>
    <Swiper
        slidesPerView={probs.items}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
            <BannerBox img={'/download.jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (1).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/images.jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/images (1).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download.jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (1).jpeg'} link="/"/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AdsBannerSlider;
