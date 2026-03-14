import React from "react";
import "./navbar.css";

const servicesData = [
  {
    title: "Darshan Timings",
    desc: "Explore the divine experience with our regular darshan timings and receive blessings from the sacred temple atmosphere.",
    icon: "🕉️"
  },
  {
    title: "Special Pooja Services",
    desc: "Participate in special pooja ceremonies performed by temple priests for spiritual prosperity and peace.",
    icon: "🙏"
  },
  {
    title: "Online Ticket Booking",
    desc: "Book darshan tickets online easily and avoid long queues for a smooth spiritual journey.",
    icon: "🎫"
  },
  {
    title: "Customer Service",
    desc: "Our support team helps you plan your temple visit and solve booking related queries.",
    icon: "📞"
  }
];

const Services = () => {
  return (
    <section className="services-container" id="services">
      <h1 className="services-heading">Our Services</h1>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;