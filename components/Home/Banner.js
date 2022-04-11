import React, { useRef, useEffect, useState }from 'react'
import classes from './Banner.module.css'
import {motion} from "framer-motion"
import images from './images'
import Image from 'next/image'


const Banner = () => {
  const [width, setWidth] = useState()
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (

      <motion.div ref={carousel} 
      className={classes.carousel}>
        <motion.div drag="x" 
        dragConstraints={{right:0 ,left: -width}} 
        className={classes.inner_carousel}>
          {images.map((image,index) => {
            return(
              <motion.div className={classes.item} key={index}>
                <Image src={image} alt="" />
              </motion.div>
            )
          })}
          
        </motion.div>
      </motion.div>

  )
}

export default Banner