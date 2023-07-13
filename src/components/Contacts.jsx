import sheetal from "../assets/images/sheetal.jpg"

function Contacts() {
  return (
    <div className="ContactForm ">
      <div className="container">
        <h1 className="h1 mb-5">Get in Touch</h1>
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
                    ></input>
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
                <div className="row formRow mb-5">
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
        <img  src= {sheetal} alt="contact-img" />
      </div>
    </div>
  );
}

export default Contacts;
