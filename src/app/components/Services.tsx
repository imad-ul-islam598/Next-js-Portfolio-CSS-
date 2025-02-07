import React from "react";
import "../CSS/Services.css"; // This should work if Contact.css is located in the CSS folder at the root level

const Services: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Services</h2>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <h3>UI Design</h3>
          <p>Creating intuitive and visually appealing designs.</p>
          <button>Know More →</button>
        </div>
        <div className="service-card">
          <h3>Product Design</h3>
          <p>Designing user-centric products for better engagement.</p>
          <button>Know More →</button>
        </div>
        <div className="service-card">
          <h3>Branding</h3>
          <p>Building a strong brand identity for your business.</p>
          <button>Know More →</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
