import "./styles.css";

export default function Contact2() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <h3 id="contact-title">Contact</h3>
      <p className="contact-two">
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email Address: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
