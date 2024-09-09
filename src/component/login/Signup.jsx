import React , {useState} from 'react'
import img from "../../images/logo.svg"
import "./login.css"
import { Link }from "react-router-dom"
export default function Signup() {

  const  [userreg,setUserreg]=useState({
         firstname:"",
         lastname:"",
         email:"",
         password:""
 });
  const handlesubmission =(e)=>{
    alert(" Successfully Submitted");
  }
  const handleinput=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    setUserreg({...userreg,[name]:value})
  }
  return (
    <div>
      <div className="signup-container">
        <div className="signup">
          <img src={img} alt="img" />
          <form onSubmit={handlesubmission}>
            <div className="card">
              <h1>Create a new Account</h1>
              <h4>It's quick and easy</h4>
              <div className="line"></div>
              <div className="info">
                <input type="text" placeholder='firstname' onChange={handleinput} name='firstname' value={userreg.name} style={{marginRight:"5px",width:"45%"}} className='inputsignup' />
                <input type="text" placeholder='lastname' onChange={handleinput} name='lastname' value={userreg.lastname} style={{display:"flex",width:"50%"}}className='inputsignup'/>
              </div>
              <div className="info">
              <input type="text" placeholder='Email Address or Mobile Number' onChange={handleinput} name='email' value={userreg.email} className='inputsignup' />
              </div>
              <div className="info">
              <input type="text" placeholder='Password' onChange={handleinput} name='password' value={userreg.password} className='inputsignup'/>
              </div>
              <div className="info">
                <div className="info label">
                  Date of birth
                </div>
                <input type="date"className='inputsignup'/>
              </div>
              <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
              <p style={{marginBottom:"10px"}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
              <button className="btn-green" type="submit" onClick={handlesubmission} >Sign up</button>
              <Link to='/' style={{fontSize:"15px",marginTop:"10px"}}>Already have an account?</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
