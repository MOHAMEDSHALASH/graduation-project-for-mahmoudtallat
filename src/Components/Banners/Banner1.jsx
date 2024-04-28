import React from 'react'
import "./Banners.css"

// REACT LOTTIE
import Lottie from "lottie-react";
import CircleAnimate from "../../images/Animate/effect.json";

export default function Banner1() {
  return (
    <div className='banner1'>
        <div className='circle'>
        <Lottie className='lottie' animationData={CircleAnimate} />
        </div>
        <section>
            <h3>علاج الأمراض طبيعيا</h3>
            <div className='logo'><img src={require("../../images/banner1/box1.png")} alt="" /></div>
        </section>
        <section>
            <h3>العلاج بالأعشاب</h3>
            <div className='logo'><img src={require("../../images/banner1/box2.png")} alt="" /></div>
        </section>
        <section>
            <h3>العسل</h3>
            <div className='logo'><img src={require("../../images/banner1/box3.png")} alt="" /></div>
        </section>
        <section>
            <h3>العلاج الطبيعي</h3>
            <div className='logo'><img src={require("../../images/banner1/box4.png")} alt="" /></div>
        </section>
    </div>
  )
}
