import { Carousel } from 'react-bootstrap'
import './styles/BodyCarousel.css'

const BodyCarousel = () => {
  return (
    <div className='imageCarousel'>
    <Carousel fade>
     <Carousel.Item>
       <img src="images/slide1.jpg" alt="Slide" /> {/*1152*600*/}
       <Carousel.Caption>
       <h1>Perfect for the start in your day!</h1>
       <p>Our new Bircher-Müsli....
vegan, no sugar, healthy</p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src="images/slide2.jpg" alt="Slide"/>
       <Carousel.Caption>
       <h1 id="diff">Our new menu is the best</h1>
       <p></p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src="images/slide3.jpg" alt="Slide"/>
       <Carousel.Caption>
       <h1 id="diff">We make it, so you can take it</h1>
       <p id="diff"> Our new fruity ethiopian espresso  is available, now.</p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src="images/slide4.jpg" alt="Slide"/>
       <Carousel.Caption>
       <h1> Sourdough bread from the artisan bakery </h1>
       <p> homemade hummus (vegan) topped with fresh cress </p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src="images/slide5.jpg" alt="Slide"/>
       <Carousel.Caption>
       <h1 id='diff'> Every 10th Coffee is free! </h1>
       <p id='diff'> Grab your Golden Ticket for free Coffee! </p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src="images/slide6.jpg" alt="Slide"/>
       <Carousel.Caption>
       <h1> We always have the perfect combinations</h1>
       <p> Juicy carrotcake with cappuccino </p>
     </Carousel.Caption>
     </Carousel.Item>

     </Carousel>
    </div>
  )
}

export default BodyCarousel
