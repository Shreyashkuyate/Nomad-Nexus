import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost'
import { ToastContainer } from 'react-toastify';//React-Toastify allows you to add notifications to your app with ease.
import React, {createContext} from "react";
import { LoginContext } from './context/loginContext';
import Model from './components/Model'

function App() {
 const [userLogin, setUserLogin] = useState(false)

  return (
    <BrowserRouter>
    <div className='App'>
      <LoginContext.Provider value={{setUserLogin}}>
      <Navbar login={userLogin}/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/createPost' element={<CreatePost/>}></Route>
     </Routes>
     <ToastContainer theme='dark'/>
     {/* <Model></Model> */}
      </LoginContext.Provider>
    
    </div>
    </BrowserRouter>
    
  )
}

export default App
