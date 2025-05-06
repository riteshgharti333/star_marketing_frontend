// ContactButtons.jsx
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./ContactButtons.scss";

const ContactButtons = () => {
  const phoneNumber = "+918209326351";
  const whatsappMessage = "Hello, I have a question about STAR MARKETING";

  return (
    <div className="contact-buttons">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        className="contact-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="icon" />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="contact-btn call-btn"
        title="Call Us"
      >
        <FaPhoneAlt className="icon" />
        <span>Call +91 8209326351</span>
      </a>
    </div>
  );
};

export default ContactButtons;
