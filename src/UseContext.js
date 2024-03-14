import React, {createContext, useContext} from "react";
import { globalProp } from "./App";

export const childProp = createContext(null)
export function UseContextHook(){
    const name = useContext(globalProp)

    return <>
        <childProp.Provider value="I'm from child component">
            <h1>Hello {name}</h1>
        </childProp.Provider>
    </>
}