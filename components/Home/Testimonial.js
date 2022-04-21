import React from 'react'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../UI/Card/Card'

import classes from './Testimonial.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testim = [

  {
      testi_id : 't01',
      name : '김X영',
      description : '원장님의 수업을 듣고 한번만에 시험에 합격 후 제과점을 차렸어요!!',
      current_job : '- 자영업 -'

  },
  {
      testi_id : 't02',
      name : '박X삼',
      description : '처음에는 아무것도 몰랐는데,..원장님의 꿀팁으로 시험에 합격했습니다. 괜히 20년 노하우가 아니더라구요',
      current_job : '- 크라운베이커리 -'

  },
  {
      testi_id : 't03',
      name : '윤X방',
      description : '취미로 배우다가 흥미있어서 케잌반에서 열심히 연구 끝에 케잌연구가가 되었습니다',
      current_job : '- 빠리바게뜨 -'

  },
  {
      testi_id : 't04',
      name : '김X수',
      description : '쿠키를 좋아해서 배우게 되었어요',
      current_job : '- 쿠키몬스터 대표 -'

  },

]

const Testimonial = () => {
  return (
    <div className={classes.testi_sect}>
  <h1>수강후기</h1>
    <Swiper
    className={classes.swiper}
     // install Swiper modules
     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     //autoplay={{ delay : 3000}}
     spaceBetween={50}
     slidesPerView={3}
     navigation
     pagination={{ clickable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
   >
 { testim.map(item => 
    <>
    <SwiperSlide >
      <Card className={classes.testi_card} key={item.testi_id}>

        <h2>{item.name}</h2>

        <p>{item.description}</p>

        <h4>{item.current_job}</h4>
      </Card>
    </SwiperSlide>
    </>
  )}  


   

  </Swiper>
  </div>
  )
}

export default Testimonial