import React from 'react'

import LectCard from '../UI/Card/Card'
import classes from './LectureItem.module.css'
import { useStore } from '../../hooks/hooks-store/custom-store'
import Button from '../UI/Button'
import img1 from '../../public/img/img1.jpg'
import Image from 'next/image'


const LectureItem = props=> {
    console.log('rendering')
   

    const dispatch = useStore(false)[1]
  
    const toggleFavHandler= () => {
      dispatch('BOOKMARK', props.id)
    }
  
      
    return (
      <LectCard className={classes.lecture_card} >

          <div className={classes.headImg}>
          <Image src={props.image} alt="" placeholder='blur'/>
          </div>

          <div className={classes.description}>
              <h2 className={classes.ribbon}>{props.title}</h2>
              <p>{props.description}</p>
              <Button
                  style={!props.isFav ? 'button-outline' : ''}
                  buttonClick={toggleFavHandler}
              >
              {props.isFav ? '✖' : '❤'}
              </Button>
          </div>
      </LectCard>
    )
  }; 

export default React.memo(LectureItem)