import React, { useEffect, useState } from 'react'
import "./Cart.css"

import NavBar from '../../Components/NavBar/NavBar'
import Footer from "../../Components/Footer/Footer"
import Chat from '../../Components/ChatBot/Chat';

// REACT ICONS
import {FaPlus ,FaMinus } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import ScrollToTop from '../../Components/Scroll To Top/ScrollTop';

export default function Cart() {

  // GET DATA CART
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    const DataStored = JSON.parse(localStorage.getItem("cart_shopping")) || [] ;
    setCartData(DataStored)
  },[cartData])

  // FUNCTION COUNT + INCREASE
  function CountIncrease(item){
    item.count += 1
    setCartData([...cartData])
    localStorage.setItem("cart_shopping",JSON.stringify(cartData))
  }

  // FUNCTION COUNT - DECREASE
  function CountDecrease(item){
    if(item.count > 1){
      item.count-= 1
      setCartData([...cartData])
      localStorage.setItem("cart_shopping",JSON.stringify(cartData))
    }
  }

  // FUNCTION TOTAL PRICE PRODUCT 
  function total_product_price(product){
      return product.price  * product.count
  }

  // FUNCTION TOTAL PRICE All PRODUCTS
  const totalPrice = cartData.reduce((total,item)=>{
      return total + total_product_price(item)
  },0)

  // FUNCTION REMOVE ONE PRODUCT 
  function RemoveProduct(item){
    const updateProduct = cartData.filter((cartitem)=> cartitem.id !==item.id)
    // update
    setCartData(updateProduct)
    localStorage.setItem("cart_shopping",JSON.stringify(updateProduct))
  }

  // ALL PRODUCTS COUNTER
  let sum=0
  for(let i = 0 ;i < cartData.length ; i++){
     sum +=cartData[i].count
  }


  return (
    <div className='cart_page'>
        <Chat />
        <ScrollToTop />
        <NavBar />
        <h1 className='title_cart flex'> عربة التسوق <span className='flex'><IoMdCart /></span></h1>
        <div className="container_cart flex">
          {/* RIGHT */}
          <div className='right'>
            <section>
              <p className='name'>عدد المنتجات</p>
              <h3 className='count'>{cartData.length}</h3>
            </section>
            <section>
              <p className='name'>اجمالي المنتجات</p>
              <h3 className='count'>{sum}</h3>
            </section>
            <section>
              <p className='name'>السعر النهائي</p>
              <h3 className='count'>{totalPrice.toFixed(2)} <sub>ج.م</sub></h3>
            </section>
            <button type='submit'>الشراء الأن</button>
          </div>
          {/* LEFT */}
          <div className='left'>
            {cartData.length !==0 ?
            cartData.map((val,i)=>(
                        <section key={i}>
                          <div className='image'>
                              <img src={val.image} alt="logoProduct" />
                          </div>
                          <div className='details'>
                            <h3 className='title'>{val.name}</h3>
            
                            <nav className='operators'>
                              <div className='counter flex'>
                                <p onClick={()=>{CountIncrease(val)}} className='plus'><FaPlus /></p>
                                <p className='count'>{val.count}</p>
                                <p onClick={()=>{CountDecrease(val)}} className='minus'><FaMinus /></p>
                              </div>
                              <button onClick={()=>{RemoveProduct(val)}} className='delete'>حذف</button>
                            </nav>
                            <div className='price'>
                                <p>الاجمالي</p>
                                <p className='total'>{total_product_price(val)} <span>ج.م</span></p>
                            </div>
            
                          </div>
                        </section>
            ))
            :
            <h3 className='no_data'>لا يوجد منتجات في عربة التسوق حاليا</h3>
          }
          </div>
        </div>

        <Footer />
    </div>
  )
}
