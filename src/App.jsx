import React from 'react'
import CounterUsestate from './CounterUsestate/CounterUsestate'
import UseStateRandomclr from './UseStateRandomclr/UseStateRandomclr'
import NavbarComp from './Navbar/NavbarComp'
import { Route, Routes } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import FakestoreProducts from './FakestoreProducts/FakestoreProducts'
import Forms from './Forms/Forms'
import './App.css'

const App = () => {
  return (
    <div>
      <NavbarComp/>
      <Routes>
        <Route path='/counter' element={<CounterUsestate/>}/>
        <Route path='/randomcolor' element={<UseStateRandomclr/>}/>
        <Route path='/darkmodetoggle' element={<DarkModeToggle/>}/>
        <Route path='/fakestore' element={<FakestoreProducts/>}/>
        <Route path='/forms' element={<Forms/>}/>
      </Routes>
      {/* <CounterUsestate/> */}
      {/* <UseStateRandomclr/> */}
    </div>
  )
}

export default App
