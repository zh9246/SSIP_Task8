import React from 'react'
import {Container,Row,Col,Table } from "react-bootstrap"
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
import {FaAddressCard} from "react-icons/fa"
const Contact = () => {
  return (
    <>
      <Container style={{marginTop:'50px'}}>
        <Row>
          <Col md={6} style={{marginLeft:'30px'}}>
          <h1>Contact Us</h1>
          <p>Have a craving for delicious pizza? Need assistance with your SwiftSlice Pizza Delivery order? We're here to help! Reach out to our dedicated support team for any inquiries, feedback, or assistance you may need. Our pizza experts are available 24/7 to ensure your SwiftSlice experience is nothing short of amazing.</p>

            <Table striped bordered hover variant="dark" style={{marginTop:'30px'}}>
                <tbody>
                    <tr>
                    <td><FaAddressCard/></td>
                    <td>Address</td>
                    <td>154, Main Boulevard Gulberg 3,Lahore</td>
                    </tr>
                    <tr>
                    <td><FiPhoneCall/></td>
                    <td>Phone</td>
                    <td>+92 336 0634874</td>
                    </tr>
                    <tr>
                    <td><AiOutlineMail/></td>
                    <td>Email</td>
                    <td>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZBSmmhcsvfRTmZGFdBbpbbDwQQFzwlTChCVlRPdPfWjsLDFGXsglkFRnfQqpFvSFMMSWW" target="_blank">zhassan9246@gmail.com</a>
                    </td>
                    </tr>
                </tbody>
            </Table>
            </Col>
            <Col>
             <img src="images/farmhouse.jpg" width="500" height="270" style={{borderRadius:'10px', marginTop:'60px'}} />
            </Col>
            {/* <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.967497401356!2d77.59369131440613!3d12.9715988908801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x3bae167f6c9f5d9b%3A0x4d9a9f2d2a8b1f3e!2sWeb%20Development%20Course%20Training%20in%20Bangalore%20-%20Infocampus!5e0!3m2!1sen!2sin!4v162
            3419296832!5m2!1sen!2sin" width="450" height="350" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      

            </Col> &nbsp; */}
           
           
        </Row>
        {/* <Col md={6}>
            <img src="images/farmhouse.jpg" width="500" height="350" />
        </Col> */}
            {/* <Col md={9} style={{marginTop:'50px', marginLeft:'135px'}}>
                <form className="contact-form">
                    <input type="text" placeholder="Enter your name" className="form-control" required />
                    <br />
                    <input type="text" placeholder="Enter your email" className="form-control" required />
                    <br />
                    <input type="text" placeholder="Enter your phone" className="form-control" required />
                    <br />
                    <textarea placeholder="Message" className="form-control" required></textarea>
                    <br />
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </Col> */}
      </Container>
    </>
  )
}

export default Contact
