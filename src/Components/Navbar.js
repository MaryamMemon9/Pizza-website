import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
  const [menuOpen, setMenuOpen] =useState(false)
  return (
    <nav> 
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ308Vcgppzm_h0dstlTdOYgwFqkuG88s09dg&usqp=CAU' alt=''/>
<div className='menu' onClick={()=>{setMenuOpen(!menuOpen)}}>
<span></span>
<span></span>
<span></span>
</div>
<ul className={menuOpen ? 'open' : ''}> 
  <li><Link to={'/'}>Home</Link></li>
<li> <Link to={'/menu'}>Menu</Link></li>
<li><Link to={'/about'}>About</Link></li>
<li><Link to={'/contact'}>Contact</Link></li>
 
</ul>
    </nav>
  )
}

export default Navbar;