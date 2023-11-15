import React from 'react';
// import { useState, useRef, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

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
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
          <label>
            Name: <br />
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email:</label> <br />
            <input id="email"type="email" name="email" />
        </div>

        <div>
          <label>Message: <br />
            <textarea name="message"></textarea>

          </label>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
