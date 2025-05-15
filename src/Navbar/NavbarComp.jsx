import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarComp.css'
const NavbarComp = () => {
  return (
    <div className='Navbar'>
<Link className='navbar_links' to='/counter'><span >Counter</span></Link>
<Link className='navbar_links' to='/randomcolor'><span>Random Color</span></Link>
<Link className='navbar_links' to='/darkmodetoggle'><span>Dark Mode Toggle</span></Link>
<Link className='navbar_links' to='/fakestore'><span>Fake Store</span></Link>
<Link className='navbar_links' to='/forms'><span>Forms</span></Link>
    </div>
  )
}

export default NavbarComp
