import contactImg from "../assets/images/contact/yogaPause.jpg";

function Contacts() {
  return (
    <div className="form contact-container">
      <div className="container form-container">
        <h2 className="heading2 mb-5">Excited to know more?</h2>
        <h3 className="heading1 mb-5">Get in Touch</h3>
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form id="contact-form" noValidate>
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control formInput"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6 mb-5">
                    <input
                      type="email"
                      name="email"
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow mb-5">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow mb-4">
                  <div className="col">
                    <textarea
                      rows={6}
                      name="message"
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img className="img-thumbnail" src={contactImg} alt="contact-img" />
      </div>
    </div>
  );
}

export default Contacts;
