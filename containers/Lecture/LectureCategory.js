import React from 'react'
import CategoryLeft from '../../components/Lecture/CategoryLeft'
import CategoryRight from '../../components/Lecture/CategoryRight'
import Card from '../../components/UI/Card/Card'
import classes from './LectureCategory.module.css'

const LectureCategory = () => {
  return (
      <div className={classes.lectCat}>

          
          <Card className={classes.cate_card}>

            <CategoryLeft/>
            <CategoryRight/>
          </Card>
      </div>
  )
}

export default LectureCategory