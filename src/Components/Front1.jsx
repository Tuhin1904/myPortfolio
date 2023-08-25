import React from 'react';
import "./Frontstyles.css";
import Image1 from "../media/img6.jpg";
import { Link } from 'react-router-dom';

function Front1() {
  return (
  <>
    <div className="front1">
      <div className="mask">
        <img className="bgImg" src={Image1} alt="backgroundImage" />
      </div>
      <div className="content">
        <p>Hello I'm Tuhin, I'm a website developer</p>
        <h1>I use ReactJS</h1>
        <div className='bigButton'>
          <Link to="https://github.com/Tuhin1904" className="btn"><button>Github</button></Link>
          <Link to="/contact" className="btn"><button>Contact</button></Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Front1 