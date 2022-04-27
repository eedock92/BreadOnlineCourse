import React from 'react'
import Card from '../UI/Card/Card'
import classes from './Category.module.css'
const CategoryRight = () => {
  return (
    <div className={classes.right_category}>

      <Card className={classes.search_cont}>
       
      <input placeholder='검색어를 입력하세요'/>
      </Card>
    
    </div>
  )
}

export default CategoryRight