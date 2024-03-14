import React, {useState} from "react";

function UseStateHook(){
    const [currentValue, setCurrentValue] = useState('')

    function handleInputChange(e){
        setCurrentValue(e.target.value)
    }
    return (
        <>
            <input type="text" value={currentValue} onChange={handleInputChange}></input>
             You typed : {currentValue}
            <button onClick={(e) => setCurrentValue('')}>Clear input</button>
        </>
    )
}

export default UseStateHook