import {useState, useEffect} from 'react'

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1]

    const dispatch = (actionId, payload) => {
        // state가 업데이트 되면 newState에 담는다.
        const newState = actions[actionId](globalState, payload)
        globalState = {...globalState, ...newState}

    for(const listener of listeners){
        listener(globalState)
    }
    }

    useEffect(() => {
        if(shouldListen){
            listeners.push(setState) //컴포넌트의 setState를 listeners배열에 담는다
        }

        
        //클린업 function : 컴포넌트가 언마운트 될때 linstener 제거
        return () => {
            if(shouldListen){
                listeners = listeners.filter(li => li !== setState)
            }

        }
    }, [setState,shouldListen])
    return [globalState, dispatch]
}

export const initStore = (userActions, intialState) => {
    if (intialState){
        globalState = {...globalState, ...intialState}
    }
    actions = {...actions, ...userActions}
}