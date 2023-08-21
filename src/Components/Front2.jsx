// import Image from "../media/img2.jpg"
import React from 'react'
import "./Front2styles.css"


function Front2(props) {
  return (
    <>
        <div className="front2">
            <div className="front2head">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    </>
  )
}

export default Front2