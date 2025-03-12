import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
        <div className='container'>
        <Swiper
        slidesPerView={8}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide> <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide><SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide><SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide><SwiperSlide>
            <Link to="/">
            <div className='item py-8 px-3 bg-white rounded-sm text=center flex items-center justify-center flex-col'>
                <img src="/main-logo.png" alt="" className="w-[300px] transition-all" />
                <h3 className='text-[16px] font-[500] mt-3'>Smart Tablet</h3>
            </div>
            </Link>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default HomeCatSlider;
