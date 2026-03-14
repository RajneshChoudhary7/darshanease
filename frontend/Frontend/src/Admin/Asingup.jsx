import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const Asignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = { name, email, password };

    axios
      .post("http://localhost:7000/admin/asignup", payload)
      .then((result) => {
        alert("Account created");
        console.log(result);
        navigate("/alogin");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to create an account");
      });
  };

  const goToLogin = (e) => {
    e.preventDefault();
    navigate("/alogin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-600 hover:text-black text-2xl"
      >
        <FaSignOutAlt />
      </Link>

      <div
        className="bg-green-700 rounded-lg shadow-lg p-6 flex"
        style={{ width: "650px", height: "440px" }}
      >
        {/* Image */}
        <div>
          <img
            src="https://i.pinimg.com/originals/9a/a6/12/9aa612d9c56c38e14b009f2184b67039.jpg"
            alt="Temple"
            style={{ height: "380px", width: "280px", marginRight: "20px" }}
          />
        </div>

        {/* Form */}
        <div style={{ width: "300px" }}>
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Admin Signup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-sm text-white">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full p-2 rounded border"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full p-2 rounded border"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-2 rounded border"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-600 text-white py-2 rounded transition"
            >
              Signup
            </button>

            {/* Login Link */}
            <p className="text-sm text-white text-center">
              Already have an account?{" "}
              <button
                onClick={goToLogin}
                className="text-yellow-300 hover:underline"
              >
                Login
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Asignup;