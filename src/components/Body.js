
import BodyCarousel from './BodyCarousel'
import  './styles/Body.css'

const Body = () => {
  return (
    <div>
      <div className="bodyTitle">
        <h1> Storm in a Coffeepot </h1>
        <p> Cafe in Munich </p>
        <p> Open today until 7:00 PM</p>
      </div>
      <BodyCarousel />
    </div>
  )
}

export default Body
