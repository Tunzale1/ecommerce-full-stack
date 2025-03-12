import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';

const ProductsSlider = (props) => {
  return (
    <div className='productsSlider py-3'>
       <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductsSlider;