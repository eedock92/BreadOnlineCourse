import React from 'react'
import Card from '../UI/StyleCard'
import classes from './MycourseItem.module.css'

const MycourseItem = props => {
  return (
    <Card >
      <div className={classes.course_item}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  )
}

export default MycourseItem