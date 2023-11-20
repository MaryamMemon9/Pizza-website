import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/Home.css'
 
const Home = () => {
  return (
    <div className='home'> 
<div className='headerContainer'>
<h1>Pedro's pizzeria</h1>
<p>Pizza to fix any taste</p>
<Link to={'/menu'}> 
<button>Order Now</button>
</Link>
</div>
    </div>
  )
}

export default Home