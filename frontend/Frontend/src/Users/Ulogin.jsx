import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";

const Ulogin = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      const payload = { email, password };

      const res = await axios.post(
        "http://localhost:7000/user/ulogin",
        payload
      );

      if (res.data.Status === "Success") {

        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );

        alert("Login successful");

        navigate("/uhome");

      } else {

        alert("Wrong credentials");

      }

    } catch (error) {

      console.error(error);

      alert("Server error");

    }

  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-white">

      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-500 text-xl"
      >
        <FaSignOutAlt/>
      </Link>

      <div className="flex bg-green-700 p-8 rounded shadow-lg">

        <img
          src="https://i.pinimg.com/originals/9a/a6/12/9aa612d9c56c38e14b009f2184b67039.jpg"
          alt="login"
          className="w-64 h-80 mr-8"
        />

        <form
          onSubmit={handleSubmit}
          className="w-64"
        >

          <h2 className="text-2xl font-bold mb-4 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-2 mb-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded"
          />

          <button className="w-full bg-red-400 hover:bg-red-600 text-white py-2 rounded">
            Login
          </button>

          <p className="text-sm text-gray-200 mt-3">
            Don't have an account?
            <button
              onClick={()=>navigate("/usignup")}
              className="text-red-300 ml-2"
            >
              Signup
            </button>
          </p>

        </form>

      </div>

    </div>

  );

};

export default Ulogin;