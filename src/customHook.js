import { useEffect } from "react";

export function useConsoleLog(...value){
    useEffect(() => {
        console.log(value)
    })
}