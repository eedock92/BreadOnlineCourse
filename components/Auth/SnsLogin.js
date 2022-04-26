import React, {useContext} from 'react'
import classes from './Sns.module.css'
import Button from '../UI/Button/CommonButton'
import AuthContext from '../../store/auth-context'
import { useRouter } from 'next/router'




const SnsLogin = () => {
  const authCtx = useContext(AuthContext)
  const router = useRouter()

 


  const KakaoAuthHandler = () => {

    //카카오일 때
    Kakao.init('874b759aabcad23dd86ecd882fabca6c')
    Kakao.Auth.login({
      
      success: function () {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
        	  console.log(response)
            authCtx.login(response.id)
            router.push('/')
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (error) {
        console.log(error)
      },
    })
   
      
  }


  

  return (
    <div className={classes.snslogin}>
        <h5>SNS 계정으로 로그인 하세요</h5>
        <Button className={classes.kakao_Btn} buttonClick={KakaoAuthHandler}>카카오톡 로그인</Button>


    </div>
  )
}

export default SnsLogin