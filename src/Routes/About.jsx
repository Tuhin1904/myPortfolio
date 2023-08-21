import React from 'react'

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Front2  from '../Components/Front2'
import Aboutcontent from '../Components/Aboutcontent'

function About() {
  return (
    <>
      <Navbar/>
      <Front2 heading="Hello, I'm Tuhin Ghosh." text="I make websites/SPA what load fast and are responsive"/>
      <Aboutcontent/>
      <Footer/>
    </>
  )
}

export default About