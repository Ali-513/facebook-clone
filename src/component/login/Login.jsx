import React, { useState } from 'react';
import './login.css';
import img from "../../images/logo.svg";
import { Link }from"react-router-dom";
export default function Login() {

  const[ userinfo, setuserinfo ]= useState({
    email:"",
    password:""
  });
  const handleinfo=(event)=>
  {
    const {name,value}=event.target;
    setuserinfo({...userinfo,[name]:value});

  };
  const checker=()=>{
    if(userinfo.email.includes('@')&&(userinfo.password==="123")){
      alert("Successfully Login")
    }
    else{
      alert("Incorrect Email or Password")
    }
  }

  
  return (
    <div>
      <div className="container">
        <div className="leftcontainer">
          <div className="left">
            <img src={img} alt="" />
            <h3>Facebook helps you connect the people and share with the people in your life</h3>
          </div>
        </div>
      <div className="rightcontainer">
        <div className="right">
          <div className="center">
            <input type="text"  className='inputs' name='email' placeholder='Email Address or phone number' value={userinfo.email} onChange={handleinfo}/>
            <input type="password" className='inputs' name='password' placeholder='Password'value={userinfo.Loginpassword} onChange={handleinfo} />
            <button className='btn' onClick={checker}> Log In </button>
            <div className="forgot">
              <a href="">Forgotton Password?</a>
            </div>
            <hr></hr>
            <div className="btnclass">
              <button className="btn-green" >
              <Link to="/signup" className='link'>
              Create New Account
              </Link>
              </button>
             
            </div>
        </div>
      </div>
        <div className="linker" id='regpage'><a href="">Create a Page </a>for celebrity, brand or business</div>

        </div>
      </div>
    </div>
  )
}
