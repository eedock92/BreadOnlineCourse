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

      
  
        <br/>
       <h3>종목을 선택하세요</h3>
         
    
            <Button className={classes.left_cat_btn} value="제과" buttonClick={CookieHandler}>
                제 과
            </Button>
     
            
         
            <Button className={classes.left_cat_btn} value="제빵" buttonClick={BreadHandler}>
              제 빵
            </Button>
     
          
              {btnCheck && btnCheck ?   <Button className={classes.left_cat_btn} buttonClick={CancleClassify}>X</Button>: ''}
            
     

        <br/>
{/* 
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

<label>
 <input type="radio" value="option2" />
 비상 반죽법
</label>

<br/>


</form>

  

<br/>

<h3>제과법</h3>

<form>

<label>
 <input type="radio" value="option1" />
   크림형
</label>

<label>
 <input type="radio" value="option2" />
   다단계법
</label>

<label>
 <input type="radio" value="option1" />
   공립법
</label>

<label>
 <input type="radio" value="option2" />
   별립법
</label>

</form> */}



       
        <br/>
     
    </div>
  )
}

export default CategoryLeft