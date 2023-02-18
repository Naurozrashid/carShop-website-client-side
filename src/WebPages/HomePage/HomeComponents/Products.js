import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../../../SharedComponents/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://carshop-website-server-side.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  });
  return (
    <section className="my-5">
      <div>
        <div className="text-center">
          <h1 className="mt-5">Most Featured Cars in The World in 2021</h1>
          <p className="text-warning">FEATURED CARS</p>
        </div>
        <Container>
          <Row xs={1} sm={2} md={3} className="g-2">
            {products.slice(0, 6).map((data) => (
              <ProductCard key={data._id} info={data}></ProductCard>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Products;
