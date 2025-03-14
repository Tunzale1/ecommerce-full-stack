
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';


const AdsBannerSliderV2 = (probs) => {
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
            <BannerBox img={'/download (2).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (3).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (4).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (5).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (2).jpeg'} link="/"/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={'/download (3).jpeg'} link="/"/>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AdsBannerSliderV2;
