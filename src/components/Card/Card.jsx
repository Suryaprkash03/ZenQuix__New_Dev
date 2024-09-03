import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Card.css";

const Card = ({ heading, detail, fullDetail, color }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <div className="card" style={{ borderColor: color }}>
        <span className="heading">{heading}</span>
        <span>{detail}</span>
        <button className="c-button" onClick={handleLearnMoreClick}>
          LEARN MORE
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={fullDetail}
      />
    </>
  );
};

export default Card;
