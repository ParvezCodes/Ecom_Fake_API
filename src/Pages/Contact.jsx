import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <input type="text" placeholder="Name" className="inputField" />
      <input type="email" placeholder="Email" className="inputField" />
      <input type="text" placeholder="Message" className="inputField" />
      <button className="contactBtn">Send</button>
    </div>
  );
};

export default Contact;
