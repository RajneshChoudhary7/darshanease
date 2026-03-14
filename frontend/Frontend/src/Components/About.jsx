import React from "react";
import "./navbar.css";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <h2 className="about-title">About Darshan Booking</h2>

        <p className="about-subtitle">
          System has been enhanced after discussion with a few major temples.
        </p>

        <ul className="about-list">

          <li>
            All major temples across India are implementing the Darshan
            Token / E-Queue / Ticket Booking system to control the rush
            of devotees.
          </li>

          <li>
            Social distancing, crowd management and contact tracing
            with minimum physical interaction.
          </li>

          <li>
            Online advance booking for devotees travelling from
            far-off places.
          </li>

          <li>
            On-the-spot Darshan Token issuance for local devotees
            who may not use online systems.
          </li>

          <li>
            Developed after thorough research and consultation with
            major temples across India.
          </li>

          <li>
            Daily reports for gatekeepers/security and analytical
            reports for temple management.
          </li>

          <li>
            Fast token generation system for smooth darshan flow.
          </li>

        </ul>

      </div>

    </section>
  );
};

export default About;