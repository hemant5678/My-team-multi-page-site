import React from 'react'
import "./Client.css"
import client1 from "./images/client-1.png"
import client2 from "./images/client-2.png"
import client3 from "./images/client-3.png"
import client4 from "./images/client-4.png"
import client5 from "./images/client-5.png"

const Client = () => {
  return (
    <div className='client-section'>
        <div className='client-container'>
            <div className='client-header'>
                <h1>Some of our clients</h1>
            </div>
            <div className='client-name'>
                <div className='client'>
                    <img src={client1}/>
                </div>
                <div className='client'>
                    <img src={client2}/>
                </div>
                <div className='client'>
                    <img src={client3}/>
                </div>
                <div className='client'>
                    <img src={client4}/>
                </div>
                <div className='client'>
                    <img src={client5}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client;