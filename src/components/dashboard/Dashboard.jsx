import React from 'react'
import './Dashboard.css'

function Dashboard() {
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
                  <img src="./profile.png"alt="" />
                </div>
              </div>
            </div>
            <div className="motivation">
              <div className="text">Let's Save The World 🌍</div>
              <img src="" alt="" />
            </div>
        </div>
        <div className="contentBody">
            <div className="widgets">
            <div className="smallWidget">
                <img src="./Rectangle28.png" alt="" />
                <div className="statIcon">
                    <div className="widgetText">
                        <div className="title">Myth Or Fact ?</div>
                        <div className="subtitle">Daily Quiz</div>
                    </div>
                    <img src="./Icon.png" alt="" />
                </div>
            </div>
            <div className="bigWidget">
                <div>
                    <div className="title">How Much Carbone <br/>you saved ?</div>
                    <div className="subtitle">Looks Like You Did Great </div>
                    <div className="stats">36 Co2</div>
                </div>
                <div className="micBox">
                    <div className="imageBox">
                    <img src="./mic.png" alt="" />
                    </div>

                </div>
            </div>
            </div>
        </div>  
    </div>
  )
}

export default Dashboard