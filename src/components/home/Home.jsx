import './Home.css'
import React, { useEffect,useState } from 'react';
import { Navbar ,Body, Dashboard,Quiz,Tip} from '../index'
function Home(props) {
  const userConnected = JSON.parse(localStorage.getItem('userConnected'));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modBackground, setModBackground] = useState(true)
 

   

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Attach the handleResize function to the 'resize' event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showNavbar , setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar((prev) => { return !prev })
  };

  const [navComponent, setNavComponent] = useState(<Dashboard showNavbar={handleShowNavbar}/>)

  const [navLineClicked,setNavLineClicked] = useState("dashboard")

    const handleClickDashboard = () => {
      setModBackground(false)
      setNavComponent(<Dashboard showNavbar={handleShowNavbar}/>)
        setNavLineClicked("dashboard")
        screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickQuiz = () => {
      setModBackground(false)
      setNavComponent(<Quiz />)
      setNavLineClicked("quiz")
      screenWidth < 1160 && setShowNavbar(false)
    };

    const handleClickTip = () => {
      setModBackground(false)
      setNavComponent(<Tip />)
      setNavLineClicked("tip")
      screenWidth < 1160 && setShowNavbar(false)
    };



  return (
    <>
      <div className="container">        
            {(screenWidth > 1160 || showNavbar) &&
            <Navbar 
            showNavbar={handleShowNavbar}
            clickDashboard={handleClickDashboard}
            clickQuiz={handleClickQuiz}
            clickTip = {handleClickTip}
            navLineClicked={navLineClicked}/>}
            {(!showNavbar || screenWidth > 450) 
           && <Body 
            componentCharged={navComponent}/>}
      </div>
    </>
  )
}

export default Home