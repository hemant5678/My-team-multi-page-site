import React from 'react'
import "./Footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            <div className='col-1'>
            <div className='footer-site-name'>
                <h1>myteam</h1>
            </div>
            <div className='footer-menu'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        {/* <a href=''>Home</a> */}
                    </li>
                    <li>
                        <NavLink to="/aboutpage">About</NavLink>
                        {/* <a href=''>About</a> */}
                    </li>
                </ul>
            </div>
            </div>
            <div className='col-2'>
                <p>987 Hillcrest Lane<br/>Irvine, CA<br/>California 92714<br/>Call Us : 949-833-7432</p>
            </div>
            <div className='col-3'>
                <div className='social-media'>
                    <a href=''><i class="fa-brands fa-square-facebook"></i></a>
                    <a href=''><i class="fa-brands fa-pinterest"></i></a>
                    <a href=''><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className='copyright'>
                    <p>Copyright 2020. All Rights Reserved</p>
                    
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;