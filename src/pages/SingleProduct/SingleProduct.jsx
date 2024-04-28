import React from 'react'
import { useParams } from 'react-router-dom';
import "./SingleProduct.css"

// ALL DATA FILE
import All_DATA from "../../data/allData.json";

// IMPORT COMPONENTS
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Chat from '../../Components/ChatBot/Chat';
import Herbal from '../../Components/HerbalTreatment/Herbal';
import { AutoTypeText } from '../../Components/AutoTyping/AutoTyping';
import ScrollToTop from '../../Components/Scroll To Top/ScrollTop';


export default function SingleProduct() {

  const {id1} = useParams();
  const {id2} = useParams();

  const singleProduct = All_DATA.filter((product)=>(product.title+product.id === id1+id2))
  const otherProducts = All_DATA.filter((product)=>(parseInt(product.id) === parseInt(id2)))
  const suggest = All_DATA.filter((product)=>((parseInt(product.id)+1) === parseInt(id2)+2))

  console.log(suggest)
  return (
    <div className='single_product'>
        <Chat />
        <ScrollToTop />
        <NavBar />
        {singleProduct.map((val,i)=>(
            <section className='product_container' key={i}>
                <nav>
                    <h1>{val.title}</h1>
                    <p><AutoTypeText text={val.description} delay={7} /></p>
                </nav>
                <div className='image'>
                    <img src={val.image} alt="" />
                </div>
            </section>
        ))}
        {/* ====================================== */}
        <div className='otherProducts'>
            <h1>منتجات قد تهمك أيضا </h1>
            <Herbal data ={otherProducts}/>
            <h1>اقتراحات</h1>
            <Herbal data ={suggest}/>
        </div>
        <Footer />
    </div>
  )
}
