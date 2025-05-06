import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import "./OfferComp.scss";

const OfferComp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formAction = "https://formsubmit.co/starmarketingwing@gmail.com";

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("_subject", "New Offer Submission");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Thank you! Your request has been sent");
        setFormData({
          email: "",
          phone: "",
        });
        handleClose();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
        toast.error("Network error occurred! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="offer-popup">
      <div className="popup-box">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <h2>🎉 Get an Exclusive Offer!</h2>
        <p>
          Unlock up to <strong>30% OFF</strong> on our Design, Development & Marketing services!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Claim Your Offer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfferComp;
