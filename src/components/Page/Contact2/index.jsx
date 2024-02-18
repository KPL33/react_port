import React, { useState } from "react";
import "./styles.css";

export default function Contact2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Please provide your name before sending your message.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim() || !isValidEmail(email)) {
      setEmailError(
        "Please provide a valid email address before sending your message."
      );
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Please provide your message before sending.");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Simple email validation pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform additional actions or submit the form
      console.log("Form submitted!");
    }
  };

  return (
    <form name="contact" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <h3 id="contact-title">Contact</h3>

      <p className="contact-two">
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <span className="error-message">{nameError}</span>
      </p>

      <p>
        <label>
          Your Email Address:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <span className="error-message">{emailError}</span>
      </p>

      <p>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <span className="error-message">{messageError}</span>
      </p>

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
