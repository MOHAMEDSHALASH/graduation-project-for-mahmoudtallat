import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

// REACT ICONS
import { IoMdCart } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";

// LINKS
const NavBarLinks=[
    {
        NameLink:"الرئيسية",
        UrlLink:"/"
    },
    {
        NameLink:"منتجات العسل",
        UrlLink:"/honeyproducts"
    },
    {
        NameLink:"منتجات الزيوت",
        UrlLink:"/oilproducts"
    },
    {
        NameLink:"منتجات الأعشاب",
        UrlLink:"/herbalProducts"
    },
]
export default function NavBar() {

  const [navBarShow,setNavBarShow] = useState(false)

// FUNCTION SCROLL
    function Scroll(){
        window.scrollTo(0,0)
    }
  // GET DATA CART
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    const DataStored = JSON.parse(localStorage.getItem("cart_shopping")) || [] ;
    setCartData(DataStored)
  },[cartData])

  return (
    <header className='flex'>
        <div className={`menu  ${navBarShow===false ? "" : "menu_close"}`} 
        onClick={()=>{setNavBarShow(navBarShow===false ? true : false)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={`links flex  ${navBarShow===false ? "" : "links_show"}`}>
            {NavBarLinks.map((link,i)=>(
                <li onClick={()=>{Scroll()}} key={i}><NavLink to={link.UrlLink}>{link.NameLink}</NavLink></li>
            ))}
        </ul>
        <ul className='icons flex'>
            <li onClick={()=>{Scroll()}}>
                <div className='count'>{cartData.length}</div>
                <NavLink className="icon_cart" to="/cart"><IoMdCart /></NavLink>
            </li>
            <li onClick={()=>{Scroll()}}>
                <div className='count'>0</div>
                <NavLink className="icon_fav" to=""><IoMdHeart /></NavLink>
            </li>
            <li onClick={()=>{Scroll()}}><NavLink className="icon_sign" to="/register"><IoLogIn /></NavLink></li>
        </ul>
    </header>
  )
}
