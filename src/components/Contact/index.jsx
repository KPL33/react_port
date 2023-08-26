import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail) {
      alert('Invalid email address');
      return;
    }

    // Handle form submission logic here
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h3>Contact</h3>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            <h4>Name:</h4>
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">
            <h4>Email Address:</h4>
          </label>
          <input
            type="email"
            id="form4Example2"
            className={`form-control ${!isValidEmail ? 'is-invalid' : ''}`}
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && (
            <div className="invalid-feedback">Please enter a valid email address.</div>
          )}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            <h4>Message:</h4>
          </label>
          <textarea className="form-control" id="form4Example3" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          <h3 id="send">Send</h3>
        </button>
      </form>
    </section>
  );
}