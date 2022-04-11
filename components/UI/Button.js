import React from 'react'
import classes from './Button.module.css'

const Button = props => {

    const clickHandler = () => {
        props.buttonClick()
    }

  return (
    <button className={classes.button} onClick={clickHandler}>{props.children}</button>
  )
}

export default Button