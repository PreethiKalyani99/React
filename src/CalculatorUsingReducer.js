import React, {useReducer, useRef} from "react";


function reducer(state, action){
    if(action.type === 'setInput'){
        return {...state, inputValue: action.payload}
    }
    if(action.type === 'add'){
        return { result: state.result + parseFloat(state.inputValue) }
    }
    if(action.type === 'subtract'){
        return { result: state.result - parseFloat(state.inputValue) }
    }
    if(action.type === 'multiply'){
        return { result: state.result * parseFloat(state.inputValue) }
    }
    if(action.type === 'division'){
        return { result: state.result / parseFloat(state.inputValue) }
    }
    if(action.type === 'resetInput'){
        return { ...state, inputValue: "" }
    }
    if(action.type === 'resetResult'){
        return { ...state, result: 0 }
    }
}
export function CalculatorUsingReducer(){
    const inputFocus = useRef(null)
    const initialState = {
        inputValue: '',
        result: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleInputChange = (e) => {
        dispatch({type: 'setInput', payload: e.target.value})
    }
    
    const handleAdd = () => {
       dispatch({type: 'add'})
       dispatch({type: 'resetInput'})
        inputFocus.current.focus()
    }

    const handleSubtract = () => {
        dispatch({type: 'subtract'})
       dispatch({type: 'resetInput'})
        inputFocus.current.focus()
    }

    const handleMultiply = () => {
        dispatch({type: 'multiply'})
        dispatch({type: 'resetInput'})
        inputFocus.current.focus()
    }

    const handleDivide = () => {
        dispatch({type: 'division'})
       dispatch({type: 'resetInput'})
        inputFocus.current.focus()
    }

    const handleResetInput = () => {
       dispatch({type: 'resetInput'})
        inputFocus.current.focus()
    }

    const handleResetResult = () => {
       dispatch({type: 'resetResult'})
    }

    return (
        <>
            <p className="ms-2">Result: {state.result}</p>
            <input type="tel" className="ms-2" value={state.inputValue} onChange={handleInputChange} ref={inputFocus} autoFocus/>
            <div className="mt-3 ms-2">
                <button className="me-2 mb-4" onClick={handleAdd}>Add</button>
                <button className="me-2" onClick={handleSubtract}>Subtract</button>
                <button className="me-2" onClick={handleMultiply}>Multiply</button>
                <button className="me-2" onClick={handleDivide}>Divide</button>
                <button className="me-2" onClick={handleResetInput}>Reset Input</button>
                <button onClick={handleResetResult}>Reset Result</button>
            </div>
        </>
    );
}