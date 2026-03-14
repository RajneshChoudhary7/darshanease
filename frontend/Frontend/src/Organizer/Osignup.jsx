import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const Osignup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const payload = { name, email, password };

      const result = await axios.post(
        "http://localhost:7000/organizer/osignup",
        payload
      );

      console.log(result);
      alert("Account Created Successfully");

      navigate("/ologin");

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">

      {/* Back Button */}
      <Link to="/" className="absolute top-8 left-10 text-gray-600 hover:text-black text-2xl">
        <FaSignOutAlt />
      </Link>

      <div className="flex bg-green-700 p-8 rounded-lg shadow-lg w-[650px] h-[440px]">

        {/* Image Section */}
        <div className="mr-8">
          <img
            src="https://i.pinimg.com/originals/9a/a6/12/9aa612d9c56c38e14b009f2184b67039.jpg"
            alt="Temple"
            className="w-[270px] h-[380px] object-cover rounded-md"
          />
        </div>

        {/* Form Section */}
        <div className="w-[270px]">

          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Organizer Signup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm text-gray-200">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 rounded border outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 rounded border outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-2 rounded border outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-400 hover:bg-red-600 text-white py-2 rounded font-semibold transition"
            >
              {loading ? "Creating..." : "Signup"}
            </button>

            <p className="text-sm text-gray-200 text-center">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/ologin")}
                className="text-red-300 hover:underline"
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

export default Osignup;