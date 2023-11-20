import React from 'react'
import {MenuList} from '../Helpers/MenuList'
import MenuItems from '../Components/MenuItems'
import '../Styles/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
<h1 className='menuTitle'>Our Menu</h1>
<div className='menuList'>
{MenuList.map((menuItem, Key) =>{
    return (
    <MenuItems 
    key={Key}
    img={menuItem.img} 
    name={menuItem.name} 
    price={menuItem.price}
    />
    )
})}
</div>
    </div>
  )
}

export default Menu