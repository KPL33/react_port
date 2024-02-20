import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail) {
      alert("Invalid email address");
      return;
    }

    // Now, you can submit the form data to Netlify or perform any other actions
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <form
      className="box"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <h3 id="contact">Contact</h3>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="name">
          <h4 className="field-titles">Name:</h4>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="email">
          <h4 className="field-titles">Email Address:</h4>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`form-control ${!isValidEmail ? "is-invalid" : ""}`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isValidEmail && (
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        )}
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="message">
          <h4 className="field-titles">Message:</h4>
        </label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">
        <h3 id="send">Send</h3>
      </button>
    </form>
  );
}
