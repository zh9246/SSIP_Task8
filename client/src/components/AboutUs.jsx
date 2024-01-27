import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import i1 from '../assets/save.png'
import i2 from '../assets/4.jpg'
import i3 from '../assets/5.jpg'
const AboutUsCard = ({ title, description, borderColor }) => {
    const cardStyle = {
        
        borderRadius: '12px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        
      };
    
      const titleStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        fontSize:'25px',
        marginBottom: '10px',
        color: 'black',
        borderBottom: `2px solid ${borderColor}`, // Add a border-bottom property
    paddingBottom: '5px',
      };
    
      const descriptionStyle = {
        fontSize: '1.1rem',
        color: '#555',
      };
  
    return (
      <div style={cardStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={descriptionStyle}>{description}</div>
      </div>
    );
  };
const AboutUs = () => {

  return (
    <>
        <Container style={{marginTop:'50px'}}>
        <h1 style={{ fontSize: '2em',color: '#EEB72F'}}>Who We are</h1>
        <p style={{fontFamily: 'Arial, sans-serif',fontSize: '1.2em',lineHeight: '1.5'}}>Welcome to SwiftSlice – Your Ultimate Pizza Delivery Experience! At SwiftSlice, we believe that great moments in life are often accompanied by delicious food. That's why we've dedicated ourselves to crafting the perfect pizza delivery experience for you. Whether you're craving a classic Margherita or an adventurous BBQ Chicken, we've got you covered with our mouthwatering selection of pizzas made with the finest ingredients.</p>
        <div>
      <h1 style={{ marginTop:'30px',color: '#EEB72F' }}>Our Speciality</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AboutUsCard
          title="Crafting Culinary Delights"

          description="At SwiftSlice, we believe in the art of pizza making. Our chefs meticulously select the finest ingredients to create mouthwatering masterpieces that tantalize your taste buds. From the crisp crust to the rich, flavorful toppings, every pizza is a testament to our dedication to quality."
          borderColor="#EEB72F"
        />

        <AboutUsCard
          title="Connecting Communities"
          description="Beyond delivering delectable pizzas, SwiftSlice is about building connections. We take pride in being part of your celebrations, family dinners, and lazy Sunday afternoons. We understand that pizza is not just food; it's a shared experience that brings people together. With SwiftSlice, you're not just ordering a pizza – you're inviting a slice of happiness into your home."
          borderColor="#EEB72F"
        />

        <AboutUsCard
          title="Innovation in Every Box"
          description="We're not just a pizza delivery service; we're pioneers of innovation. Our commitment to technology ensures that your SwiftSlice experience is seamless, from placing an order to enjoying your hot, fresh pizza. With cutting-edge features, we make pizza delivery as swift and satisfying as the first bite."
          borderColor="#EEB72F"
        />

       
      </div>
    </div>
    <h1 style={{ marginTop:'30px',color: '#EEB72F' }}>Our Team</h1>
   <div style={{display:'flex', justifyContent:'center'}}>
    
    <Card md={6} style={{  borderRadius: '12px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        }}>
        <Card.Img variant="top" src={i1} style={{width:"300px", height:'300px',paddingRight:'3px', borderRadius:'20px'}} alt="Team Member 1" />
        <Card.Body>
            <Card.Title>Zain Hassan</Card.Title>
            <Card.Text>
                Chief Executive Officer
            </Card.Text>
        </Card.Body>
    </Card>

    <Card md={6} style={{  borderRadius: '12px',
        padding: '20px',
        margin: '20px',
      
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        }}>
        <Card.Img variant="top" src={i2} style={{width:"300px", height:'300px',paddingRight:'3px', borderRadius:'20px'}} alt="Team Member 2" />
        <Card.Body>
            <Card.Title>Ali Hassan</Card.Title>
            <Card.Text>
                Chief Operating Officer
            </Card.Text>
        </Card.Body>
    </Card>

    <Card md={6} style={{  borderRadius: '12px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        }}>
        <Card.Img variant="top" src={i3} style={{width:"300px", height:'300px',paddingRight:'3px', borderRadius:'20px'}} alt="Team Member 3" />
        <Card.Body>
            <Card.Title>Abdul Hannan</Card.Title>
            <Card.Text>
                Chief Financial Officer
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  

        </Container>
    </>
  )
}

export default AboutUs
