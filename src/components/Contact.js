import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();
  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const userID = 'user_56D8A9X3FmdlfK88hsZgV';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h2>
          <b>Contact Me</b>
        </h2>
        <p>Want to touch base? Sure, reach out to me!</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: 'Please enter your name!',
                    maxLength: {
                      value: 20,
                      message:
                        'Please enter a name with fewer than 20 characters!',
                    },
                  })}
                />
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>

              <div className="text-center">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: 'Please add your phone number!',
                  })}
                />
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>

              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: 'Please provide you email!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid Email',
                    },
                  })}
                />
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>

              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: 'OOPS, you forget to add the subject!',
                  })}
                />
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Type your message here..."
                  name="message"
                  ref={register({
                    required: 'Please describe shortly your message...',
                  })}
                ></textarea>
              </div>
              <span className="error-message">
                {errors.message && errors.message.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
