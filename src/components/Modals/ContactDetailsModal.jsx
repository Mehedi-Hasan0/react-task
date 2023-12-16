import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

const ContactDetailsModal = ({ show, onclose, contactDetails }) => {
  console.log(contactDetails);
  return (
    <>
      <Modal show={show} onHide={onclose}>
        <Modal.Body>
          <h4>Country Name</h4>
          <ul className="d-flex flex-col gap-3">
            {contactDetails?.map((contact) => (
              <li key={contact.id}>{contact.country.name}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onclose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactDetailsModal;
