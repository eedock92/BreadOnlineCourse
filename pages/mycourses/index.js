import React, {Fragment} from 'react'
import MycourseList from '../../containers/mycourse/MycourseList'

const myCoursePages = () => {
  return (
    <Fragment>
      <div style={{height: '100vh'}}>
        <MycourseList/>
      </div>
    </Fragment>
  )
}

export default myCoursePages