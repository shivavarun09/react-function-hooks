import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import './Forms.css'
const Forms = () => {
  const [formtoggle,setFromtoggle]=useState(true)
const toggleform=()=>{
  setFromtoggle(prevstate=>!prevstate)
}
  return (
    <div className='FormDiv'>
                <h1>{formtoggle?"Login":"Sign Up"}</h1>

      {formtoggle?    <Form>

      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group  controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        Login
      </Button>
    </Form>
:    <Form>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type='text' placeholder='Enter your name'/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group  controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group  controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="success" type="submit">
        Sign Up
      </Button>
    </Form>
}
      <Button onClick={toggleform}>{formtoggle?"Switcg To SignUp":"Switch To Login"}</Button>
    </div>
  )
}

export default Forms
