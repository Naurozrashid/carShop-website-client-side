import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-coast-47054.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  });

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this product?"
    );
    if (proceed) {
      const productsUrl = `https://obscure-coast-47054.herokuapp.com/products/${id}`;
      fetch(productsUrl, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully!");
            const remainingProducts = allProducts.filter(
              (userOrder) => userOrder._id !== id
            );
            setAllProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div className="margin-top">
      <Container>
        <h2 className="my-3">Total Products : {allProducts.length}</h2>
        <Row xs={1} sm={1} md={4} className="g-2">
          {allProducts.map((data) => (
            <Col className="px-3 py-5">
              <Card className="h-100 border-0 card-shadow card-frame">
                <div className="overflow-hidden">
                  <Card.Img
                    variant="top"
                    className="img img-fluid"
                    src={data.img}
                  />
                </div>
                <Card.Body className="py-0">
                  <Card.Text className="m-0">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <h3 className="text-danger m-0">${data.price}</h3>
                      <div className="d-flex">
                        <Rating
                          className="d-flex"
                          initialRating={data.rating}
                          emptySymbol="far fa-star rating-color"
                          fullSymbol="fas fa-star rating-color"
                          readonly
                        />
                        <h5 className="fw-bold me-2 mb-0">({data.rating})</h5>
                      </div>
                    </div>
                  </Card.Text>
                  <Card.Title>
                    <i className="fas fa-car me-2"></i>
                    {data.carName}
                  </Card.Title>
                </Card.Body>
                <Button
                  onClick={() => handleDeleteProduct(data._id)}
                  className="btn btn-danger"
                >
                  <i className="fas fa-trash-alt me-2"></i>Delete This Product
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProducts;
