import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Anavbar from "./Anavbar";

const UserEdit = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const response = await axios.get(
          `http://localhost:7000/user/users/${id}`
        );

        setUser(response.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchUser();

  }, [id]);

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:7000/user/useredit/${id}`,
        user
      );

      alert("User updated successfully");

      console.log("Updated successfully");

      navigate("/users");

    } catch (error) {
      console.log(error);
      alert("Update failed");
    }

  };

  return (

    <div>

      <Anavbar />

      <div className="flex justify-center mt-10">

        <div
          className="p-6 rounded shadow-lg"
          style={{
            width: "400px",
            background: "linear-gradient(to left,#009696,#4CAF57)"
          }}
        >

          <h2 className="text-2xl font-bold text-center mb-6">
            Update User
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>

              <label className="block text-center font-semibold">
                User Name
              </label>

              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="User Name"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

            </div>

            <div>

              <label className="block text-center font-semibold">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

            </div>

            <div>

              <label className="block text-center font-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-600 text-white py-2 rounded"
            >
              Update
            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default UserEdit;