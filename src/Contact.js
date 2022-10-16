import React from 'react'
import "./Contact.css"
import logo1 from "./images/logo-1.svg"
import logo2 from "./images/logo-2.svg"
import logo3 from "./images/logo-3.svg"


const Contact = () => {
  return (
    <div className='contact-section'>
        <div className='contact-container'>
            <div className='contact-text'>
                <h1>Contact</h1>
                <h2>Ask us about</h2>
                <div className='contact-content'>
                    <div className='contents'>
                        <div className='content-image'>
                            <img src={logo1}/>
                        </div>
                        <div className='content-text'>
                            <p>The quality of our talent network</p>
                        </div>
                    </div>
                    <div className='contents'>
                        <div className='content-image'>
                            <img src={logo2}/>
                        </div>
                        <div className='content-text'>
                            <p>Usage & implementation of our software</p>
                        </div>
                    </div>
                    <div className='contents'>
                        <div className='content-image'>
                            <img src={logo3}/>
                        </div>
                        <div className='content-text'>
                            <p>How we help drive innovation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-form'>
                <form>
                    <input type="name" placeholder='Name' required/>
                    <input type="email" placeholder='Email Address' required/>
                    <input type="name" placeholder='Company Name' required/>
                    <input type="text" placeholder='Title' required/>
                    <textarea rows="3" placeholder='Message' required/><br/>
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;