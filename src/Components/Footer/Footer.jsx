import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

// REACT ICONS
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='footer flex'>
        <div className="content">
          <h3>تواصل معناا </h3>
          <div className='social_icons flex'>
            <Link><FaFacebookF /></Link>
            <Link><FaWhatsapp /></Link>
            <Link><FaTwitter /></Link>
            <Link><FaLinkedinIn /></Link>
          </div>
        </div>
        <section>
            <div className='wave1 wave'></div>
            <div className='wave2 wave'></div>
            <div className='wave3 wave'></div>
            <div className='wave4 wave'></div>
        </section>
    </footer>
  )
}
