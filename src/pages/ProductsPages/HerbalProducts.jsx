
import { herbalData } from "../../data2/data";


import React, { useState } from 'react'
import "./ProductsPages.css"
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Chat from "../../Components/ChatBot/Chat";
import Card from "../../Components/Card/Card";
import ScrollToTop from "../../Components/Scroll To Top/ScrollTop";


export default function HerbalProducts() {

  // FUNCTION SEARCH
  const [searchValue,setSearchValue] = useState("")
  const [Data,setData] = useState(herbalData)

  function Search(eo){
    let searchValue=eo.target.value;
    setSearchValue(searchValue)
    let DataFiltered=Data.filter((product=>product.title.toLowerCase().includes(searchValue.toLowerCase())))
    searchValue ==="" ? setData(herbalData) : setData(DataFiltered)
  }
  return (
    <div className="products_pages">
      <Chat />
      <ScrollToTop />
      <NavBar />

      <main className="flex">
        <video className="bg_video" autoPlay loop playsInline muted src={require("../../videos/الاعشاب.mp4")}></video>
        <h1>أحصل علي أجود <span>الأعشاب</span> الطبيعة .</h1>
        <button type="button">معرفة المزيد</button>
      </main>

      <div className="container_search flex">
        <input onChange={(eo)=>{
          Search(eo)
        }} 
        value={searchValue}
        type="search" placeholder="البحث عن منتج ما ..."/>
      </div>

      <div className="container_products">
        {Data.length !==0 ?
                Data.map((val,i)=>(
                  <Card 
                  key={i}
                  id={val.id}
                  image={val.image}
                  title={val.title}
                  price={val.price}
                  />
                ))
                :
                <h3>لا يوجد نتائج للبحث</h3>
          }
      </div>

    <Footer />
    </div>
  )
}
