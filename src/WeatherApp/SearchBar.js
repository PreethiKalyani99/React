import React from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"
import './weather.css'

export function SearchBar(props){
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      props.cityData()
    }
  }
  return (
    <>
      <div className="inputWrapper">
        <span className="input-border">
        <FaSearch id="search-icon" className="mb-1"/>
        <input 
          type="text" 
          placeholder="Search location..." 
          className="searchInput"
          value={props.input}
          onKeyDown={handleKey}
          onChange={(e) => props.setInput(e.target.value)}
        ></input>
        </span>
        <Button className="search-btn" onClick={props.cityData}>Search</Button>
      </div>
    </>
  )
}