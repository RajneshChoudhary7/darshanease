import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import Anavbar from "./Anavbar";

function Ahome() {

  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [temples, setTemples] = useState([]);
  const [darshans, setDarshans] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:7000/user/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:7000/organizer/organizers")
      .then((res) => setVendors(res.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:7000/organizer/gettemples")
      .then((res) => setTemples(res.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:7000/organizer/getdarshans")
      .then((res) => setDarshans(res.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:7000/user/getbookings")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));

  }, []);

  const totalUsers = users.length;
  const totalorganizers = vendors.length;
  const totaltemples = temples.length;
  const totaldarshans = darshans.length;
  const totalOrders = orders.length;

  const data = [
    { name: "Users", value: totalUsers },
    { name: "Organizers", value: totalorganizers },
    { name: "Temples", value: totaltemples },
    { name: "Darshans", value: totaldarshans },
    { name: "Bookings", value: totalOrders }
  ];

  return (
    <div>

      <Anavbar />

      <div className="container mt-4">

        <h2 className="text-center mb-4 fw-bold">Admin Dashboard</h2>

        {/* STAT CARDS */}

        <div className="row g-4">

          <div className="col-md-2">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div className="card text-center shadow-lg border-0" style={{ background: "#7b2cbf", color: "white" }}>
                <div className="card-body">
                  <h5>Users</h5>
                  <h2>{totalUsers}</h2>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-2">
            <Link to="/organizers" style={{ textDecoration: "none" }}>
              <div className="card text-center shadow-lg border-0" style={{ background: "#008b8b", color: "white" }}>
                <div className="card-body">
                  <h5>Organizers</h5>
                  <h2>{totalorganizers}</h2>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-2">
            <Link to="/organizers" style={{ textDecoration: "none" }}>
              <div className="card text-center shadow-lg border-0" style={{ background: "#ff7f50", color: "white" }}>
                <div className="card-body">
                  <h5>Temples</h5>
                  <h2>{totaltemples}</h2>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-2">
            <Link to="/organizers" style={{ textDecoration: "none" }}>
              <div className="card text-center shadow-lg border-0" style={{ background: "#ff9800", color: "white" }}>
                <div className="card-body">
                  <h5>Darshans</h5>
                  <h2>{totaldarshans}</h2>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-2">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div className="card text-center shadow-lg border-0" style={{ background: "#28a745", color: "white" }}>
                <div className="card-body">
                  <h5>Bookings</h5>
                  <h2>{totalOrders}</h2>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* CHART */}

        <div className="card shadow-lg border-0 mt-5 p-4">

          <h4 className="text-center mb-3">Platform Statistics</h4>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4e73df" barSize={50} />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Ahome;