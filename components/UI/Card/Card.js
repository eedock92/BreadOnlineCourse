import React from 'react'


const LectCard = props => {
    return (
        <div className={props.className} style={props.style}>{props.children}</div>
      )
}

export default LectCard