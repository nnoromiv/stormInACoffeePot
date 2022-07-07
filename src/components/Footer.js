import {Button}  from 'react-bootstrap'
import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <div>
    <div className='addTime'>
    <div className="address">
        <h4> Address</h4>
        <Button variant='secondary' size='lg' target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Storm+in+a+Coffeepot,+Ehrengutstra%C3%9Fe+18,+80469+M%C3%BCnchen,+Germany/@48.1210957,11.5607772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479e75eb67b769a7:0x75bed7038a1fa3ca!2m2!1d11.560745!2d48.1211048">
        GET STARTED</Button>
        <p id="addressNum">
        Storm in a Coffeepot,<br /> Ehrengutstraße 18, 80469 München, <br /> Germany
        </p>
    </div>   
    <div className="time">
    <h4> Business Hours</h4>
    <p id='biz'>Mon:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Tue:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Wed:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Thu:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Fri:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Sat:	9:00 AM – 5:00 PM</p>
    <p id='biz'>Sun:	CLOSED</p>
    </div> 
    </div>
    <hr className="lineFooter" />
     <div className="logoH">
     <div className="logo">
        <img src="images/stormLogo.jpg" alt="Logo" srcSet="" />
      </div>
      <h5> 2022© Copyright</h5>
     </div>
    </div>
   
  )
}

export default Footer
