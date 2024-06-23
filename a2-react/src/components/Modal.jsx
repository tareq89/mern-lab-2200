import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className="modal"
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
