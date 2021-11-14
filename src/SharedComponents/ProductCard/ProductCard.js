import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = (props) => {
  const { _id, img, carName, price, totalReviews, rating } = props.info;
  return (
    <Col className="px-3 py-5">
      <Card className="h-100 border-0 card-shadow card-frame">
        <div className="overflow-hidden">
          <Card.Img variant="top" className="img img-fluid" src={img} />
        </div>
        <Card.Body>
          <Card.Text className="">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="text-danger">${price}</h3>
              <div className="d-flex">
                <h5 className="fw-bold me-2 mb-0">{rating}</h5>
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star rating-color"
                  fullSymbol="fas fa-star rating-color"
                  readonly
                />
                <p className="ms-1 mb-0">({totalReviews})</p>
              </div>
            </div>
          </Card.Text>
          <Card.Title>
            <i className="fas fa-car me-2"></i>
            {carName}
          </Card.Title>
          <Link to={`/purchase_Car/${_id}`}>
            <Button className="text-white fw-bold btn brdr font-color5 w-100 py-1">
              Purchase Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
