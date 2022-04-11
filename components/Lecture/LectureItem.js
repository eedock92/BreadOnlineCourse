import React from 'react'

import Card from '../UI/Card'
import classes from './LectureItem.module.css'
import { useStore } from '../../hooks/hooks-store/custom-store'
import Button from '../UI/Button'

const LectureItem = props=> {
    console.log('rendering')
    const dispatch = useStore(false)[1]
  
    const toggleFavHandler= () => {
      dispatch('BOOKMARK', props.id)
    }
  
      
    return (
      <Card >
          <div className={classes.lecture_item}>
              <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
              <p>{props.description}</p>
              <Button
                  style={!props.isFav ? 'button-outline' : ''}
                  buttonClick={toggleFavHandler}
              >
              {props.isFav ? '✖' : '❤'}
              </Button>
          </div>
      </Card>
    )
  }; 

export default React.memo(LectureItem)