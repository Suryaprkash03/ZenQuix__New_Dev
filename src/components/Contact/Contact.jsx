import React, { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../Context";
import "./Contact.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Load EmailJS script dynamically
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init({
        publicKey: "bam4pCsa89AEn163E",
      });
    };
    document.body.appendChild(script);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    window.emailjs.sendForm('service_ur91eoq', 'template_lb7f8nf', form.current)
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setDone(true);
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });

    // Optionally reset the form after submission
    e.target.reset();
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="user_name" className="user" placeholder="Name" required />
            <input type="email" name="user_email" className="user" placeholder="Email" required />
            <input type="tel" name="user_phone" className="user" placeholder="Ph.No" required />
            <input type="text" name="user_company" className="user" placeholder="Company Name" />
          </div>
          <div className="user_div">
            <textarea name="message" className="user" placeholder="Message" required />
          </div>     
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
