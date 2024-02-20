// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

// export default function Contact2() {
//   return (
//     <form name="contact" method="post">
//       <input type="hidden" name="form-name" value="contact" />
//       <p>
//         <label>
//           Your Name: <input type="text" name="name" />
//         </label>
//       </p>
//       <p>
//         <label>
//           Your Email: <input type="email" name="email" />
//         </label>
//       </p>
//       <p>
//         <label>
//           Message: <textarea name="message"></textarea>
//         </label>
//       </p>
//       <p>
//         <button type="submit">Send</button>
//       </p>
//     </form>
//   );
// }


import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Contact2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [message, setMessage] = useState("");

  const messageRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight(messageRef.current);
  }, [message]);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsValidEmail(emailPattern.test(enteredEmail));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    adjustTextareaHeight(event.target);
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail) {
      alert("Invalid email address");
      return;
    }
    // Additional logic or API call can be added here
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
        <label className="form-label" htmlFor="form4Example1">
          <h4 className="field-titles">Name:</h4>
        </label>
        <input
          type="text"
          name="name"
          id="form4Example1"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form4Example2">
          <h4 className="field-titles">Email Address:</h4>
        </label>
        <input
          type="email"
          name="email"
          id="form4Example2"
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
        <label className="form-label" htmlFor="form4Example3">
          <h4 className="field-titles">Message:</h4>
        </label>
        <textarea
          name="message"
          className="form-control"
          id="form4Example3"
          rows="4"
          ref={messageRef}
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">
        <h3 id="send">Send</h3>
      </button>
    </form>
  );
}
