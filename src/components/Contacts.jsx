import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pl6rg6m",
        "template_2izbeie",
        form.current,
        "Jkw-8vpf0sd6gyaxm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="form contact-container">
      <div className="contact-sub-container">
        <div className="container form-container">
          <h2>Excited to know more?</h2>
          <h3>Get in Touch</h3>
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm">
                {/* Contact form */}
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  {/* Row 1 of form */}
                  <div className="row formRow">
                    <div className="col-6">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control formInput"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-6 mb-5">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control formInput"
                        placeholder="Email address"
                        required
                      />
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
                        required
                      />
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
        <div className="contact-img img-thumbnail"></div>
      </div>
    </div>
  );
}

export default Contacts;
