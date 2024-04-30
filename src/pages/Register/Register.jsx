import React from 'react'
import "./Register.css"
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Chat from '../../Components/ChatBot/Chat'


export default function Register() {
  return (
    <>
    <Chat />
    <NavBar />
    <div className="login">
  <div className="image">
    <img src={require("../../images/robot_icon.png")} alt="" />
  </div>
  <div className="main">
    <h3>Create Account</h3>
    <div className="icon">معنديش نت والله</div>
    <p className="or">or</p>
    <form action="">
      <input
        type="text"
        placeholder="Please Enter Your Name"
        required=""
        autofocus=""
      />
      <input type="Email" placeholder="Please Enter Your Email" required="" />
      <input type="password" placeholder="Enter Password" required="" />
      <button className="btn">Create Account </button>
    </form>
    <p className="log">
      Already Have an account? <Link to="">Login</Link>
    </p>
  </div>
</div>
    <Footer />
    </>
  )
}
