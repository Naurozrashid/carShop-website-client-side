import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../SharedComponents/ProductCard/ProductCard";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://carshop-website-server-side.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="margin-top">
        <Container>
          <h2 className="my-3">Total CAR : {products.length}</h2>
          <Row xs={1} sm={2} md={3} className="g-2">
            {products.map((data) => (
              <ProductCard key={data._id} info={data}></ProductCard>
            ))}
          </Row>
        </Container>
        {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((data) => (
          <ProductCard key={data._id} Info={data}></ProductCard>
        ))}
      </div> */}
      </div>
    </>
  );
};

export default ExploreProducts;
