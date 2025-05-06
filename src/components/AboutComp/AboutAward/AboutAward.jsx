import "./AboutAward.scss";

const AboutAward = () => {
  return (
    <div className="aboutAward">
      <div className="aboutAward-top">
        <div className="aboutAward-left">
          <h2>Our achievements</h2>
          <p>
            We strive to continually innovate and improve our systems, and
            enhance our service offerings for our clients. More than benefiting
            our clients and their businesses, though, we are passionate about
            developing solutions that make a genuine difference – whether that
            be building new products to support national healthcare initiatives,
            or publishing content that brings a smile to someone’s face.
          </p>
          <p>
            We are proud of the work we’ve achieved, and have been honoured to
            receive a range of accreditations and awards in recognition of this.
          </p>

          <button>Awards</button>
        </div>
        <div className="aboutAward-right">
          <div className="aboutAward-right-items">
            <div className="aboutAward-right-item">
              <img
                src="https://www.bluefrontier.co.uk/images/accreditations/iso/iso9001.png"
                alt=""
              />

              <div className="aboutAward-right-item-right">
                <p>ISO 9000</p>
                <p>
                  The industry standard certifying that we manage all our data
                  and customers’ data securely.
                </p>
              </div>
            </div>
            <div className="aboutAward-right-item">
              <img
                src="https://www.bluefrontier.co.uk/images/accreditations/iso/iso9001.png"
                alt=""
              />

              <div className="aboutAward-right-item-right">
                <p>ISO 9000</p>
                <p>
                  The industry standard certifying that we manage all our data
                  and customers’ data securely.
                </p>
              </div>
            </div>{" "}
            <div className="aboutAward-right-item">
              <img
                src="https://www.bluefrontier.co.uk/images/accreditations/iso/iso9001.png"
                alt=""
              />

              <div className="aboutAward-right-item-right">
                <p>ISO 9000</p>
                <p>
                  The industry standard certifying that we manage all our data
                  and customers’ data securely.
                </p>
              </div>
            </div>{" "}
            <div className="aboutAward-right-item">
              <img
                src="https://www.bluefrontier.co.uk/images/accreditations/iso/iso9001.png"
                alt=""
              />

              <div className="aboutAward-right-item-right">
                <p>ISO 9000</p>
                <p>
                  The industry standard certifying that we manage all our data
                  and customers’ data securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutAward-bottom">
        <div className="aboutAward-bottom-left">
          <img
            src="https://www.bluefrontier.co.uk/images/sustainability/how-can-we-help.jpg"
            alt=""
          />
        </div>
        <div className="aboutAward-bottom-right">
          <h2>Doing our part for sustainability</h2>
          <p>
            As an ISO-14001 accredited company, we are passionate about doing
            our part when it comes to implementing sustainable practices and
            processes. We work hard to encourage our teams to think about
            sustainability at work, and help them to reduce their carbon
            emmissions with measures including a cycle-to-work scheme, paperless
            processes, and a net zero initiative. We also support our clients in
            hitting their own sustainability goals, by helping them implement
            more digital processes to reduce waste and increase efficiencies in
            everything from paper use to their supply chains.
          </p>
          <p>
            To find our more about our Sustainability & Net Zero Initiative,
            please visit our page.
          </p>

          <button>Sustainbility</button>
        </div>
      </div>
    </div>
  );
};

export default AboutAward;
