import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Main from '../../Components/Main/Main'
import Chat from '../../Components/ChatBot/Chat'
import Banner1 from '../../Components/Banners/Banner1'
import Banner2 from '../../Components/Banners/Banner2'
import Herbal from '../../Components/HerbalTreatment/Herbal'
import Footer from '../../Components/Footer/Footer'

import HerbalData from "../../data/herbalData.json"
import HoneyData from "../../data/honeyData.json"
import therapyData from "../../data/therapyData.json"
import treatingDiseases from "../../data/treatingDiseases.json"
import ScrollToTop from '../../Components/Scroll To Top/ScrollTop'

export default function Home() {
  return (
    <div className='home'>
        <Chat />
        <ScrollToTop />
        <NavBar />
        <Main />
        <Banner1 />
        <div className='main_title'>
          <h2>العلاج بالأعشاب</h2>
        </div>
        <Herbal data={HerbalData}/>
        <Banner2 />
        <div className='main_title'>
          <h2>العسل</h2>
        </div>
        <Herbal data={HoneyData}/>
        <div className='main_title'>
          <h2>العلاج الطبيعي</h2>
        </div>
        <Herbal data={therapyData}/>
        <div className='main_title'>
          <h2>علاج الامراض طبيعيا</h2>
        </div>
        <Herbal data={treatingDiseases}/>
        <Footer />
    </div>
  )
}
