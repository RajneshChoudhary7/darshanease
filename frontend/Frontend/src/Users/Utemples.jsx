import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Unavbar from "./Unavbar";

const Utemples = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchTemples();
  }, []);

  const fetchTemples = async () => {

    try {

      const res = await axios.get(
        "http://localhost:7000/organizer/gettemples"
      );

      setItems(res.data);

    } catch (error) {

      console.error("Error fetching temples", error);

    }

  };

  return (
    <div style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}>

      <Unavbar />

      <div className="container py-5">

        <h2 className="text-center mb-4">
          Temples
        </h2>

        {items.length === 0 ? (

          <h5 className="text-center">
            No temples available
          </h5>

        ) : (

          <div className="row">

            {items.map((item) => (

              <div className="col-md-4 mb-4" key={item._id}>

                <Card className="shadow">

                  <Card.Img
                    variant="top"
                    src={`http://localhost:7000/organizer/${item.templeImage}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <Card.Body>

                    <Card.Title className="text-center text-danger">
                      {item.templeName}
                    </Card.Title>

                    <p className="text-center">
                      <b>Open:</b> {item.open} | <b>Close:</b> {item.close}
                    </p>

                    <p>
                      <b>Location:</b> {item.location}
                    </p>

                    <p>
                      {item.description?.slice(0, 120)}...
                    </p>

                    <div className="text-center">

                      <Button variant="primary">

                        <Link
                          to={`/utemple/${item._id}`}
                          style={{
                            color: "white",
                            textDecoration: "none"
                          }}
                        >
                          View
                        </Link>

                      </Button>

                    </div>

                  </Card.Body>

                </Card>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Utemples;