import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import useOnClickOutside from "../utils/helpers";
import "./ContactForm.css";

function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef();
  console.log(ref);
  useOnClickOutside(ref, () => {
    console.log("clicked outside");
    props.setFormDisplay(false);
  });

  const handleChange = (e) => {
    const newFormData = formData;
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  };

  const service_id = "gmail";
  const template_id = "template_pdwmzpTE";

  // const template_params = {
  //   reply_to: "reply_to_value",
  //   from_name: "user_name",
  //   to_name: "to_name_value",
  //   message_html: "message_html_value",
  // };

  const user_ID = "user_cSCSfdQ44eWNEToaxQzlC";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <section ref={ref} className="ContactForm">
      <div className="ContactForm__InnerContainer">
        <button
          className="ContactForm__InnerContainer__closeButton"
          aria-label="Click to close the form window"
          onClick={() => props.setFormDisplay(false)}
        >
          <span aria-hidden="true"> </span>X
        </button>
        <form className="ContactForm__Form" onSubmit={sendEmail}>
          <h3 className="ContactForm__Form__title">Get in touch!</h3>
          <label forhtml="name">
            Name: <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Your name"
            required
            onChange={handleChange}
          />
          <label forhtml="email">
            Email: <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Your email"
            required
            onChange={handleChange}
          />
          <label forhtml="message">
            Message: <span>*</span>
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="5"
            required
            onChange={handleChange}
          />
          <input
            className="ContactForm__Form__button"
            type="submit"
            value="Send"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
