import React from 'react'
import classes from './MainNavigation.module.css';
import Link from 'next/link'
import Button from '../UI/Button';
import { useStore } from '../../hooks/hooks-store/custom-store';


const MainNavigation = props => {
  const dispatch = useStore(false)[1];

  const toggleFavHandler= () => {
    console.log('login')
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
        <li>
          <Button buttonClick={toggleFavHandler}>로그인</Button>
        </li>

      </ul>
    </nav>
  </header>
  )
}

export default MainNavigation