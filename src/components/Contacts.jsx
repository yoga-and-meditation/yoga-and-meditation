import contactImg from "../assets/images/contact/onlineYoga.avif";
import { useForm } from "react-hook-form";
function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /*   <form 
      <input {...register('firstName')} />
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form> */
  return (
    <div className="form onSubmit={handleSubmit((data) => console.log(data))}> ">
      <div className="container">
        <h2 className="heading2 mb-5">Excited to know more?</h2>
        <h3 className="heading1 mb-5">Get in Touch</h3>
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form id="contact-form" noValidate>
                {/* Row 1 of form */}
                <div className="row form Row">
                  <div className="col-6">
                    <input
                      {...register("Name", { required: true })}
                      type="text"
                      name="name"
                      className="form-control formInput"
                      placeholder="Name"
                    />{" "}
                    {errors.Name && <alert>Your name is required.</alert>}
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
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img src={contactImg} alt="contact-img" />
      </div>
    </div>
  );
}

export default Contacts;
