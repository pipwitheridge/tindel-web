import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import { React, Container } from "react-bootstrap";
import Navbar1 from "./Components/Navbar/Navbar";
import TindelHome from "./Components/TindelHome";
import ReactGA from "react-ga4";


function App() {

  // GA Tracking setup OLD
  /* 
  const TRACKING_ID = "G-7XD03E57PD"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    useGATracker();
  }, []); */

  // GA New

  ReactGA.initialize("G-7XD03E57PD");
  ReactGA.send({ hitType: "pageview", page: "/tindel-web", title: "Tindel" });


  return (

    <div style={{"height" : "100%", "marginTop": "20px"}}>
    <Container>
    <TindelHome />
    </Container>
    </div>

  
  );
}

export default App;
