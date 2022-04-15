import React, {useState} from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    userType : '',
    login: token => {},
    loggout: () => {},
})

export const AuthContextProvicer = props => {
    const [token, setToken] = useState(null)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        userType : '나중에 DB에서 유저 타입을 가져온다',
        login: loginHandler,
        loggout : logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext