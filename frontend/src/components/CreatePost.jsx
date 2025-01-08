import React,{useState, useEffect} from 'react';
import './CreatePost.css';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Createpost() {
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
const navigate = useNavigate()

  //toast functions
  const notifyA = (msg)=> toast.error(msg)
  const notifyB = (msg)=> toast.success(msg)

  useEffect(() =>{
if(url){
//saving post to monogoDB
fetch("https://nomad-nexus.onrender.com/createPost",{
  method:"post",
  headers:{
    "Content-type":"application/json",
    "Authorization":"Bearer "+ localStorage.getItem("jwt")
        },
  body:JSON.stringify({
    body,
    pic:url
  })
}).then(res => res.json())
.then(data => {if(data.error){
  notifyA(data.error)
}else{
  notifyB("Post created successfully")
  navigate("/")
}
})
.catch(err => console.log(err))
}
    
  },[url])

  //posting image to cloudinary
  const postDetails = ()=>{
    console.log(body, image)
    const data = new FormData();
    data.append("file",image)
    //defining on which preset of cloudinary to upload the file
    data.append("upload_preset", "nomad-nexus")
    data.append("cloud_name", "vedantwankhede")
    //creating API for post upload.
    fetch("https://api.cloudinary.com/v1_1/vedantwankhede/image/upload",
    {
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data => setUrl(data.url))
    .catch(err => console.log(err))

  }
    const loadfile = (event)=>{
       
            var output = document.getElementById('output');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
              URL.revokeObjectURL(output.src) // free memory
    }
};
  return (
    <div className='createPost'>
        {/* header */}
      <div className="post-header">
        <h4 style={{margin:'3px auto'}}>Create New Post</h4>
        <button id='post-btn' onClick={()=>{postDetails()}}>Share</button>
      </div>
      {/* post content */}
      <div className="main-div">
        <img id='output' src='https://i.fbcd.co/products/resized/resized-360-240/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.webp'/>
        <input type="file" accept="image/*" onChange={(event)=>{loadfile(event);
          setImage(event.target.files[0])//[0] helps in returing the first index of the array.
        }}/>
      </div>
    {/* details */}
    <div className="details">
        <div className="card-header">
            <div className="card-pic">
                <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=40&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
            
            </div>
            <h5>Sara Marthande</h5>
        </div>
        <textarea value={body} onChange={(e)=>{
          setBody(e.target.value)
        }} type='text' placeholder="Share your Expereince"></textarea>
    </div>
    </div>
  )
}

export default Createpost
