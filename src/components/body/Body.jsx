import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faChevronUp,faBars,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import './Body.css';

function Body(props) {
  return (
    <div className="body">             
        {props.componentCharged}
    </div>
  )
}

export default Body