import React from 'react'
import "./Delivery.css"
import img1 from "./images/img-1.jpg"
import img2 from "./images/img-2.jpg"
import img3 from "./images/img-3.jpg"

const Delivery = () => {
  return (
    <div  className='delivery'>
        <div className='delivery-section'>
            <div className='delivery-header'>
                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
            </div>
            <div className='delivery-content'>
                <div className='delivery-row'>
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <h3>Kady Baker</h3>
                    <p><i> Product Manager at Bookmark</i></p>
                    <img src={img1}/>
                </div>
                <div className='delivery-row'>
                <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <h3>Aiysha Reese</h3>
                    <p><i>Founder of Manage </i></p>
                    <img src={img2}/>
                </div>
                <div className='delivery-row'>
                <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <h3>Arthur Clarke</h3>
                    <p><i>Co-founder of MyPhysio</i></p>
                    <img src={img3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delivery;