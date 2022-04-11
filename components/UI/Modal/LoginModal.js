import React, {Fragment} from 'react'
import reactDom from 'react-dom'
import classes from './LoginModal.module.css'
import Card from '../Card'

const BackDrop = props => {
    return (<div className={classes.backdrop}/>)
}

const ModalOverlay = props => {
    return (
<Card className = {classes.modal}>
        <h1>로그인</h1>
</Card>
    )
}

const LoginModal = () => {
  return (
    <Fragment>
        {reactDom.createPortal(<BackDrop/>, document.getElementById('backdrop-root'))}
        {reactDom.createPortal(<ModalOverlay/>, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default LoginModal