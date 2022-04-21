import { initStore } from "./custom-store";
import { authenticaiton } from "./auth";

let logoutTimer;

const AuthConfigureStore = () => {

    const calculateRemaingTime = expirationTime => {
        const currentTime = new Date.getTime()
        const adjExpirationTime = new Date(expirationTime).getTime()

        const remainingDuration = adjExpirationTime - currentTime

        return remainingDuration
    }

    const retriveStoredToken = () => {
        const storedToken = localStorage.getItem('token')
        const storedExpiration = localStorage.getItem('expirationTime')

        const remaingTime = calculateRemaingTime(storedExpiration)

        if(remaingTime <= 60000){
            localStorage.removeItem('token')
            localStorage.removeItem('expirationTime')
            return null
        }

        return {
            token : storedToken,
            duration : remaingTime
        }
    }

    const actions = {
    openModal : (curState) => {
        
        const IsModalOpen = !curState.auth.openModal

        const updatedState = [...curState.auth,IsModalOpen]
        
  
        return {auth : updatedState}

    },
    LogIn : () => {},    
    LogOut : () => {
        localStorage.removeItem('token')
    }
    
    
    }



    initStore(actions ,{auth : authenticaiton})
}

export default AuthConfigureStore
