import React, { useState } from "react";
import Iframe from "react-iframe";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const DescPage = ({ movie }) => {
  const { id } = useParams();
  return (
    <div className="container">
      {movie
        .filter((card) => card.id === id)
        .map((card, index) => {
          <Card style={{ width: "600px", height: "500px" }}>
            <Card.Header as="h5">Movie details</Card.Header>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Iframe
                url={card.trailer}
                width="200px"
                height="200px"
                id="myId"
                className=""
                display="initial"
                position="relative"
              />
              <Card.Text className="description">{card.description}</Card.Text>
              <button
                variant="primary"
                className="text-decoration-none btn btn-warning ml-5 mt-2"
              >
                <Link to="/">Back Home</Link>
              </button>
            </Card.Body>
          </Card>;
        })}
    </div>
  );
};

export default DescPage;
