import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './myLogo.png';


const Navbar1 = () => {

    return (  
        <Navbar key="md" bg="light" expand="md" className="mb-3 bg-white shadow-sm">
          <Container fluid>
            <Navbar.Brand><Link to="/home"><img src={logo} width="80" height="80" className="fluid"></img></Link></Navbar.Brand>
          </Container>
        </Navbar>
  );
}
 
export default Navbar1;