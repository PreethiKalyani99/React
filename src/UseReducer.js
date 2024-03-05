import React, {useReducer} from "react";

function reducer(state, action){
    console.log(state,action)
    if(action.type === 'increment'){
        return {age : state.age + 1}
    }
    if(action.type === 'decrement'){
        return {age : state.age - 1}
    }
}

export function UseReducerHook(){
    const initialState = {age : 24}
    const [state, dispatch] = useReducer(reducer, initialState)

    return <>
        <button onClick={() => {
            dispatch({type: 'increment'})
        }}>Increment age</button>

        <button onClick={() => {
            dispatch({type: 'decrement'})
        }}>Decrement age</button>

        <h3>Your age is {state.age}</h3>
    </>
}