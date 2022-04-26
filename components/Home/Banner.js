import React, { useRef, useEffect, useState }from 'react'
import classes from './Banner.module.css'

import images from './images'
import Image from 'next/image'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../UI/Card/Card'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {

  return (

    <Swiper
    className={classes.carousel}
     // install Swiper modules
     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     autoplay={{ delay : 6000}}
     spaceBetween={0}
     slidesPerView={1}
     pagination={{ clickable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
   >

    <SwiperSlide>
      <Card className={classes.banner_card}>
        재료 마켓 광고
      </Card>
    </SwiperSlide>
    
 
    <SwiperSlide>
    <Card className={classes.banner_card2}>
       오픈 할인 30%
      </Card>
    </SwiperSlide>

    <SwiperSlide>
    <Card className={classes.banner_card3}>
        도전해보세요
      </Card>
    </SwiperSlide>

  </Swiper>

  )
}

export default Banner