import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactDetailsModal from "./ContactDetailsModal";

const ModalB = ({
  show,
  handleClose,
  handleShowModalA,
  handleShowModalB,
  usCountriesContacts,
}) => {
  const [showContactDetailsModal, setShowContactDetailsModal] = useState(false);
  const [contactDetails, setContactDetails] = useState([]);

  const handleContactDetilasClose = () => setShowContactDetailsModal(false);
  const handleContactDetilasShow = () => setShowContactDetailsModal(true);

  const handleContactDetails = (contact) => {
    setContactDetails([contact]);
    handleContactDetilasShow();
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="d-flex gap-3">
            <button
              className="btn btn-medium btn-outline-primary"
              type="button"
              onClick={handleShowModalA}
            >
              All Contacts
            </button>
            <button
              className="btn btn-medium btn-outline-warning"
              type="button"
              onClick={handleShowModalB}
            >
              US Contacts
            </button>
          </div>
        </Modal.Header>
        {/* body data */}
        <div className="d-flex flex-col gap-3">
          <ul>
            {usCountriesContacts?.map((contact) => (
              <li
                onClick={() => {
                  handleContactDetails(contact);
                }}
                key={contact.id}
                style={{ cursor: "pointer" }}
              >
                {contact.phone}
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex justify-content-between p-3 border-top">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Only even
            </label>
          </div>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal>
      <ContactDetailsModal
        show={showContactDetailsModal}
        onclose={handleContactDetilasClose}
        contactDetails={contactDetails}
      />
    </>
  );
};

export default ModalB;
