import React,{useState, useEffect,useRef} from 'react'
import { Navbar,Nav,Container,Row ,Modal,Button , Form} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {MdLocalOffer} from "react-icons/md"
import { IoMdCart } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import mainlogo from '../assets/logo.png'
import { RxCross2 } from "react-icons/rx";
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import UserInfoModal from './userinfo';
import { login, logout, isAuthenticated } from './auth'; 
function TopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  };

  const handleTextClick = () => {
    history.push('/');
  };

 

  const { user,setUser,loginWithRedirect,isAuthenticated,logout } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  




  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  // useEffect(() => {
  //   // Check if the user is authenticated on component mount
  //   if (isAuthenticated()) {
  //     const storedUser = JSON.parse(localStorage.getItem('user'));
  //     setUser(storedUser);
  //   }
  // }, []);

 
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" style={{position: 'sticky', top: '0', width: '100%', zIndex: '100'}}>
        <Container fluid >
          
          {/* <Row style={{color:'white', display:'flex'}}>
            <h2>Hello</h2>
            <h5>there</h5>
          </Row> */}
          
          <img style={{width:'50px', height:'60px', cursor:'pointer', marginLeft:'10px'}} src={mainlogo} alt='' onClick={handleLogoClick}/>  &nbsp; &nbsp; 
          <Row className='text-light' style={{marginTop:'10px', cursor:'pointer'}}>
            <h6 style={{ fontWeight:'bold', fontSize:'20px', color:'#EEB72F'}} onClick={handleTextClick}>SwiftSlice</h6></Row>

            <Nav className="ms-auto" >
              <LinkContainer to="/" activeClassName>
                <Nav.Link></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" activeClassName>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact" activeClassName>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <Nav.Link>
              {isAuthenticated ? (
        <div className="user-profile-container">
          <div className="profile-icon" onClick={toggleModal}>
            {/* Your icon component (replace with your preferred icon) */}
            {user.name}
          </div>
        </div>
      ) : (
        <div className="profile-icon" onClick={loginWithRedirect}>
          {/* Display profile logo if not authenticated */}
          <CgProfile />
        </div>
      )}

      {/* Render the modal if it's open */}
      {isModalOpen && user && (
        <UserInfoModal user={user} onClose={toggleModal} onLogout={logout} />
      )}
</Nav.Link>

              <LinkContainer to="/cart" activeClassName>
                <Nav.Link><IoMdCart/></Nav.Link>
              </LinkContainer>
              
            </Nav>
          
        </Container>

      </Navbar>
      {/* <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" >
            Login
          </Button>
        </Form>
        <div className="mt-3">
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            Continue with: {' '}
            <Button variant="outline-primary" className="mr-2">
              Google
            </Button>
            <Button variant="outline-primary">Facebook</Button>
          </p>
        </div>
      </Modal.Body>
    </Modal> */}
      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{backdropFilter:'blur(5px)', height:'500px' }}
        centered
        
      >
        <Modal.Header>
          <Row>
          <Modal.Title>Enter your mobile number &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;    <RxCross2 style={{background:'grey' , borderRadius:'5px', transition: 'background 0.3s',cursor: 'pointer'}} onClick={handleClose}/></Modal.Title>
          
          </Row>
        </Modal.Header>
        <Modal.Body>
    <div class="flex items-center mb-4">
        <div class="inline-flex items-center bg-gray-100 country-code">
            <span class="fas fa-globe text-green-500 px-2"></span>
            <select class="input-field bg-transparent focus:outline-none">
                <option>+92</option>
            </select>
        </div>
        <input type="text" class="flex-1 input-field ml-2" placeholder="Mobile number"/>
    </div>
    <div class="flex items-center mb-4">
        <input type="email" class="flex-1 input-field" placeholder="Email"/>
    </div>
    <div class="flex items-center mb-4">
        <input type="password" class="flex-1 input-field" placeholder="Password"/>
    </div>
    <div class="mb-8 text-xs ">
        This site is protected by reCAPTCHA and the Google &nbsp;
        <a href="#" class="text-blue-500">Privacy Policy </a> and &nbsp;
        <a href="#" class="text-blue-500">Terms of Service</a> apply.
    </div>
    <div class="text-sm text-center">
        Don't have an account? <a href="#" class="text-blue-500">Sign Up</a>
    </div>
</Modal.Body>

        <Modal.Footer>
        <button class="w-full rounded py-2 mb-4 btn-red" style={{backgroundColor:'red',  color:'white', border:'none'}}>Login</button>
        
        </Modal.Footer>
      </Modal> */}

    </>
  )
}

export default TopBar

