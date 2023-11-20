import React from 'react'

function MenuItems({img, name, price}){
  return (
    <div className='menuItem'> 
 <img src={img} alt=''/>
 <h1>{name}</h1>
 <p>{price}</p>
    </div>
  )
}

export default MenuItems