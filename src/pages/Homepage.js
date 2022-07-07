import React from 'react'
import Body from '../components/Body.js'
import Header from '../components/Header.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'
import './styles/Homepage.css'

const Homepage = () => {
  return (
    <div>
      <Header />
      <Body />
      <Contact />
      <Footer />
      <div className="homePage"></div>
    </div>
  )
}

export default Homepage
