import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp,faBars,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import './Body.css';

function Body(props) {
  const userConnected = JSON.parse(localStorage.getItem('userConnected'));
  const [isDeconnecting,setIsDeconnecting] = useState(false)
  const handleDeconnect = () => {
    props.setConnectValide(false)
    props.setSessionValide(false)
    localStorage.setItem('connectValide', false);
    sessionStorage.setItem('connectValide', false);
  }
  return (
    <div className="body">             
        {props.componentCharged}
    </div>
  )
}

export default Body