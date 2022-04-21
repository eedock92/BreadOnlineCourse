import React ,{ Fragment } from 'react'
import LectureCategory from '../../containers/Lecture/LectureCategory'

import LectureList from '../../containers/Lecture/LectureList'


function learnPages(props) {
  return (
    <Fragment>
     
      <LectureCategory/>
      <LectureList/>
    
  
    </Fragment>
  )
}

export default learnPages