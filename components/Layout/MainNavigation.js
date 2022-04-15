import React,{ useContext } from 'react'
import classes from './MainNavigation.module.css';
import Link from 'next/link'
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/CommonButton';







const MainNavigation = props => {

  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn

  const logoutHandler = () => {
    authCtx.loggout()
  }

  return (
    <header className={classes.header}>
    <div className={classes.logo}>
      <Link href='/'>빵의나라</Link>
    </div>
    <nav>
      <ul>

        <li>
          <Link href='/learn'>배우기</Link>
        </li>
        <li>
          <Link href='/mycourses'>나의 학습</Link>
        </li>
        {isLoggedIn && isLoggedIn ? (
          <Button className={classes.Btn_Logout} buttonClick={logoutHandler}>로그아웃</Button>
       
        ) : (

          <li>
          <Link href='/AuthPage'>로그인</Link>
        </li>
        )}
        

        

      </ul>
    </nav>
  </header>
  )
}

export default MainNavigation