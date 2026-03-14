import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const temples = [
  {
    title: "Shri Thakur Banke Bihari Ji Mandir",
    image:
      "https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg",
    description:
      "Register for Shri Thakur Banke Bihari Ji Mandir Online Darshan Booking",
  },
  {
    title: "Shiv Khori Mandir",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Shiv_khori_2.jpg/1200px-Shiv_khori_2.jpg",
    description: "Register for Shiv Khori Mandir Online Darshan Booking",
  },
  {
    title: "Tirupati Tirumala Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg",
    description: "Register for Tirupati Tirumala Temple Online Darshan Booking",
  },
  {
    title: "Padmanabaswamy Temple",
    image:
      "https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg",
    description: "Register for Padmanabaswamy Temple Online Darshan Booking",
  },
  {
    title: "Shirdi Sai Baba Mandir",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sai_baba_samadhi_mandir_.jpg",
    description: "Register for Shirdi Sai Baba Mandir Online Darshan Booking",
  },
  {
    title: "Golden Temple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg",
    description: "Register for Golden Temple Online Darshan Booking",
  },
];

const Temples = () => {
  return (
    <section className="temples-section content" id="temples">
      <h1 className="temple-heading">Popular Temples</h1>

      <Link to="/ulogin" className="temple-link">
        <div className="temple-grid">
          {temples.map((temple, index) => (
            <div className="temple-card" key={index}>
              <img src={temple.image} alt={temple.title} />

              <div className="temple-overlay">
                <h3>{temple.title}</h3>
                <p>{temple.description}</p>
                <span className="darshan-btn">Advance Darshan</span>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
};

export default Temples;