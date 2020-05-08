import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //     const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const newFormData = formData;
    newFormData[e.target.id] = e.target.value;
    setFormData(newFormData);
  };

  const service_id = "gmail";
  const template_id = "template_pdwmzpTE";

  const template_params = {
    reply_to: "reply_to_value",
    from_name: "user_name",
    to_name: "to_name_value",
    message_html: "message_html_value",
  };

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
    <section className="ContactForm">
      {/* <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <div className="ContactForm__InnerContainer">
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
