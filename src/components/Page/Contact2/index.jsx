//old contact form, before error validation...
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Contact() {
  return (
    <form name="contact" method="post" className="box contact-box">
      <input type="hidden" name="form-name" value="contact" />

      <label>
        Your Name: <input type="text" name="name" />
      </label>

      <label>
        Your Email Address: <input type="email" name="email" />
      </label>

      <label>
        Your Message: <textarea name="message"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  );
}
