import React from 'react'
import LectureItem from '../../components/Lecture/LectureItem'
import { useStore } from '../../hooks/hooks-store/custom-store'
import classes from './lectureList.module.css'


const LectureList = () => {
  const state = useStore()[0]

  return (
    <ul className={classes.lectures_list}>
      {state.lectures && state.lectures.map(lect => (
        <LectureItem
        key={lect.id}
        id={lect.id}
        title={lect.title}
        image={lect.image}
        description={lect.description}
        price={lect.price}
        category={lect.category}
        method={lect.method}
        isFav={lect.isFavorite}
        />
      ))}
    </ul>
  )
}

export default LectureList