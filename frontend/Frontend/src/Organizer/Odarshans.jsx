import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Onavbar from "./Onavbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./organizer.css";

const Odarshans = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchDarshans = async () => {

      try {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
          console.log("User not found");
          return;
        }

        const response = await axios.get(
          `http://localhost:7000/organizer/getdarshans/${user.id}`
        );

        setItems(response.data);

      } catch (error) {
        console.error("Error fetching darshans:", error);
      }

    };

    fetchDarshans();

  }, []);

  const deleteItem = async (id) => {

    try {

      await axios.delete(
        `http://localhost:7000/eventdelete/${id}`
      );

      alert("Darshan deleted");

      setItems(items.filter((item) => item._id !== id));

    } catch (error) {

      console.error("Delete error:", error);

    }

  };

  return (

    <div>

      <Onavbar />

      <div className="container mx-auto p-8">

        {/* Create Button */}

        <div className="flex justify-end mb-4">

          <Link to="/createdarshan">

            <Button
              style={{
                backgroundColor: "lightslategray",
                border: "none"
              }}
            >
              Create Darshan
            </Button>

          </Link>

        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">
          My Darshans
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (

            <div
              key={item._id}
              className="bg-white p-4 rounded shadow relative"
            >

              <button
                onClick={() => deleteItem(item._id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <FaTrash />
              </button>

              <p className="text-xl font-bold mb-2">
                {item.darshanName}
              </p>

              <p>
                <strong>Open:</strong> {item.open}
              </p>

              <p>
                <strong>Close:</strong> {item.close}
              </p>

              <p>
                <strong>Normal:</strong> {item?.prices?.normal}
              </p>

              <p>
                <strong>VIP:</strong> {item?.prices?.vip}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {item.description?.slice(0, 120)}...
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default Odarshans;