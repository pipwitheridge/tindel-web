import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import { React, Container } from "react-bootstrap";
import Navbar1 from "./Components/Navbar/Navbar";
import TindelHome from "./Components/TindelHome";

function App() {
  return (

    <div style={{"height" : "100%", "marginTop": "20px"}}>
      <Container>
    <TindelHome />
    </Container>
    </div>

  
  );
}

export default App;
