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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });

    // Update form validity
    setFormValid(validateForm({ ...formData, [name]: value }, errors));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "" || formData.message.trim() === "") {
      newErrors.name = "Please enter your name and message.";
      newErrors.message = "Please enter your name and message.";
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Update errors and form validity
    setErrors(newErrors);
    setFormValid(validateForm(formData, newErrors));

    // If form is valid, submit the form
    if (formValid) {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = (data, errors) => {
    return (
      data.name.trim() !== "" &&
      data.message.trim() !== "" &&
      errors.name === "" &&
      errors.email === "" &&
      errors.message === ""
    );
  };

  return (
    <form
      name="contact"
      method="post"
      className="box contact-box"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Your Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Your Email Address:{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Your Message:{" "}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </label>

      <button
        type="submit"
        style={{ opacity: formValid ? 1 : 0.2 }}
        disabled={!formValid}
      >
        Send
      </button>
    </form>
  );
}
