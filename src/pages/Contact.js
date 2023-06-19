import React from "react";
import "../style/contact.scss";
import { Helmet } from "react-helmet";
function Contact() {
  return (
    <div id="contact-container">
      <Helmet>
        <title>Contact | Tombalaci Mehmet</title>
        <meta
          name="description"
          content="contact page for the Tombalaci Mehmet"
        />
      </Helmet>
      <div id="contact-container-texts">
        <p className="contact-container_p">
          The Counsil appreciates your courage
        </p>
        <p className="contact-container_p">But...</p>
        <p className="contact-container_p">
          For your own good you better keep your opinions to yourself
        </p>
      </div>
    </div>
  );
}

export default Contact;
