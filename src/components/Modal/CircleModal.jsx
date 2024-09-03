import React from "react";
import "./CircleModal.css";

const CircleModal = ({ isOpen, onClose, content }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay1">
          <div className="modal-circle1">
            <span className="close-button1" onClick={onClose}>
              &times;
            </span>
            <div className="modal-body1">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CircleModal;
