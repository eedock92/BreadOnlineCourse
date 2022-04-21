import React, {useContext} from 'react'
import MycourseItem from '../../components/MyCourse/MycourseItem'
import AuthContext from '../../store/auth-context'
import { useStore } from '../../hooks/hooks-store/custom-store'
import classes from '../Lecture/lectureList.module.css'
import { useRouter } from 'next/router'

const MycourseList = () => {
 const router = useRouter()
 const authCtx = useContext(AuthContext)
 const isLoggedIn = authCtx.isLoggedIn

 const state = useStore()[0]
 const FavoriteLectures = state.lectures.filter(l => l.isFavorite)

 let content = <p className={classes.placeholder}> </p>

 if(isLoggedIn){

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

 }else{
    router.push('/AuthPage')
 }


  return content
}

export default MycourseList