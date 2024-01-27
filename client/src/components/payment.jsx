// payment.js
import React, {useState} from 'react';
import { Button, Card as BootstrapCard, Col, Container, Row,Modal,Form,Alert  } from 'react-bootstrap';
import { useCart } from './cartcontext';
import { HiOutlinePencil } from "react-icons/hi";
import { RxCross2 } from 'react-icons/rx';

import { useHistory } from 'react-router-dom';
const isValidPhone = (str) => /^03[1-4]\d{8}$/.test(str);


const Payment = () => {

  
  const { cart } = useCart();
  const deliveryCharges = 50;
  const subTotal = cart.reduce((total, item) => total + item.price, 0);
  const total = subTotal+deliveryCharges; // Assuming no delivery charges in this example
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [cards, setCards] = useState([]);
  const [showError, setShowError] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardholder, setCardholder] = useState('');
  const [savedCards, setSavedCards] = useState([]);
  
 
  const [selectedOption, setSelectedOption] = useState(null);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirydate: '',
    cvv: '',
    cardholder: '',
  });
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirydate: '',
    cvv: '',
    cardholder: '',
  });

  const handleSave1 = () => {
    if (address.trim() === '' || !isValidPhone(contactNumber)) {
      setShowError(true);
      return;
    }
    setCards([...cards, `${address}, Contact Number: ${contactNumber}`]);
    setAddress('');
    setContactNumber('');
    handleClose();
  };

  const [isCardSubmitted, setIsCardSubmitted] = useState(false);
  


  const [validationErrors, setValidationErrors] = useState({});

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setValidationErrors({});
  };

 

  const validateCardDetails = () => {
    const errors = {};

    // Card number validation
    if (cardDetails.cardNumber.length !== 16) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    // Expiry date validation (MM/YYYY format)
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    if (!expiryRegex.test(cardDetails.expirydate)) {
      errors.expirydate = 'Expiry date must be in MM/YYYY format';
    }

    // CVV validation (3 digits)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cardDetails.cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }

    // Cardholder name validation (only alphabets and space)
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(cardDetails.cardholder)) {
      errors.cardholder = 'Cardholder name can only contain alphabets and space';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    // Example: Validate the cardNumber field
    if (!formData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    } else if (!/^\d+$/.test(formData.cardNumber)) {
      errors.cardNumber = 'Invalid card number';
    }

    // Add more validation for other fields...

    // Update validationErrors state
    setValidationErrors(errors);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // If no errors, proceed with placing the order or other logic
      console.log('Order placed successfully:', formData);
      // Add logic to handle the order placement

      // You can clear the form data if needed
      setFormData({
        cardNumber: '',
        expirydate: '',
        cvv: '',
        cardholder: '',
      });
    }
  };

  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const history = useHistory();

  const [items, setItems] = useState(['Item 1', 'Item 2']); // Replace with the actual list of items state
  const [orderId, setOrderId] = useState(generateOrderId());
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const handlePlaceOrderClick = () => {
    setIsPlacingOrder(true);

    // Simulate a loading delay
    setTimeout(() => {
      // Navigate to the loading page
     

      // Simulate another delay for 5 seconds
      setTimeout(() => {
        // After 5 seconds, update the state to indicate the order is placed
        setIsPlacingOrder(false);

        // Navigate to the order details page
        history.push('/order-details');
      }, 5000);
    });
  };
  
  


  return (
    <Container className="mt-4">
      <h2 className="mb-4" style={{ fontSize: '28px', fontWeight: 'bold', color: '#2E4053' }}>
        Payment
      </h2>
      {cart.length > 0 && (
    <Row>
      <Row>
        <Col md={8} style={{marginBottom:'30px'}}>
          <BootstrapCard className="p-4">
            <h4 className="mb-4">Order Summary</h4>

            {cart.map((item, index) => (
              <BootstrapCard.Text key={index}>
                <span style={{ fontWeight: 'bold' }}>{item.quantity}x</span> {item.name} &nbsp;{' '}
                <span style={{ color: 'gray' }}>{item.variant} {item.sauces.length > 0 && ` with ${item.sauces.join(', ')}`}</span> &nbsp;{' '}
                <span style={{ color: '#2E4053', fontWeight: 'bold' }}>Rs. {item.price}</span>
              </BootstrapCard.Text>
            ))}

            <hr />
            <h6>Delivery Charges: <span style={{float:'right'}}>Rs. {deliveryCharges}</span></h6>
           
              
            
            <h5 style={{fontWeight:'bold'}}>Grand Total: <span style={{float:'right', color:'gray'}}>Rs. {total}</span></h5>
          </BootstrapCard>
        </Col>

        <Col md={4} >
          <BootstrapCard className="p-4">
          <BootstrapCard
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          width: '200px',
          height: '50px',
          marginBottom: '5px',
          backgroundColor: selectedOption === 'CashOnDelivery' ? '#eee' : '#fff',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        onClick={() => handleOptionClick('CashOnDelivery')}
      >
        <BootstrapCard.Body>
          <h5 style={{ marginBottom: '5px', color: '#333', textAlign: 'center', marginTop: '-5px' }}>
            Cash On Delivery
          </h5>
        </BootstrapCard.Body>
      </BootstrapCard>

      <BootstrapCard
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          width: '200px',
          height: '50px',
          marginBottom: '5px',
          backgroundColor: selectedOption === 'CreditCard' ? '#eee' : '#fff',
          transition: 'transform 0.3s ease-in-out',
          cursor: 'pointer',
        }}
        onClick={() => handleOptionClick('CreditCard')}
      >
        <BootstrapCard.Body>
          <h5 style={{ marginBottom: '5px', color: '#333', textAlign: 'center', marginTop: '-5px' }}>Credit Card</h5>
        </BootstrapCard.Body>
      </BootstrapCard>
      {selectedOption === 'CreditCard' && !isCardSubmitted && (
        <>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="cardNumber">
            <Form.Label style={{ fontWeight: 'bold' }}>Card Details</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter card number(16 digits)"
              name="cardNumber"
              onChange={(e) => setCardNumber(e.target.value)}
              isInvalid={!!validationErrors.cardNumber}
              required
            />
            <Form.Text className="text-danger">{validationErrors.cardNumber}</Form.Text>

            <Form.Control
              type="text"
              placeholder="Expiry Date (MM/YYYY)"
              name="expirydate"
              style={{ marginTop: '5px' }}
              onChange={(e) => setExpiryDate(e.target.value)}
              isInvalid={!!validationErrors.expirydate}
              required
            />
            <Form.Text className="text-danger">{validationErrors.expirydate}</Form.Text>

            <Form.Control
              type="text"
              placeholder="CVV (3 digits)"
              name="cvv"
              style={{ marginTop: '5px' }}
              onChange={(e) => setCVV(e.target.value)}
              isInvalid={!!validationErrors.cvv}
              required
            />
            <Form.Text className="text-danger">{validationErrors.cvv}</Form.Text>

            <Form.Control
              type="text"
              placeholder="Cardholder Name"
              name="cardholder"
              style={{ marginTop: '5px' }}
              onChange={(e) => setCardholder(e.target.value)}
              isInvalid={!!validationErrors.cardholder}
              required
            />
            <Form.Text className="text-danger">{validationErrors.cardholder}</Form.Text>
          </Form.Group>
        </Form>
        
       </>
      )}
   
   <Button
      type="submit"
      className={`btn ${isPlacingOrder ? 'btn-secondary' : 'btn-primary'}`}
      style={{ width: '100%', borderRadius: '20px', marginTop: '10px' }}
      onClick={handlePlaceOrderClick}
      disabled={isPlacingOrder}
    >
      {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
    </Button>
    {isPlacingOrder && (
        <div className="loader-container" style={{position: 'fixed',top: '0', left:'0', width:'100%', height:'100%', background:'rgba(0, 0, 0, 0.5)', display: 'flex',alignItems:'center', justifyContent:'center',zIndex:'1000'}}>
          <div className="loader" style={{border: '8px solid #f3f3f3', borderTop: '8px solid #3498db',borderRadius: "50%",width: '50px',height: '50px',animation: 'spin 1s linear infinite',animationName: spinKeyframes }}></div>
        </div>
      )}
            
          </BootstrapCard>
        </Col>
      </Row>
      <Row className="mt-4" style={{marginBottom:'20px'}}>
      <Col md={8}>
        <BootstrapCard className="p-4">
          <h4 className="mb-4" value={deliveryAddress} onChange={handleAddressChange}>Delivery Address <span ><HiOutlinePencil style={{float:'right', cursor:'pointer', color:'#F1C40F'}} onClick={handleShow}/></span></h4>
          <div className="mb-3">
          
          
          <ul>
            {cards.map((card, index) => (
              <li key={index}>{card}</li>
            ))}
          </ul>
          
          </div>
        </BootstrapCard>
      </Col>
      

    </Row>
    
      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Add Address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  <RxCross2 style={{background:'grey' , borderRadius:'5px', transition: 'background 0.3s',cursor: 'pointer'}} onClick={handleClose}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formAddress">
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control 
                type="text" 
                placeholder="House no. / building / Street no. / Area / City" 
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setShowError(false);
                   // Hide the error when the user starts typing
                }}
              />
             
             
            
            </Col>
            <Col>
                
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formContactNumber">
            <Form.Label column sm="2">
              Contact Number
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter your contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Col>
          </Form.Group>
          {showError && (
            <Alert
              style={{
                marginTop: '10px',
                backgroundColor: '#f8d7da',
                borderColor: '#f5c6cb',
                color: '#721c24',
              }}
              variant="danger"
            >
              Please enter a valid address and contact number
            </Alert>
          )}
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave1}>
          Save
        </Button>
      </Modal.Footer>
      </Modal>


   </Row>
       )}
      
    </Container>
  );
};


const spinKeyframes = {
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};
const generateOrderId = () => {
  return Math.floor(Math.random() * 1000000);
};

export default Payment;
