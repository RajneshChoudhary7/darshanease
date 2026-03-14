import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const Alogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = { email, password };

    axios
      .post("http://localhost:7000/admin/alogin", payload)
      .then((res) => {
        console.log("login: " + res.data.Status);

        if (res.data.Status === "Success") {

          localStorage.setItem("user", JSON.stringify(res.data.user));

          alert("Login successful");

          navigate("/ahome");

        } else {
          alert("Wrong credentials");
        }

      })
      .catch((err) => console.log(err));
  };

  const formHandle1 = (e) => {
    e.preventDefault();
    navigate("/asignup");
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-8 left-10 text-gray-600 hover:text-black text-2xl"
      >
        <FaSignOutAlt />
      </Link>

      <div className="flex bg-white shadow-xl rounded-lg overflow-hidden w-[650px] h-[420px]">

        {/* Image Section */}
        <div>
          <img
            src="https://i.pinimg.com/originals/9a/a6/12/9aa612d9c56c38e14b009f2184b67039.jpg"
            alt="Temple"
            className="w-[300px] h-[420px] object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-8 w-[350px] bg-green-700">

          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Admin Login
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div>
              <label className="text-sm text-gray-200">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full mt-1 p-2 rounded border outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-200">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full mt-1 p-2 rounded border outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-400 hover:bg-red-600 text-white py-2 rounded font-semibold transition"
            >
              Login
            </button>

            <p className="text-sm text-gray-200 text-center">
              Don't have an account?

              <button
                onClick={formHandle1}
                className="ml-2 text-red-300 hover:underline"
              >
                Signup
              </button>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Alogin;