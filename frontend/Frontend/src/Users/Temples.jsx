import React, { useState,useEffect } from 'react'
import '../Components/navbar.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const TempleCard = ({ imageSrc, title, description }) => {

  const [hover, setHover] = useState(false);

  return (

    <Card
      style={{ width: "20rem", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="shadow"
    >

      {hover ? (
        <Card.Body>

          <Card.Title style={{ color: "orange" }}>
            Advance Darshan
          </Card.Title>

          <Card.Subtitle>{title}</Card.Subtitle>

          <Card.Text>{description}</Card.Text>

        </Card.Body>

      ) : (

        <Card.Img
          variant="top"
          src={imageSrc}
          style={{ height: "200px", objectFit: "cover" }}
        />

      )}

    </Card>
  );
};

export default TempleCard;
import React from "react";
import TempleCard from "./TempleCard";
import { Link } from "react-router-dom";

const temples = [
  {
    image:
      "https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg",
    title: "Shri Thakur Banke Bihari Ji Mandir",
    description: "Online Darshan Booking",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Shiv_khori_2.jpg/1200px-Shiv_khori_2.jpg",
    title: "Shiv Khori Mandir",
    description: "Online Darshan Booking",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
    title: "Tirupati Tirumala Temple",
    description: "Online Darshan Booking",
  },
];

const Temples = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        padding: "50px 0",
      }}
    >
      <h1 className="text-center mb-5">Temples</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {temples.map((temple, index) => (
          <Link
            to="/utemples"
            key={index}
            style={{ textDecoration: "none" }}
          >
            <TempleCard
              imageSrc={temple.image}
              title={temple.title}
              description={temple.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Temples;
