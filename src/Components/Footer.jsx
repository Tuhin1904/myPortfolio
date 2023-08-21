import "./Footerstyles.css"
import React from 'react'
import {FaPhone,FaRegEnvelope,FaMapMarker,FaFacebookSquare,FaLinkedin,FaInstagram} from 'react-icons/fa'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
        <div className="footer">
          <div className="footercontainer">
            <div className="leftF" style={{margin:'10px 10px'}}>
              <div style ={{display:'flex',margin:'10px 4px'}}>
                <FaPhone size={20} style={{color:'#ffffcc',margin:'0 7px'}}/>
                <div style={{color:'#ffffcc'}}>+91 9593722516</div>
              </div>
              <div style ={{display:'flex',margin:'10px 4px'}}>
                <FaRegEnvelope size={20} style={{color:'#ffffcc',margin:'0 7px'}}/>
                <div style={{color:'#ffffcc'}}><h4>iamtuhinn@gmail.com</h4> </div>
              </div>
              <div style ={{display:'flex',margin:'10px 4px'}}>
                <FaMapMarker size={20} style={{color:'#ffffcc',margin:'0 7px'}}/>
                <div style={{color:'#ffffcc'}}><p>38 Bhaduri BariLane,</p><p>Krishnanagar(WB), Pin-741101</p></div>
              </div>
            </div>
            <div className="rightF" style={{margin:'1rem 30px',display:'flex',alignItems:'center',flexDirection:'column'}}>
              <div>
              <p style={{color:'#ffffcc'}}>This website is developed By Tuhin</p>
              
              </div>
              <div style={{margin:'10px 0'}}>
              <Link to="https://www.linkedin.com/in/tuhin-ghosh-4408031a5"><FaLinkedin size={20} style={{color:'#ffffcc',margin:'0 7px'}}/></Link>
              <Link to="https://www.facebook.com/myselftuhinghosh/"><FaFacebookSquare size={20} style={{color:'#ffffcc',margin:'0 7px'}}/></Link>
              <Link to="https://www.instagram.com/tuhingh19/"><FaInstagram size={20} style={{color:'#ffffcc',margin:'0 7px'}}/></Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer