import React from 'react'
import "./Expert.css"
import exp1 from "./images/expert-1.png"
import exp2 from "./images/expert-2.png"
import exp3 from "./images/expert-3.png"
import exp4 from "./images/expert-4.png"
import exp5 from "./images/expert-5.png"
import exp6 from "./images/expert-6.png"

const Expert = () => {
  return (
    <div className='expert-section'>
        <div className='expert'>
            <div className='expert-header'>
                <h1>Meet the experts</h1>
            </div>
            <div className='expert-container'>
                <div className='expert-card'>
                    <div className='exp-image'>
                        <img src={exp2}/>
                        <h3>Sarah Barrett</h3>
                        <p><i> Founder</i></p>
                    </div>
                </div>
                <div className='expert-card'>
                <div className='exp-image'>
                        <img src={exp1}/>
                        <h3>Mike Holmes </h3>
                        <p><i>Senior Partner</i></p>
                    </div>
                </div>
                <div className='expert-card'>
                <div className='exp-image'>
                        <img src={exp3}/>
                        <h3>Teresa Perkins</h3>
                        <p><i>Senior Partner</i></p>
                    </div>
                </div>
                <div className='expert-card'>
                <div className='exp-image'>
                        <img src={exp4}/>
                        <h3>Samuel Johnson</h3>
                        <p><i>Lawyer</i></p>
                    </div>
                </div>
                <div className='expert-card'>
                <div className='exp-image'>
                        <img src={exp5}/>
                        <h3>Ellen Moore</h3>
                        <p><i>Lawyer</i></p>
                    </div>
                </div>
                <div className='expert-card'>
                    <div className='exp-image'>
                        <img src={exp6}/>
                        <h3>Austin Harper</h3>
                        <p><i>Lawyer</i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expert;