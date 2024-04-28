import React from 'react'
import "./Card.css"

// REACT ICONS 
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  // FUNCTION ADD TO CART
  function addToCart(item){
    const product={
        id:item.id+item.title,
        image: "/static/media/عسل حبة البركه.7cf6cd89f8049435d0e7.jpg",
        name: item.title,
        price:item.price,
        count:1,
        }
    const existingCart=JSON.parse(localStorage.getItem("cart_shopping")) || [];
    const extistingProductIndex=existingCart.findIndex((product)=>product.id === (item.id+item.title))
    if(extistingProductIndex !== -1){
        existingCart[extistingProductIndex].count +=1
    }else{
        existingCart.unshift(product)
    }
    // update local storge
    localStorage.setItem("cart_shopping",JSON.stringify(existingCart))
    // reset our filds
  }

  
  return (
    <div className="card flex">
    <div className="overlay">
      <div className="icon"><FaHeart /></div>
    </div>

    <img src={require("../../images/products/honey images/عسل حبة البركه.jpg")} alt="" />
    <h3 className="title">{props.title}</h3>

    <nav>
      <p className="price">{props.price} ج.م </p>
      <div className="star flex">
          <span className="icon"><FaStar /></span>
          <span className="count">4.7</span>
      </div>
    </nav>

    <button onClick={()=>{
      addToCart(props)
    }} className="shopping_icon"><FaCartArrowDown /> اشتري الأن</button>
  </div>
  )
}
