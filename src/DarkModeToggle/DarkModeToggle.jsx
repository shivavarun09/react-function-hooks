import React, { useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { FaRegSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [toggle,setToggle] =useState(true)
  const togglebtn=()=>{
    setToggle(prevstate=>!prevstate)
  }
  return (
    <div style={{height:'90vh',backgroundColor:toggle?"white":"black",display:'flex',justifyContent:'center',alignItems:"center"}}>
      <Button onClick={togglebtn}>{toggle?<FaRegMoon />:<FaRegSun />}</Button>
    </div>
  )
}

export default DarkModeToggle
