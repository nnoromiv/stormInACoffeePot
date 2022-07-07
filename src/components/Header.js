import './styles/Header.css'
import {IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDirections } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <img src="images/stormLogo.jpg" alt="Logo" srcSet="" />
      </div>
      <div className="getDirections">
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Storm+in+a+Coffeepot,+Ehrengutstra%C3%9Fe+18,+80469+M%C3%BCnchen,+Germany/@48.1210957,11.5607772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479e75eb67b769a7:0x75bed7038a1fa3ca!2m2!1d11.560745!2d48.1211048">
      <IconButton>
        <FontAwesomeIcon  icon={faDirections} className='faDirections' color="brown" size='sm' style={{ margin: ' 0 10px 0 0'}}/>
      </IconButton>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/dir//Storm+in+a+Coffeepot,+Ehrengutstra%C3%9Fe+18,+80469+M%C3%BCnchen,+Germany/@48.1210957,11.5607772,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479e75eb67b769a7:0x75bed7038a1fa3ca!2m2!1d11.560745!2d48.1211048">
      <h5>Get Directions</h5>
      </a>
      </div>
    </div>
  )
}

export default Header
