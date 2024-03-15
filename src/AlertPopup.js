import React from "react";

function Button({className, children}){
    return <button className={className}>{children}</button>
}

export function DeleteButton(){
    return (
        <Button className="btn btn-danger">Delete</Button>
    )
}


export function Alert({children}){
    return (
        <div className="container alert-popup">{children}</div>
    )
}