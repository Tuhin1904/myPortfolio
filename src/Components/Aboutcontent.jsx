import "./Aboutcontentstyles.css"
import Image1 from "../media/img7.jpg";

import React from 'react'

function Aboutcontent() {
  return (
    <>
       <div className="frontabout">
      <div className="mask6">
        <img className="bgImg" src={Image1} alt="backgroundImage" />
      </div>
      <div className="contentabout">
      <div className='card'>
        <div className='education'>
            <hr/>
            <h2>Graduation(B.Sc) Computer Science</h2>
            <hr/>
            <p>I completed my Bachelor's degree in Computer Science from Barrackpore Rastraguru Surendranath College</p>
        </div>
      </div>
      <div className='card'>
        <div className='education'>
            <hr/>
            <h2>Post-Graduation(M.Sc) Computer Science</h2>
            <hr/>
            <p>I am set to complete my Master's degree in Computer Science from West Bengal State University in Sep 2023.</p>
        </div>
      </div>

      </div>
      </div>
   


    </>

  )
}

export default Aboutcontent