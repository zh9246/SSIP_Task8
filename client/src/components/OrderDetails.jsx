import React, { useState, useEffect } from 'react';
import logo from '../assets/del.png'
const OrderDetails = () => {
  const [orderId, setOrderId] = useState('');
  const [timeLeft, setTimeLeft] = useState(1800); // Initial time in seconds (5 minutes)

  useEffect(() => {
    // Generate a random order ID (replace this with your actual logic)
    const generatedOrderId = generateOrderId();
    setOrderId(generatedOrderId);

    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(prevTimeLeft => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Helper function to generate a random order ID
  const generateOrderId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  // Helper function to convert seconds to minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8' }}>
      <div>
        {/* Include your pizza delivery logo here */}
        <img
          src={logo}
          alt="Pizza Delivery Logo"
          style={{ width: '100px', marginBottom: '20px', width:'300px', height:'300px', borderRadius:'30px' }}
        />
      </div>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Order Placed Successfully</h2>
      <p style={{ fontSize: '18px', color: '#555' }}>Order ID: {orderId}</p>
      <p style={{ fontSize: '16px', color: '#555' }}>Estimated Time Left: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default OrderDetails;
