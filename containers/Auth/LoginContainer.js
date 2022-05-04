import React, { Fragment } from 'react'
import Login from '../../components/Auth/Login'
import SnsLogin from '../../components/Auth/SnsLogin'
import classes from './LoginContainer.module.css'


const LoginContainer = props => {
  return (
    <div className={classes.auth}>
        <Login/>
        {/* <SnsLogin/> */}
    </div>
  )
}

export default LoginContainer