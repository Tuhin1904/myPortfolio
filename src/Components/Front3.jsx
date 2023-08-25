import React from 'react';
import Image3 from "../media/img3.jpg";
import "./Front3styles.css";
import Image4 from "../media/img4.jpg";
import Image5 from "../media/myFB3.jpg";

function Front3() {
return (
  <>
    <div className="front3">
      <div className="mask">
        <img className="bgImg" src={Image3} alt="backgroundImage" />
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='imgDiv'>
            <img src={Image4} alt="Developer" style={{width:'100%'}}/>
          </div>
        <div className='writing'>
            <hr/>
            <h2>Frontend Web Development </h2>
            <p>I build responsive websites which gives smooth and intuitive user experience</p>
        </div>
        </div>
        <div className='card'>
            <div className='imgDiv'>
              <img src={Image5} alt="myPic" style={{width:'100%'}}/>
            </div>  
            <div className='writing'>
              <hr/>
              <h2>Creative Photo Editing </h2>
              <p>Welcome to my world of creative photo editing! Want to try? Contact me !</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Front3 