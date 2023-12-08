import './Home.css'
import React, { useEffect,useState } from 'react';
import { Navbar ,Body, Dashboard} from '../index'
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

  const [navComponent, setNavComponent] = useState(<Dashboard />)

  const [navLineClicked,setNavLineClicked] = useState("dashboard")

    const handleClickDashboard = () => {
      setModBackground(false)
      setNavComponent(<Dashboard />)
        setNavLineClicked("dashboard")
        screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickHistorique = () => {
      setModBackground(false)
      // setNavComponent(<Historique />)
      setNavLineClicked("historique")
      screenWidth < 1160 && setShowNavbar(false)
    };



    const handleClickHome = () => {
      setModBackground(true)
      setNavLineClicked("home")
      // setNavComponent(<Accueil />)
      screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickProfile = () => {
      setModBackground(false)
      // setNavComponent(<ProfilePage />)
      setNavLineClicked("profile")
      screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickRanking = () => {
      setModBackground(true)
      // setNavComponent(<Ranking/>)
      setNavLineClicked("ranking")
      screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickSections = () => {
      setModBackground(true)
      // setNavComponent(<GestionSections />)
      setNavLineClicked("sections")
      screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickSources = () => {
      setModBackground(true)
      // setNavComponent(<GestionSources />)
      setNavLineClicked("sources")
      screenWidth < 1160 && setShowNavbar(false)
    };
    const handleClickDocuments = () => {
      setModBackground(true)
      // setNavComponent(<GestionDocuments />)
      setNavLineClicked("documents")
      screenWidth < 1160 && setShowNavbar(false)
    };



  return (
    <>
      <div className="container">        
            {(screenWidth > 1160 || showNavbar) &&
            <Navbar 
            showNavbar={handleShowNavbar}
            clickDashboard={handleClickDashboard}
            clickHome={handleClickHome}
            clickHistorique={handleClickHistorique}
            clickRanking={handleClickRanking}
            clickSections={handleClickSections}
            clickSources={handleClickSources}
            clickDocuments={handleClickDocuments}
            navLineClicked={navLineClicked}/>}
            {(!showNavbar || screenWidth > 450) 
           && <Body 
            showNavbar={handleShowNavbar}
            screenWidth={screenWidth}
            clickProfile={handleClickProfile}
            setConnectValide={props.setConnectValide}
            setSessionValide={props.setSessionValide}
            componentCharged={navComponent}/>}
      </div>
    </>
  )
}

export default Home