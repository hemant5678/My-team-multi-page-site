import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <div className='site-name'>
                <h1>myteam</h1>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                    <NavLink to="/aboutpage">About</NavLink>
                    </li>
                </ul>
            </div>
            <div className='header-btn'>
                <NavLink to="/contactpage"><button type='button'>Contact Us</button></NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Header;