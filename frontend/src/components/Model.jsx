import React from 'react';
import { AiFillCloseSquare } from "react-icons/ai";
import './Model.css';

function Model() {
  return (
    <div className="darkBg">
    <div className="centered">
 <div className='model'>
        {/* model header */}
      <div className="model-header">
        <h5 className="heading">confirm</h5>
      </div>
      <button className='close-btn'>
      <AiFillCloseSquare> </AiFillCloseSquare >
      </button>
      {/* model content */}
      <div className="model-content">
        DO you rewlly want to logout ?
      </div>
      <div className="model-actions">
        <div className="acton-container">
            <button className='logout-btn'>Log Out</button>
            <button className='cancel-btn'>cancel</button>
            </div>     
      </div>
    </div>
        
    </div>
    </div>
   
  )
}

export default Model
