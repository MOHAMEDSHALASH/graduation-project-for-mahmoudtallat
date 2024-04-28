/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import "./Banners.css"

export default function Banner2() {
  return (
    <div className='banner2'>
        <div className='left flex'>
            <h2>شفااء</h2>
        </div>
        <div className='center flex'>
            <marquee behavior="" direction="right">
            <h3>تمتع بصحه جيدة من الطبيعة</h3>
            </marquee>
        </div>
        <div className='right'>
            <button className='effect'>تسوق الأن</button>
        </div>
    </div>
  )
}
