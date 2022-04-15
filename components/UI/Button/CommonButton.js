import React from 'react'
import classes from './CommonButton.module.css'

const LoginButton = props => {

  const clickHandler = () => {
      props.buttonClick()
  }    
  return (
    <button className={props.className} onClick={clickHandler}>{props.children}</button>
  )
}

export default LoginButton