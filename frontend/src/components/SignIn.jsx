import React from 'react';
import './SignIn.css';
import logo from '../img/nameonly.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import {  toast } from 'react-toastify';
import { LoginContext } from '../context/loginContext';

function SignIn() {
  const{setUserLogin} = useContext(LoginContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
 const [password, setPassword] = useState("")

//toast functions
const notifyA = (msg)=> toast.error(msg)
const notifyB = (msg)=> toast.success(msg)

const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 const postData = ()=>{
  //checking email
  if(!emailRegex.test(email)){
    notifyA("Invalid email")
    return
  }
      //sending data to server
      fetch("https://nomad-nexus.onrender.com/signin", {
        method: 'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
    }).then(res=>res.json())
    .then(data =>{
      if(data.error){
        notifyA(data.error)
      }else{
        notifyB("Signed in successfully")
        console.log(data)
        localStorage.setItem("jwt", data)
        setUserLogin(true)
        navigate("/")
      }
      
      console.log(data)})
  
  }

  return (
    <div className='signIn'>
      <div className="loginForm">
        <img className='signup-logo'src={logo} alt="" />
        <div>
          <input type="email" name='email' id='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
          <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={(e) =>{setPassword(e.target.value)}} />
        </div>
        <div>
        <input type="submit" id='login-btn' onClick={()=>{postData()}} value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account?
          <Link to="/signup">
          <span style={{color:"blue", cursor:"pointer"}}>Sign Up</span>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default SignIn
