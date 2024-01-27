import React,{useState } from 'react';
import { useCart } from './cartcontext';
import { Button, Card,Row,Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { RiDeleteBin5Fill } from "react-icons/ri";
const Cart = () => {
  const { cart,clearCart, removeFromCart } = useCart();
  const subTotal = cart.reduce((total, item) => total + item.price, 0);
    const deliveryCharges = 50;
    const total = subTotal + deliveryCharges;
    const history = useHistory();
    const handleClearCart = () => {
        clearCart();
      };

      const handleCheckout = () => {
       
        history.push('/payment');
      };
      const handleRemoveFromCart = (index) => {
        removeFromCart(index);
      };
  return (
    <>
    {cart.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
            <img style={{width:'300px', height:'400px', marginTop:'-20px'}} src="https://i.imgur.com/qIufhof.png" alt="empty cart" />
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Georgia', marginBottom: '20px' }}>Your Cart is Empty</h2>
            <p style={{ fontSize: '18px', color: '#555', fontStyle: 'italic' }}>Explore our delicious pizzas and add some to your cart!</p>
        </div>
      ) : (
    <>
  <Row style={{width:'98%'}}>
  <Row className="align-items-center">
  <Col xs={6}>
    <h2 style={{ color: '#2E4053', fontSize: '24px', paddingLeft:'70px', paddingBottom: '10px', paddingTop: '20px', fontWeight: 'bold', fontFamily: 'Georgia' }} >Your Cart</h2>
  </Col>
  <Col xs={6} className="text-end">
    <h3 style={{ color: '#E74C3C', fontSize: '20px', cursor: 'pointer' }} onClick={handleClearCart}>Clear Cart</h3>
  </Col>
</Row>

      {cart.map((item, index) => (
        <Card key={index} style={{ width: '20rem', marginTop:'20px', marginLeft:'70px', marginRight:'20px' }}>
            <Card.Img variant="top" src={item.image} style={{height:'180px' , width:'319px', marginLeft:'-12px' }}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
           
           
            <Card.Text>
             <span style={{fontWeight:'bold'}}>{item.quantity}x</span>  <span style={{color:'gray'}}>{item.variant}</span>  {item.sauces.length > 0 && ` with ${item.sauces.join(', ')}`} &nbsp; <span style={{color:'#2E4053', fontWeight:'bold', float:'right'}}>Rs. {item.price}</span>
             {console.log(cart)}
            </Card.Text>
            <RiDeleteBin5Fill style={{float:'right', cursor:'pointer', color:'red' }} onClick={() => handleRemoveFromCart(index)} />
          </Card.Body>
        </Card>
      ))}
</Row>

      {cart.length > 0 && (
    <Card style={{ width: '90%', marginTop: '20px', marginLeft: '60px', marginBottom:'50px'}}>
                
                   
                    <Col style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Row>
            <h2 style={{ marginLeft: '30px' }}>Order Summary</h2>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col>
              <h6 style={{ marginLeft: '30px' }}>Subtotal</h6>
            </Col>
            <Col style={{ textAlign: 'end' }}>
              <h6>Rs. {subTotal}</h6>
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col>
              <h6 style={{ marginLeft: '30px' }}>Delivery Charges</h6>
            </Col>
            <Col style={{ textAlign: 'end' }}>
              <h6>Rs. {deliveryCharges}</h6>
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 style={{ marginLeft: '30px' }}>Total</h6>
            </Col>
            <Col style={{ textAlign: 'end' }}>
              <h6>Rs. {total}</h6>
            </Col>
          </Row>
          <Button
          style={{ background: 'red', border: 'None', float: 'right', width: '100px', marginTop:'10px', borderRadius:'20px'}} onClick={handleCheckout}
        >
          Checkout
        </Button>
        </Col>
        
            </Card>
        
        )}
  

    </>
      )}
      </>
  );
};

export default Cart;
