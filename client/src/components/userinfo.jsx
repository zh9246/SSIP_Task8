// UserInfoModal.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RxCross2 } from 'react-icons/rx';
const UserInfoModal = ({ user, onClose, onLogout }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header>
        <Modal.Title>{user.name}  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <RxCross2 style={{background:'grey' , borderRadius:'5px', transition: 'background 0.3s',cursor: 'pointer', }} onClick={onClose}/></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={user.picture} alt={user.name} />
        <p>Email: {user.email}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onLogout}>
          Logout
        </Button>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserInfoModal;
