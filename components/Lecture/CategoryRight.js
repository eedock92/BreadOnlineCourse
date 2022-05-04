import React, {useRef} from 'react'
import Card from '../UI/Card/Card'
import { useStore } from '../../hooks/hooks-store/custom-store'
import classes from './Category.module.css'
const CategoryRight = () => {
  const dispatch = useStore(false)[1]
  const searchRef = useRef();

  const searchHandler = e => {
    e.preventDefault()
    const searchTitle = searchRef.current.value;
    console.log(searchTitle)
    if(searchTitle == ''){
      alert("검색어를 입력하세요")
    }
    dispatch('FINDNAME',searchTitle)
  }


  return (
    <div className={classes.right_category}>

      <Card className={classes.search_cont}>
      <br/>
      <h3>검색 해보세요</h3>
       <form onSubmit={searchHandler}>
          <input placeholder='검색어를 입력 후 Enter를 누르세요.' ref={searchRef}/>
       </form>
      </Card>
    
    </div>
  )
}

export default CategoryRight