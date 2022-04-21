import React from 'react'

import Script from 'next/script'
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Footer from './Footer';
import { AuthContextProvicer } from '../../store/auth-context';

const Layout = props => {
  return (
   
        <AuthContextProvicer>
      
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        
        
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
 
        <Footer/>
        </AuthContextProvicer>
    
  )
}

export default Layout