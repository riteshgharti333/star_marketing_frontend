import "./TermPage.scss";

const TermPage = () => {
  return (
    <div className="termPage">
      <div className="terms-container">
        <div className="terms-header">
          <h1>
            STAR MARKETING <span>Terms & Conditions</span>
          </h1>
          <p>Last Updated: 05/06/2025</p>
        </div>

        <div className="terms-content">
          {/* Section 1 */}
          <div className="section">
            <h2>
              <span className="section-number">1</span> Payment Terms
            </h2>
            <div className="article">
              <p>
                <strong>A 50% advance payment</strong> is required to initiate the project.
              </p>
              <p>
                <strong>The remaining 50%</strong> is due upon 50% completion of the website or service agreed upon.
              </p>
              <p>
                Work will <strong>resume/continue only after</strong> the balance payment is cleared.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section">
            <h2>
              <span className="section-number">2</span> Post-Completion Modifications
            </h2>
            <div className="article">
              <p>
                Once the project is completed, clients have <strong>7 calendar days</strong> to request modifications related to:
              </p>
              <ul>
                <li>Corrections</li>
                <li>Errors</li>
                <li>Revisions in website</li>
                <li>Social Media Marketing</li>
                <li>SEO</li>
                <li>Any additional services provided</li>
              </ul>
              <p>
                Modification requests beyond this period may be subject to <strong>additional charges</strong>.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section">
            <h2>
              <span className="section-number">3</span> Purchase Order Confirmation
            </h2>
            <div className="article">
              <p>
                A <strong>written purchase order (PO) or formal approval</strong> is mandatory from the client before starting any project.
              </p>
              <p>
                The confirmation must be provided via <strong>email and/or WhatsApp</strong> as an official acknowledgment of the service agreement.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="section">
            <h2>
              <span className="section-number">4</span> Purchases, Payments, and Refunds
            </h2>
            <div className="article">
              <h3>Payment Obligations:</h3>
              <p>
                All purchases made through STAR MARKETING are final. By
                completing a transaction, you agree to pay the specified amount
                and acknowledge that services/products are rendered as
                described.
              </p>
            </div>
            <div className="article">
              <h3>No Refunds Policy:</h3>
              <p>
                All sales are <strong>final and non-refundable</strong> unless
                explicitly stated otherwise or required by applicable law (e.g.,
                consumer protection laws). Returns, exchanges, or refunds will
                not be permitted after payment is processed.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="section">
            <h2>
              <span className="section-number">5</span> Dispute Resolution and
              Legal Jurisdiction
            </h2>
            <div className="article">
              <h3>Dispute Process:</h3>
              <p>
                Any disputes, claims, or legal actions arising from your use of
                star marketing's services/products must be resolved exclusively
                through arbitration/courts in Sikar, Rajasthan,INDIA You waive
                the right to pursue class-action lawsuits or jury trials
              </p>
            </div>
            <div className="article">
              <h3>Governing Law:</h3>
              <p>
                These terms are governed by the laws of [india/rajasthan/sikar],
                specifically sikar applicable.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="section">
            <h2>
              <span className="section-number">6</span> Amendments and
              Termination
            </h2>
            <div className="article">
              <h3>Changes to Terms:</h3>
              <p>
                STAR MARKETING reserves the right to update or modify these
                terms at any time without prior notice. Continued use of
                services/products constitutes acceptance of the revised terms.
              </p>
            </div>
            <div className="article">
              <h3>Service Termination:</h3>
              <p>
                We may terminate access to services/products for violations of
                these terms or fraudulent activity, at our sole discretion.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="section">
            <h2>
              <span className="section-number">7</span> Liability and Warranties
            </h2>
            <div className="article">
              <h3>Limitation of Liability:</h3>
              <p>
                STAR MARKETING is not liable for indirect, incidental, or
                consequential damages (e.g., lost profits, data loss) arising
                from the use of our services/products.
              </p>
            </div>
            <div className="article">
              <h3>No Warranties:</h3>
              <p>
                Services/products are provided "as-is" without warranties of any
                kind, express or implied.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="section">
            <h2>
              <span className="section-number">8</span> User Responsibilities
            </h2>
            <div className="article">
              <h3>Accurate Information:</h3>
              <p>
                You agree to provide truthful and complete details during
                transactions.
              </p>
            </div>
            <div className="article">
              <h3>Prohibited Use:</h3>
              <p>
                Misuse of services/products (e.g., fraud, unauthorized resale)
                will result in immediate termination and legal action.
              </p>
            </div>
          </div>

          {/* Section 9 - Contact */}
          <div className="section">
            <h2>
              <span className="section-number">9</span> Contact Information
            </h2>
            <p style={{ marginBottom: "15px" }}>
              For questions or disputes, contact:{" "}
            </p>
            <div className="contact-details">
              <div>
                <p>
                  <strong>Name :</strong> Sohel Ali
                </p>
              </div>
              <div>
                <p>
                  <strong>Email :</strong> manager@wingstarmarketing.com
                </p>
              </div>
              <div>
                <p>
                  <strong>Phone :</strong> 8209326351
                </p>
              </div>
              <div>
                <p>
                  <strong>Address :</strong> Near Fatima Masjid, Fathepur Road,
                  Sikar, 322001 Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermPage;