import React from 'react'
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';

const Layout = props => {
  return (
    <div>
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
        <Footer/>
    </div>
  )
}

export default Layout