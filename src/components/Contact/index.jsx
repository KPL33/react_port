// import { useState, useRef, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

// export default function Contact() {
//   const [email, setEmail] = useState("");
//   const [isValidEmail, setIsValidEmail] = useState(true);
//   const [message, setMessage] = useState("");

//   const messageRef = useRef(null);

//   useEffect(() => {
//     adjustTextareaHeight(messageRef.current);
//   }, [message]);

//   const handleEmailChange = (event) => {
//     const enteredEmail = event.target.value;
//     setEmail(enteredEmail);

//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     setIsValidEmail(emailPattern.test(enteredEmail));
//   };

//   const handleMessageChange = (event) => {
//     setMessage(event.target.value);
//     adjustTextareaHeight(event.target);
//   };

//   const adjustTextareaHeight = (textarea) => {
//     textarea.style.height = "auto";
//     textarea.style.height = textarea.scrollHeight + "px";
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!isValidEmail) {
//       alert("Invalid email address");
//       return;
//     }
//     console.log();
//   };

//   return (
//       <form
//         className="box"
//         name="contact"
//         method="POST"
//         data-netlify="true"
//         onSubmit={handleSubmit}
//       >
//         <input type="hidden" name="form-name" value="contact" />
//         <h3 id="contact">Contact</h3>
//         <div className="form-outline mb-4">
//           <label className="form-label" htmlFor="form4Example1">
//             <h4 className="field-titles">Name:</h4>
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="form4Example1"
//             className="form-control"
//           />
//         </div>

//         <div className="form-outline mb-4">
//           <label className="form-label" htmlFor="form4Example2">
//             <h4 className="field-titles">Email Address:</h4>
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="form4Example2"
//             className={`form-control ${!isValidEmail ? "is-invalid" : ""}`}
//             value={email}
//             onChange={handleEmailChange}
//           />
//           {!isValidEmail && (
//             <div className="invalid-feedback">
//               Please enter a valid email address.
//             </div>
//           )}
//         </div>

//         <div className="form-outline mb-4">
//           <label className="form-label" htmlFor="form4Example3">
//             <h4 className="field-titles">Message:</h4>
//           </label>
//           <textarea
//             name="message"
//             className="form-control"
//             id="form4Example3"
//             rows="4"
//             ref={messageRef}
//             value={message}
//             onChange={handleMessageChange}
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary btn-block mb-4">
//           <h3 id="send">Send</h3>
//         </button>
//       </form>
//   );
// }

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
    clearErrorMessage();
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
    clearErrorMessage();
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    clearErrorMessage();
  };

  const clearErrorMessage = () => {
    setFormErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (name.trim() === "" || !isValidEmail || message.trim().length < 3) {
      errors.message =
        "Please provide your name, a valid email address, and a brief message.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form submission logic (e.g., API call)
      console.log("Form submitted successfully:", { name, email, message });
      // Optionally reset form fields
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="box contact-box">
      <form name="contact" method="post" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />

        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Your Email Address:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? "is-invalid" : ""}
          />
        </label>

        <label>
          Your Message:
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
          ></textarea>
        </label>

        <div className="form-int">
          {Object.keys(formErrors).length > 0 && (
            <div className="alert alert-danger" role="alert">
              {formErrors.message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              display:
                Object.keys(formErrors).length > 0 ? "none" : "inline-block",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
