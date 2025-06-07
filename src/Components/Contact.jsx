import React from "react";
import "../styles/Contact.css";

const ContactUs = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h4>We'd love to hear from you</h4>
            <h1>Contact us</h1>
            <p>
              Reach out with any questions or inquiries. We're here to help and
              will get back to you as soon as possible.
            </p>
            <ul>
              <li>
                📧{" "}
                <a href="mailto:agugideon409@gmail.com">
                  agugideon409@gmail.com
                </a>
              </li>
              <li>📞 09029896889</li>
              <li>📍 Lekki, Ajah,Lagos ,Nigeria.</li>
            </ul>
          </div>

          <form className="contact-form">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g. yourname@example.com"
            />

            <label htmlFor="phone">Your Phone Number</label>
            <input type="tel" id="phone" placeholder="e.g. +234 800 000 0000" />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Agu Gideon. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactUs;
