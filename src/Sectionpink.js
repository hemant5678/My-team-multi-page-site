import React from 'react'
import "./Sectionpink.css"
import { Link } from "react-router-dom";

const Sectionpink = () => {
  return (
    <div className='section-pink'>
      <div className='content'>
        <div className='text'>
          <h1>Ready to get started?</h1>
        </div>
        <div className='section-pink-btn'>
                <Link to="/contactpage"><button type='button'>Contact Us</button></Link>
                
            </div>
      </div>
    </div>
  )
}

export default Sectionpink;