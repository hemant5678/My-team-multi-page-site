import React from 'react'
import "./Build.css"
import logo1 from "./images/logo-1.svg";
import logo2 from "./images/logo-2.svg";
import logo3 from "./images/logo-3.svg";

const Build = () => {
  return (
    <div className='build-section'>
        <div className='build'>
            <div className='row-1'>
                <h1>Build & manage distributed teams like no one else.</h1>
            </div>
            <div className='row-2'>
                <div className='row-2-logo'>
                    <img src={logo1}/>
                </div>
                <div className='ro-2-text'>
                    <h3>Experienced Individuals</h3><br/>
                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                </div>
                <div className='row-2-logo'>
                <img src={logo2}/>
                </div>
                <div className='ro-2-text'>
                <h3>Easy to Implement</h3><br/>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                </div>
                <div className='row-2-logo'>
                <img src={logo3}/>
                </div>
                <div className='ro-2-text'>
                <h3>Enhanced Productivity</h3><br/>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Build;