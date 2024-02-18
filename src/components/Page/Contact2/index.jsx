import { useState } from "react";
import "./styles.css";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const { name, email, message } = formData;

    if (!name.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Please provide your name before sending your message.",
      }));
      isValid = false;
    }

    if (!email.trim() || !isValidEmail(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email:
          "Please provide a valid email address before sending your message.",
      }));
      isValid = false;
    }

    if (!message.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: "Please provide your message before sending.",
      }));
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, submit or perform actions here
      console.log("Form submitted!", formData);

      // You can also submit the form data to Netlify if needed
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
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <span className="error-message">{formErrors.name}</span>
      </p>

      <p>
        <label>
          Your Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <span className="error-message">{formErrors.email}</span>
      </p>

      <p>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <span className="error-message">{formErrors.message}</span>
      </p>

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
