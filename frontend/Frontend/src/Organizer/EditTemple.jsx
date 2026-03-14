import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Onavbar from "./Onavbar";

const EditTemple = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    templeName: "",
    open: "",
    close: "",
    location: "",
    description: "",
    templeImage: null,
  });

  useEffect(() => {
    fetchTemple();
  }, []);

  const fetchTemple = async () => {
    try {

      const res = await axios.get(
        `http://localhost:7000/organizer/gettemplebyid/${id}`
      );

      setFormData({
        templeName: res.data.templeName,
        open: res.data.open,
        close: res.data.close,
        location: res.data.location,
        description: res.data.description,
        templeImage: null,
      });

    } catch (error) {
      console.log("Fetch Error", error);
    }
  };

  const handleChange = (e) => {

    if (e.target.name === "templeImage") {

      setFormData({
        ...formData,
        templeImage: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
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

      if (formData.templeImage) {
        data.append("templeImage", formData.templeImage);
      }

      await axios.put(
        `http://localhost:7000/organizer/updatetemple/${id}`,
        data
      );

      alert("Temple Updated Successfully");

      navigate("/mytemple");

    } catch (error) {
      console.log("Update Error", error);
    }
  };

  return (
    <div>

      <Onavbar />

      <div className="container mt-5">

        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>

          <h3 className="text-center mb-4">Update Temple</h3>

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
              placeholder="Location"
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
              required
            />

            <input
              type="file"
              name="templeImage"
              onChange={handleChange}
              className="form-control mb-3"
            />

            <button className="btn btn-success w-100">
              Update Temple
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default EditTemple;