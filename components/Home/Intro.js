import React from 'react'
import classes from './Intro.module.css'
import Image from 'next/image'
import ber from '../../public/img/제빵사완성.png'

const Intro = () => {
  return (
    <div className={classes.Intro_sect}>

      <div className={classes.Intro_left}>
        <Image src={ber} alt="" />
        </div>

        <div className={classes.Intro_right}>
      
          <h1>20년 전통 빵의나라</h1>
          <h1>온라인에서 만나요</h1>
        </div>
    </div>
  )
}

export default Intro