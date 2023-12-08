import React from 'react'
import Tip from '../tip/tip';

function Dashboard() {
  const alertes = JSON.parse(localStorage.getItem('alertes')) || [];
  return (
    <div>
        <div className="headBody">
            {/* {props.screenWidth < 1160 && <FontAwesomeIcon icon={faBars} onClick={props.showNavbar} className='barIcon'/>} */}
            <div className="headBar">
              <div className="title">Explore Our Daily Quiz</div>
              <div className="iconsBar">
                <img src="./bell.png" alt="" />
                <img src="./Setting.png" alt="" />
                <div className="rounded-image">
                  <img src="./profile.png" alt="" />
                </div>
              </div>
            </div>
            <div className="motivation">
              <div className="text">Let's Save The World 🌍</div>
              <img src="" alt="" />
            </div>
        </div>
        <div className="contentBody">
            <div className="accueilBox smallBox">
                <div className="stat">
                    <div className="chiffres">{alertes.length}</div>
                    <div className="type">Alertes</div>
                </div>
                <div className="statIcon"><img src="./alerteIcon.png" alt="" /></div>
            </div>
        </div>  
        <Tip/>
    </div>
  )
}

export default Dashboard