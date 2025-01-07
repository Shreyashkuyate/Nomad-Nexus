import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({login}) {

  const loginStatus = () =>{
    const token = localStorage.getItem("jwt");
    if(login || token){
      return [
        <>
        <Link to='/profile'><li>Profile</li></Link>
        <Link to='/createPost'><li>Create Post</li></Link>
        <Link to='/'>
        <button className='primary-btn'>Log OUT</button>
        </Link>
        </>
      ]
    }else{
      return [
        <>
         <Link to='/signup'><li>signUp</li></Link>
         <Link to='/signin'><li>signIn</li></Link> 
        </>
      ]
    }
  };
  

  return (
    <div className='navbar'> 
    <img src={logo} alt='' />
    <ul className='nav-menu'>
    {loginStatus()}
    </ul>
    </div>
  )
}

export default Navbar
