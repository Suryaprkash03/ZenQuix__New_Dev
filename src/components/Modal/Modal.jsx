import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
