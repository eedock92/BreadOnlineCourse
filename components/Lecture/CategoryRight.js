import React from 'react'
import Card from '../UI/StyleCard'
import classes from './Category.module.css'
const CategoryRight = () => {
  return (
    <div className={classes.left_category}>

      <Card>검색</Card>
      <Card>패키지</Card>
    </div>
  )
}

export default CategoryRight