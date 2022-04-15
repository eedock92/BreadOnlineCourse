import React, {Fragment, useState, useRef, useContext} from 'react'
import classes from './Login.module.css'
import Button from '../UI/Button/CommonButton'
import Authenticate from '../../pages/api/auth'
import AuthContext from '../../store/auth-context'




const Login = props => {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [isLogin, setIsLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const authCtx = useContext(AuthContext)

  const switchAuthModeHandler =() =>{
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = event => {
   
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.vlaue;

    setIsLoading(true)
    let url
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA68J-gSPAoT5iSEhkSOCj5Sq9lmNqVoEw'
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA68J-gSPAoT5iSEhkSOCj5Sq9lmNqVoEw'
      fetch(url,
      {
        method : 'POST',
        body : JSON.stringify({
          email: enteredEmail,
          password : enteredPassword,
          returnSecureToken : true
        }),
        headers : {
          'Content-Type' : 'applicaiotn/json'
        }
      }).then(res => {
        if (res.ok) {
         return res.json()
        }else{
          return res.json().then(data => {
            let errorMessage = '인증 실패하였습니다.'
            console.log(data)
            if(data && data.error && data.error.message){
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage)
          })
        }
      }).then(data => {
        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 36000))
        authCtx.login(data.idToken, expirationTime)
      }).catch(err => {
        alert(err.message)
      })
    }
  }

  return (
    <Fragment>

    <h1>{isLogin ? '회원가입' : '로그인'}</h1>
    <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>이메일</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? '회원가입' : '로그인'}</button>
          {isLoading && <p>요청중...</p>}
          <Button
            className={classes.toggle}
            buttonClick={switchAuthModeHandler}
          >
           {isLogin ? '기존 계정으로 로그인하기' : '아직 회원가입 하지 않으셨습니까?'}
          </Button>
        </div>
      </form>
      </Fragment>
  )
}

export default Login