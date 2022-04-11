import React ,{ Fragment } from 'react'
import LectureCategory from '../../containers/Lecture/LectureCategory'

import LectureList from '../../containers/Lecture/LectureList'


function learnPages(props) {
  return (
    <Fragment>
      <div style={{height: '100vh'}}>
      <LectureCategory/>
      <LectureList/>
      </div>
  
    </Fragment>
  )
}

export default learnPages