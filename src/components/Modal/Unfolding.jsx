import React, { useState } from "react";
import "./Unfolding.css"; // Import the CSS for the modal

const UnfoldingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="content">
        <h1>Modal Animations</h1>
        <div className="buttons">
          <div onClick={openModal} className="button">
            Unfolding
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="modal-container" className={isOpen ? "one" : "one out"}>
          <div className="modal-background">
            <div className="modal">
              <h2>I'm a Modal</h2>
              <p>Hear me roar.</p>
              <svg
                className="modal-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="226"
                  height="162"
                  rx="3"
                  ry="3"
                ></rect>
              </svg>
              <button onClick={closeModal} className="close-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnfoldingModal;
