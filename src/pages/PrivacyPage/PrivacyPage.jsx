import React from "react";
import "./PrivacyPage.scss";

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1>
            STAR MARKETING <span>Privacy Policy</span>
          </h1>
          <p className="last-updated">Last Updated: 12/04/2025</p>
        </div>

        <div className="privacy-content">
          {/* Section 1 */}
          <div className="section">
            <h2>
              <span className="section-number">1</span> Information We Collect
            </h2>
            <div className="article">
              <p>We may collect and process the following data:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, billing/shipping address, payment details (e.g.,
                  credit card numbers via secure gateways).
                </li>
                <li>
                  <strong>Transactional Data:</strong> Purchase history, order
                  details, and payment records.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  device information, and cookies (see Section 5).
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section">
            <h2>
              <span className="section-number">2</span> How We Use Your
              Information
            </h2>
            <div className="article">
              <p>Your data is used to:</p>
              <ul>
                <li>
                  Process orders, payments, and deliver services/products.
                </li>
                <li>Communicate with you (e.g., order updates, promotions).</li>
                <li>Improve our services, website, and customer experience.</li>
                <li>
                  Comply with legal obligations (e.g., tax filings, fraud
                  prevention).
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section">
            <h2>
              <span className="section-number">3</span> Data Sharing and
              Disclosure
            </h2>
            <div className="article">
              <p>
                We do not sell your data to third parties. However, we may share
                it with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Payment processors
                  (Cashfree), shipping partners, or IT services, strictly for
                  completing transactions.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> If required by law (e.g.,
                  court orders, government requests).
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="section">
            <h2>
              <span className="section-number">4</span> Data Security
            </h2>
            <div className="article">
              <ul>
                <li>
                  We use SSL encryption for online transactions and store data
                  on secure servers.
                </li>
                <li>
                  Payment details are processed through PCI-DSS compliant
                  gateways; we do not store credit card information.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="section">
            <h2>
              <span className="section-number">5</span> Cookies and Tracking
            </h2>
            <div className="article">
              <ul>
                <li>
                  Our website uses cookies to enhance user experience (e.g.,
                  login sessions, cart retention).
                </li>
                <li>
                  You can disable cookies via browser settings, but this may
                  limit website functionality.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="section">
            <h2>
              <span className="section-number">6</span> Your Rights
            </h2>
            <div className="article">
              <p>
                Depending on applicable laws (India's IT Act, 2000), you may:
              </p>
              <ul>
                <li>
                  Request access to, correction, or deletion of your data.
                </li>
                <li>Opt out of marketing communications.</li>
                <li>
                  Withdraw consent for data processing (where applicable).
                </li>
              </ul>
              <p>To exercise these rights, contact us at [your email/phone].</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="section">
            <h2>
              <span className="section-number">7</span> Data Retention
            </h2>
            <div className="article">
              <p>We retain your data only as long as necessary to:</p>
              <ul>
                <li>Fulfill the purposes outlined in this policy.</li>
                <li>Comply with legal, tax, or accounting requirements.</li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="section">
            <h2>
              <span className="section-number">8</span> Policy Updates
            </h2>
            <div className="article">
              <p>
                We may update this policy periodically. Changes will be posted
                on our website, with the "Last Updated" date revised. Continued
                use of our services implies acceptance.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Us</h3>
            <div className="contact-details">
              <div>
                <p>Name</p>
                <p>Starmarketing</p>
              </div>
              <div>
                <p>Email</p>
                <p>manager@wingstarmarketing.com</p>
              </div>
              <div>
                <p>Phone</p>
                <p>8209326351</p>
              </div>
              <div>
                <p>Address</p>
                <p>
                  Near Fatima Masjid, Fathepur Road, Sikar, Rajasthan 332001
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="important-notes">
            <h3>Important Notes:</h3>
            <ol>
              <li>
                <strong>Customize:</strong> Replace all placeholders with your
                business details.
              </li>
              <li>
                <strong>Legal Compliance:</strong>
                <ul>
                  <li>
                    If operating in India, reference compliance with the
                    Information Technology (Reasonable Security Practices)
                    Rules, 2011 and the Consumer Protection Act, 2019.
                  </li>
                  <li>
                    For EU customers (if applicable), mention GDPR compliance.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Third-Party Links:</strong> Add a clause if your website
                links to external sites (e.g., "We are not responsible for
                third-party privacy practices").
              </li>
              <li>
                <strong>Children's Privacy:</strong> Include a statement if you
                do not collect data from minors (e.g., "We do not target or
                knowingly collect data from users under 18").
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
