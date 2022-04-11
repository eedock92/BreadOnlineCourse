import React from 'react'
import classes from './LectCard.module.css'

const LectCard = props => {
    return (
        <div className={classes.card} style={props.style}>{props.children}</div>
      )
}

export default LectCard