import React from 'react';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div style={{ display: "none" }}>
          <label>
            Do not fill this out if you are human: <input name="bot-field" />
          </label>
        </div>

        <div>
          <label>
            Name: <br />
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email:</label> <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label>
            Message: <br />
            <textarea name="message"></textarea>
          </label>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
