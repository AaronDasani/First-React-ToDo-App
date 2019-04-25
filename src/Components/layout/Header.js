import React from 'react'
import {Link} from 'react-router-dom'; 
export default function Header() {
  return (
    <header>
        <h1 style={headerStyle}>To Do List</h1>
        <Link style={buttonStyle} to="/">Home</Link> <Link style={buttonStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle={
    backgroundColor:"#191919",
    padding:"10px",
    color:"White",
    textAlign:"center",
    margin:0

}

const buttonStyle={
  color:"white",
  padding:"5px",
  backgroundColor:"#191919",
  textDecoration:"none"
}
