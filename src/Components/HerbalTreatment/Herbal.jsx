import React from 'react'
import "./Herbal.css"
import { Link } from 'react-router-dom'

export default function Herbal(props) {
  // FUNCTION SCROLL
  function Scroll(){
    window.scrollTo(0,0);

    let location = window.location.pathname;
    if(location.includes("singleProduct")){
     setTimeout(()=>{
      window.location.reload()
     },1)
    }
  }
  return (
    <div className='home_boxes'>
        {props.data.map((val,i)=>(
            <section key={i} >
                <Link to={`/singleProduct/${val.title}/${val.id}`} onClick={()=>{Scroll()}}>
                  <div className='image'><img loading='lazy' src={val.image} alt="" /></div>
                  <h3>{val.title}</h3>
                  <div className='overlay flex'>👁️</div>
                </Link>

            </section>
        ))}
    </div>
  )
}