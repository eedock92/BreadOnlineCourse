import React from 'react'
import classes from './Intro.module.css'

const Intro = () => {
  return (
    <div className={classes.Intro_sect}>

      <div className={classes.Intro_left}>
          왼쪽이미지
        </div>

        <div className={classes.Intro_right}>
          <h1>About</h1>
          <h3>20년 전통 빵의나라</h3>
          <h3>온라인에서 만나요</h3>
        </div>
    </div>
  )
}

export default Intro