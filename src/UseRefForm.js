import React,{useRef} from "react";

export function UseRefForm(){
    const email = useRef('')
    const password = useRef('')
    console.log(email, 'useref email')
    function handleSubmit(e){
        e.preventDefault()
        email.current += "something.com"
        console.log(email.current, password.current, "email, password")
    }
    return (
        <> 
            <form onSubmit={handleSubmit}>
                <input type="email" value={email.current} onChange={(e) =>{ email.current = e.target.value
                    console.log(e.target.value, 'target.value')}}></input>
                <input type="password" value={password.current} onChange={(e) => (password.current = e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}