import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap';
import "firebase/auth";
import firebase from "firebase/app";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import profilePic from '../../Components/images/Person.png'



const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);    

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setLoggedInUser(signedOutUser);
                console.log(res);
            })
            .catch(error => {

            })
    }

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
                        <Link className="text-light nav-link" to ="/orderPreviewPass"> Order</Link>
                        <Link className="text-light nav-link" to ="/login" onClick={handleSignOut}> {loggedInUser.email?'Logout':'Login'} </Link>
                        <Link className="text-light nav-link" to ="#"> {loggedInUser.photo ? <img style ={{borderRadius:'50%', height:'32px', width:'32px'}} src={loggedInUser.photo} alt=""/> :  <img style ={{borderRadius:'50%', height:'32px', width:'32px'}} src={profilePic} alt=""/>} </Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;