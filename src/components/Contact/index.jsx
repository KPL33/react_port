import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

//This shows the contents of our "ContactPage".
export default function Contact() {
  return (
    <section>
      <form>
      <h4>Contact</h4>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            <h6>Name:</h6>
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">
          <h6>Email Address:</h6>
          </label>
          <input type="email" id="form4Example2" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
          <h6>Message:</h6>
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </section>
  );
}
