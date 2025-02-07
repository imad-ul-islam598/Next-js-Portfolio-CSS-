"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../CSS/Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2 className="section-title">Get in Touch</h2>
          <p className="description">
            Feel free to reach out anytime. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className="info-items">
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h4 className="info-title">Phone</h4>
                <p className="info-text">+123 456 789</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h4 className="info-title">Email</h4>
                <p className="info-text">contact@yourmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4 className="info-title">Address</h4>
                <p className="info-text">123 Your Street, Your City, Country</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <Link href="/facebook" className="social-link">
              <FaFacebookF />
            </Link>
            <Link href="/twitter" className="social-link">
              <FaTwitter />
            </Link>
            <Link href="/instagram" className="social-link">
              <FaInstagram />
            </Link>
            <Link href="/linkedin" className="social-link">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">Send Message</h3>
          <form>
            <input type="text" placeholder="Your Name" className="form-input" />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              className="form-input"
              rows={5}
            ></textarea>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
