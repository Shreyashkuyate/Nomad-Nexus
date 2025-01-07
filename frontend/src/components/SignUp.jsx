import React,{useEffect, useState} from 'react'
import logo from '../img/nameonly.png'
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
  


function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

//Toast functions
const notifyA = (msg)=> toast.error(msg)
const notifyB = (msg)=> toast.success(msg)

const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  const postData = ()=>{
//checking email
if(!emailRegex.test(email)){
  notifyA("Invalid email")
  return
}else if(!passRegex.test(password)){
  notifyA("Password must contain at least 8 charcters,including at least 1 number and both lower and upper casse letters along with a special character ")
  return
}

    //sending data to server
    fetch("http://localhost:5000/signup", {
      method: 'post',
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        userName:userName,
        email:email,
        password:password
      })
  }).then(res=>res.json())
  .then(data =>{
    if(data.error){
      notifyA(data.error)
    }else{
      notifyB(data.message)
      navigate("/signin")
    }
    
    console.log(data)})

}
  

  return (
    <div className='signup'>
      <div className='form-container'>
        <div className='form'>
        <img className='signup-logo'src={logo} alt="" />
        <p className='loginPara'>
            Sign-up to see a social networking site<br/> Designed specifically for the travel enthusiasts.
        </p>
        <div>
            <input type="email" name='email' id='email' value={email}  placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
         </div>   
           <div>
            <input type="text" name='name' id='name' value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}} /> 
           </div> 
           <div>
           <input type="text" name='username' id='username' value={userName} placeholder='username' onChange={(e)=>{setUserName(e.target.value)}} />
            </div> 
            <div>
            <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <p className='loginPara' style={{fontSize:"12px",margin:"3px"}}>
                By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
            <input type="submit" id='submit-btn' value='Sign-Up' onClick={()=>{postData()}} />
        </div>
        <div className="form2">
            Already Have an account?
            <Link to='/signin'>
            <span style={{color:"blue",cursor:"pointer"}}>Sign-In</span>
            </Link>
           
        </div>
        </div>
        
      
    </div>
  )
}

export default SignUp
