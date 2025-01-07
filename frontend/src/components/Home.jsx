import React, {useEffect, useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
const navigate = useNavigate();
const [data, setData] = useState([])


useEffect(() => {
  
  const token = localStorage.getItem("jwt");
  if(!token){
    navigate("./signup")
  }

  // Fetching all post
fetch("http://localhost:5000/allposts",{
  headers:{
    "Authorization":"Bearer "+ localStorage.getItem("jwt")
  },
}).then(res=>res.json())
.then(result => setData(result))
.catch(err => console.log(err))
  
}, [])

  return (
    <div className='home'>
    {/*card*/}
    {data.map((posts) => {
      return(
        <div className="card">
        {/*card header*/}
        <div className="card-header">
         <div className="card-pic">
           <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
   
         </div>
         <h5>{posts.postedBy.name}</h5>
        </div>
        {/*card-image */}
        <div className="card-image">
         <img src={posts.photo} alt="" />
   
        </div>
        {/*card content*/}
        <div className="card-content">
        <span className="material-symbols-outlined">
          favorite
        </span>
        <p>12 likes</p>
        <p>{posts.body} </p>
        </div>
       {/* add comment */}
        <div className="add-comment">
        <span className="material-symbols-outlined">
          sentiment_satisfied
          </span>
        <input type="text" placeholder='Add a comment'/>
        <button className='comment'>Post</button>
        </div>
       </div>
      )
    })}
   
    </div>
  )
}

export default Home
