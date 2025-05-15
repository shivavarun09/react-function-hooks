import React, { useState } from 'react'
import {Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CounterUsestate.css'
const CounterUsestate = () => {
  const [Count,setCount]=useState(0);
  const counter=(btnval)=>{

setCount(prestate=> prestate + btnval)
  }
  if(Count === 100){
  alert('Hello 100 reach ayyav okay! Button Disable Avthadi')
}
  return (
    <div className='maindiv'>
  
          <h1>{Count}</h1>

  
            <div>
      <Button className='btn'  variant='success' onClick={()=>counter(10)} disabled={Count === 100}>+</Button>
      <Button className='btn' variant='danger' onClick={()=>counter(-10)} disabled={Count===0}>-</Button>
      <Button className='btn' variant='dark' onClick={()=>setCount(0)}>Reset</Button>
      
          </div>
  
    </div>
  )
}

export default CounterUsestate
