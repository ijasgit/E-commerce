import React from 'react'
import "./header.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navto=useNavigate()
  return (
    <div className='header fixed-top'>
      <div className='logo' title='Slack'><iconify-icon icon="logos:slack"></iconify-icon></div>
      <div className='dropDown'>
        <h3 className='locationLogo'>Location<iconify-icon icon="carbon:location-filled"></iconify-icon>
          <span className="dropPin"><iconify-icon icon="ri:arrow-drop-down-line"></iconify-icon></span></h3>

        <div className='dropDown-content'>
          <a href="#">Chennai</a>
          <a href="#">Tambaram</a>
          <a href="#">Thoraipakkam</a>
        </div>

      </div>
      <div className='searchComponent'>
        <input title='search product what you need...' className='searchBar' placeholder=''></input>
        <div className="searchIcon"><iconify-icon icon="fa-solid:search"></iconify-icon></div>
      </div>
      {/* <button className='loginBtn'>Login</button> */}
      <div title='Cart'> <ShoppingCartIcon id="cartlogo" onClick={() => navto("/cart")} /></div>
      <div className='more-pin'>
        <div className='more'>More
          <span className="dropPin">
            <iconify-icon icon="ri:arrow-drop-down-line">
            </iconify-icon>
          </span>
        </div>

        <div className='dropDown-content'>
          <a href="#">Profile</a>
          <a href="#">Order details </a>
          <a href="#">24X7 customer care </a>
          <a href="#">Setting</a>
          <a href="#">Logout</a>
        </div></div>
    </div>
  )
}

export default Header
