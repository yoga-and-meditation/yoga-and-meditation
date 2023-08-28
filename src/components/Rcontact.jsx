import {useRef,useState} from 'react'
import emailjs from "@emailjs/browser";
import validator from "validator";

function Rcontact() {
    const [buttonValue, setButtonValue] = useState("Submit");
    const [emailError, setEmailError] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n0x9wia', 'template_szt4hxx', form.current, '2xUBQSjV5qyiTcGFk')
          .then((result) => {
              console.log(result.text);
              setButtonValue("Sent");
              form.current.reset();
        
              setTimeout(() => {
                setButtonValue("Submit"); //Reset the button text after a delay of 3 seconds
              }, 2000);
          }, (error) => {
              console.log(error.text);
          });
      };
      const validateEmail = (email) => {
        if (validator.isEmail(email)) {
          setEmailError("");
        } else {
          setEmailError("Enter valid Email!");
        }
      };
    
      const handleEmailChange = (e) => {
        validateEmail(e.target.value);
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
              <form id="contact-form" ref={form} onSubmit={sendEmail} >
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
                       onChange={handleEmailChange}
                    required
                    />
                    <p className="text-danger">{emailError}</p>
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
                      className="form-control formInput message" // Added missing class name
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                   {buttonValue}
               </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-img img-thumbnail"></div>
    </div>
  </div>
  )
}

export default Rcontact