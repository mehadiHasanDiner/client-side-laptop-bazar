import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className ="container">            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand> <Link  to ="/home"> <span style={{fontSize:'25px', color:'#28a745'}}>Laptop Bazar</span> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Link className="text-light nav-link" to ="/home"> Home</Link>
                        <Link className="text-light nav-link" to ="/admin"> Admin</Link>
                        <Link className="text-light nav-link" to ="/login"> Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;