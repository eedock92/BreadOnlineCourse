import React, {useState} from 'react'

import Card from '../UI/StyleCard'
import { useStore } from '../../hooks/hooks-store/custom-store'
import classes from './Category.module.css'
import Button from '../UI/Button/CommonButton'


const CategoryLeft = props => {
  const state = useStore()[0]
  const dispatch = useStore(false)[1]
  const [btnCheck, setBtnCheck] = useState(false)
   



  const BreadHandler = () => {   

    setBtnCheck(true)
    dispatch('FINDCLASS',"제빵")

  }

  const CookieHandler = () => {
    setBtnCheck(true)
    dispatch('FINDCLASS',"제과")
    
  }

  const CancleClassify = () => {
    setBtnCheck(prev => !prev)
    dispatch('SETALL')
  }
 
  return (
    <div className={classes.left_category}>

      <Card><h2> - 분 류 -</h2>
        <br/>
       <h3>종목</h3>
         
    
            <Button value="제과" buttonClick={CookieHandler}>
                제과
            </Button>
     
            
         
            <Button value="제빵" buttonClick={BreadHandler}>
              제빵
            </Button>
     
          
              {btnCheck && btnCheck ?   <Button buttonClick={CancleClassify}>X</Button>: ''}
            
     

        <br/>

        <h3>제빵법</h3>

<form>

<label>
 <input type="radio" value="option1" />
   스트레이트
</label>

<label>
 <input type="radio" value="option2" />
  스펀지도우법
</label>

액체발효법(ADMI법),연속식 제빵법, 비상 반죽법, 재반죽법,  
<br/>
노타입 반죽법,찰리우드법, 냉동 반죽법, 오버나이트 스폰지법

</form>

<br/>

        <h3>제과법</h3>

        <form>
       
       <label>
         <input type="radio" value="option1" />
           반죽형
       </label>
     
       <label>
         <input type="radio" value="option2" />
           거품형
       </label>
  
   </form>
        <br/>
      </Card>
    </div>
  )
}

export default CategoryLeft