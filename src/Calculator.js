import React, { useState, useRef } from "react";

export function Calculator() {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState(0)
    const inputFocus = useRef(null)


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleAdd = () => {
        setResult(result + parseFloat(inputValue))
        setInputValue('')
        inputFocus.current.focus()
    }

    const handleSubtract = () => {
        setResult(result - parseFloat(inputValue))
        setInputValue('')
        inputFocus.current.focus()
    }

    const handleMultiply = () => {
        setResult(result * parseFloat(inputValue))
        setInputValue('')
        inputFocus.current.focus()
    }

    const handleDivide = () => {
        setResult(result / parseFloat(inputValue))
        setInputValue('')
        inputFocus.current.focus()
    }

    const handleResetInput = () => {
        setInputValue("")
        inputFocus.current.focus()
    }

    const handleResetResult = () => {
        setResult(0)
    }

    return (
        <>
            <p>Result: {result}</p>
            <input type="tel" value={inputValue} onChange={handleInputChange} ref={inputFocus} autoFocus/>
            <div>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSubtract}>Subtract</button>
                <button onClick={handleMultiply}>Multiply</button>
                <button onClick={handleDivide}>Divide</button>
                <button onClick={handleResetInput}>Reset Input</button>
                <button onClick={handleResetResult}>Reset Result</button>
            </div>
        </>
    );
}
