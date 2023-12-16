import React, { useEffect, useState } from "react";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const [allCountriesContacts, setAllCountriesContacts] = useState([]);
  const [usCountriesContacts, setUsCountriesContacts] = useState([]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleCloseModalA = () => setShowModalA(false);
  const handleShowModalA = () => {
    if (showModalB) {
      setShowModalB(!showModalB);
    }

    setShowModalA(true);
    navigate(`${pathname}?all-contact-modal_a`);
  };

  const handleCloseModalB = () => setShowModalB(false);
  const handleShowModalB = () => {
    if (showModalA) {
      setShowModalA(!showModalA);
    }

    setShowModalB(true);
    navigate(`${pathname}?us-contact-modal_b`);
  };

  useEffect(() => {
    try {
      (async () => {
        // all contacts GET data
        const allContactsResponse = await axios.get(
          "https://contact.mediusware.com/api/contacts/"
        );
        if (allContactsResponse.status === 200) {
          setAllCountriesContacts([...allContactsResponse.data.results]);
        } else {
          console.log("Couldn't get data from api");
        }

        // us contacts GET data
        const usContactsResponse = await axios.get(
          "https://contact.mediusware.com/api/country-contacts/United%20States/"
        );

        if (usContactsResponse.status === 200) {
          setUsCountriesContacts([...usContactsResponse.data.results]);
        } else {
          console.log("Couldn't get data from api");
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center align-items-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={handleShowModalA}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={handleShowModalB}
            >
              US Contacts
            </button>
          </div>
        </div>
        <ModalA
          show={showModalA}
          handleClose={handleCloseModalA}
          handleShowModalA={handleShowModalA}
          handleShowModalB={handleShowModalB}
          allCountriesContacts={allCountriesContacts}
        />
        <ModalB
          show={showModalB}
          handleClose={handleCloseModalB}
          handleShowModalA={handleShowModalA}
          handleShowModalB={handleShowModalB}
          usCountriesContacts={usCountriesContacts}
        />
      </div>
    </>
  );
};

export default Problem2;
