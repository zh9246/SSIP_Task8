
import React from 'react'
import {Row, Col, Modal} from 'react-bootstrap'
const profile = () => {
    const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <Card.Img variant="top" src={pizza.image} style={{height:'180px'}}/>
                </Col>
                <Col md={6}>
                
                <p style={{marginTop:'10px'}}>{pizza.description}</p>
                </Col>

            </Row>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default profile
