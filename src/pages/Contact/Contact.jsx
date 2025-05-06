import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "./Contact.scss";
import SEO from "../../components/SEO/SEO";

const Contact = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    contact: "",
    projectType: "",
    details: "",
    budget: "",
    hearFrom: "",
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast.error("Please accept the privacy policy to continue.");
      return;
    }

    setLoading(true);
    const formAction = "https://formsubmit.co/starmarketingwing@gmail.com";

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("_subject", "New Contact Form Submission");
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          businessName: "",
          email: "",
          contact: "",
          projectType: "",
          details: "",
          budget: "",
          hearFrom: "",
          privacyAccepted: false,
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <SEO
        title="Contact Us | Star Marketing - India & UK Digital Marketing Agency"
        description="Get in touch with Star Marketing for SEO, branding, web development, social media marketing, and more. Reach out to our teams in India or the UK today!"
        keywords="contact Star marketing, seo agency contact, digital marketing help, talk to experts, marketing agency India, UK marketing contact, web design consultation"
        url={fullUrl}
      />

      <div className="contact-top">
        <div className="contact-top-left">
          <div className="contact-top-left-top">
            <h2>Want to discuss a project?</h2>
            <p>
              Tell us a little about your project and one of our team will be in
              touch with you as soon as possible.
            </p>
          </div>

          <div className="contact-top-left-items">
            <div className="contact-top-left-item">
              <p>General Enquiries</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>
            <div className="contact-top-left-item">
              <p>Support Enquiries</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>
            <div className="contact-top-left-item">
              <p>Interested in joining the team?</p>
              <p>Hr@wingstarnarketing.com</p>
            </div>
          </div>

          <div className="contact-social">
            <span>
              <a
                href="https://www.linkedin.com/company/star-marketings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/star_marketings?igsh=aG5mem9tcWVudXR4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/share/1EVxbiNFbH/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>

        <div className="contact-top-right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="0123456789"
                required
              />
            </div>

            <div className="form-group">
              <label>Type of Project *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Web Application">Web Application</option>
                <option value="Software Application">
                  Software Application
                </option>
                <option value="Full Stack Application">
                  Full Stack Application
                </option>
                <option value="App Application">App Application</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tell us about your project *</label>
              <p className="tell-p">
                Please include any details you feel would be beneficial for us
                to know, including scope, timelines, budget, any integrations,
                etc.
              </p>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Please detail your requirements here..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>How much is your budget? *</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                How did you hear about us?{" "}
                <span className="optional">(Optional)</span>
              </label>
              <select
                name="hearFrom"
                value={formData.hearFrom}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="privacy">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              <div className="privacy-top">
                <p>
                  In order to submit your details to us, please provide consent
                  to the terms of our{" "}
                  <span>
                    <Link to="/privacy-policy">privacy policy</Link>
                  </span>
                  .
                </p>
                <p>
                  This provides all the information regarding data protection
                  and Star Marketing, and may be updated from time to time, so
                  please check this regularly for updates.
                </p>
              </div>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Details"}
            </button>
          </form>
        </div>
      </div>

      <div className="contact-bottom">
        <h2>Find Us</h2>
        <div className="contact-bottom-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.79089995395!2d75.1301399!3d27.630992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca576786a6641%3A0x450f964f532a504d!2sStar%20marketing!5e0!3m2!1sen!2sin!4v1744467099740!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
