import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="left">
        <span className="orange-text">Get In Touch</span>
        <span className="bold-text">Contact Me</span>
      </div>
      <div className="right">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea cols="30" rows="10" placeholder="Message..." />
          <input type="submit" className="btn submit-btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
