import React from 'react'
import './Profile.css'


function Profile() {
  return (
    <div className='profile'>
      {/* Profile Fram */}
      <div className="profile-frame">
        {/* profile pic */}
        <div className="profile-pic">
          <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        </div>
        {/* profile data */}
        <div className="profile-data">
          <h1>Sara Marthande</h1>
          <div className="profile-info" style={{display:"flex"}}>
            <p>6 <br/>posts</p>
            <p>40 <br /> Followers</p>
            <p>45 <br /> Following</p>
          </div>
        </div>
      </div>
<hr style={{width:"100%", margin:"25px auto", opacity:"0.8"}}/>
      {/* gallery */}
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />
        <img src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?w=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uJTIwc3F1YXJlJTIwaW1nfGVufDB8fDB8fHww" alt="" />

      </div>
    </div>
  )
}

export default Profile
