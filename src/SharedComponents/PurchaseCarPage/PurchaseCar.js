import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import PurchasePageTopBanner from "../../images/singleProduct_Banner.jpg";
import NavigationBar from "../NavigationBar/NavigationBar";
import OrderForm from "../OrderForm/OrderForm";

const PurchaseCar = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [singleCar, setSingleCar] = useState({});
  useEffect(() => {
    fetch("https://carshop-website-server-side.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const found = products.find((service) => service._id === productId);
    setSingleCar(found);
  }, [products, productId]);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="card bg-light text-dark mb-1 border-0">
        <img height="200" src={PurchasePageTopBanner} alt="..." />
        <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
          <h1 className="card-title fw-bold text-white">
            Purchase Your Dream CAR
            <br />
            {singleCar?.carName}
          </h1>
        </div>
      </div>

      <div className="container my-5">
        <div className="row ">
          <div className="col-12 col-md-8">
            <div className=" mb-3">
              <img src={singleCar?.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">{singleCar?.carName}</h1>
                <div>
                  <h3>
                    <span className="fw-bold text-danger">
                      ${singleCar?.price}
                    </span>
                  </h3>
                </div>
                <div>
                  <Rating
                    className="text-warning"
                    initialRating={singleCar?.rating}
                    emptySymbol="fas fa-star"
                    fullSymbol="fas text-warning fa-star"
                    readonly
                  />
                  {singleCar?.rating} ({singleCar?.totalReviews})
                </div>
                <div className="fw-bold card-text mt-3">Overview</div>
                <p className="">{singleCar?.description}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            {singleCar?.carName ? (
              <div className="card bg-custom text-white">
                <h3 className="fw-bold text-center my-3">
                  Order This Awesome Car
                </h3>
                <OrderForm
                  carId={productId}
                  carImage={singleCar?.img}
                  carName={singleCar?.carName}
                  price={singleCar?.price}
                ></OrderForm>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCar;
