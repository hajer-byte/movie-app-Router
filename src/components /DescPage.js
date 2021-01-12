import React from "react";
import Iframe from "react-iframe";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
const DescPage = ({ movie }) => {
  const { id } = useParams();
  const moviee = movie.find((el) => el.id == id);
  return (
    <div className="container">
      <Card style={{ width: "600px", height: "500px" }}>
        <Card.Header as="h5">Movie details</Card.Header>
        <Card.Body>
          <Card.Title> {moviee && moviee.title} </Card.Title>
          <Iframe
            url={moviee && moviee.trailer}
            width="200px"
            height="200px"
            id="myId"
            className=""
            display="initial"
            position="relative"
          />
          <Card.Text>{moviee && moviee.description}</Card.Text>
          <button
            variant="primary"
            className="text-decoration-none btn btn-warning ml-5 mt-2"
          >
            <Link to="/">Back Home</Link>
          </button>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};
export default DescPage;
