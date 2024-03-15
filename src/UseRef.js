import React, {useRef, useState} from "react";

export function UseRefHook(){
    const input = useRef()
    console.log('input', input)

    function handleClick(){
        input.current.focus()
        console.log('click', input.current.value)
    }

    return (
        <>
            <input type="text" ref={input} placeholder="use-ref"></input>
            <button onClick={handleClick}>Focus</button>
        </>
    )
}

export default function StopWatch(){
    const [time, setTime] = useState(null)
    const [timeNow, setTimeNow] = useState(null)
    let intervalId = useRef('')

    let secondsPassed = 0
    if(time !== null && timeNow !== null){
        secondsPassed = (timeNow - time) / 1000
    }

    function handleStart(){
        setTime(Date.now())
        setTimeNow(Date.now())

        intervalId.current = setInterval(() => {
            setTimeNow(Date.now())
        }, 10)
    }

    function handleStop(){
        clearInterval(intervalId.current)
    }

    return (
        <>
            <h1>{secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}