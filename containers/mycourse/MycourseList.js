import React from 'react'
import MycourseItem from '../../components/MyCourse/MycourseItem'

import { useStore } from '../../hooks/hooks-store/custom-store'
import classes from '../Lecture/lectureList.module.css'

const MycourseList = () => {
 const state = useStore()[0]
 const FavoriteLectures = state.lectures.filter(l => l.isFavorite)

 let content = <p className={classes.placeholder}> </p>
 if(FavoriteLectures.length > 0){
     content = (
         <ul className={classes.mycourse_list}>
             {FavoriteLectures.map(lect => (
                <MycourseItem
                    key={lect.id}
                    id={lect.id}
                    title={lect.title}
                    description={lect.description}
             />
             ))}
             
         </ul>
     )
 }

  return content
}

export default MycourseList