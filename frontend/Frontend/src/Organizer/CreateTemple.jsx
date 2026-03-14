import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Onavbar from "./Onavbar";

function CreateTemple() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    templeName: "",
    open: "",
    close: "",
    location: "",
    description: "",
    templeImage: null
  });

  const handleChange = (e) => {

    if (e.target.name === "templeImage") {

      setFormData({
        ...formData,
        templeImage: e.target.files[0]
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append("templeName", formData.templeName);
      data.append("open", formData.open);
      data.append("close", formData.close);
      data.append("location", formData.location);
      data.append("description", formData.description);
      data.append("templeImage", formData.templeImage);

      data.append("organizerName", user.name);
      data.append("organizerId", user.id);

      await axios.post(
        "http://localhost:7000/organizer/createtemple",
        data
      );

      alert("Temple created successfully");

      navigate("/mytemple");

    } catch (error) {

      console.error("Temple Create Error", error);
      alert("Something went wrong");

    }

  };

  return (
    <div>

      <Onavbar />

      <div className="container mt-5">

        <div
          className="card shadow p-4 mx-auto"
          style={{ maxWidth: "500px" }}
        >

          <h3 className="text-center mb-4">
            Add Temple
          </h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="templeName"
              placeholder="Temple Name"
              value={formData.templeName}
              onChange={handleChange}
              className="form-control mb-3"
              required
            />

            <div className="row mb-3">

              <div className="col">

                <label>Open</label>

                <input
                  type="time"
                  name="open"
                  value={formData.open}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col">

                <label>Close</label>

                <input
                  type="time"
                  name="close"
                  value={formData.close}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

            </div>

            <input
              type="text"
              name="location"
              placeholder="Address"
              value={formData.location}
              onChange={handleChange}
              className="form-control mb-3"
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="form-control mb-3"
              rows="3"
              required
            />

            <input
              type="file"
              name="templeImage"
              accept="image/*"
              onChange={handleChange}
              className="form-control mb-3"
              required
            />

            <button className="btn btn-success w-100">
              Create Temple
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default CreateTemple;