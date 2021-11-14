import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UseAuth from "../../../../Hooks/UseAuth";

const MyOrders = () => {
  const { user } = UseAuth();
  const [userOrders, setUserOders] = useState([]);

  useEffect(() => {
    fetch(`https://obscure-coast-47054.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setUserOders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete");
    if (proceed) {
      const url = `https://obscure-coast-47054.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully!");
            const remainingOrders = userOrders.filter(
              (userOrder) => userOrder._id !== id
            );
            setUserOders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Container className="my-3">
        <div>
          <h1 className="py-4">You have Ordered The Cars:</h1>
        </div>
        <div className="card mb-3 border-0">
          {userOrders
            .filter((order) => order.email.includes(user.email))
            .map((myOrder) => (
              <div key={myOrder.key} className=" mb-5 ">
                <div className="row g-0 border-bottom border-secondary">
                  <div className="col-md-3">
                    <img
                      src={myOrder.carImage}
                      className="img-fluid rounded  h-100"
                      alt="packege_image"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body py-0">
                      <div className="mb-2">
                        <p className="card-text m-0">
                          <small className="text-muted">
                            User ID : {myOrder.userId}
                          </small>
                        </p>
                        <h5 className="card-title">
                          Car Name : {myOrder.carName}
                        </h5>

                        <p className="card-text m-0">
                          <span className="fw-bold">Price:</span>
                          {myOrder.price}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Email:</span>
                          {myOrder.email}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Phone:</span>
                          {myOrder.phone}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Payment Type:</span>
                          {myOrder.paymentType}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Status:</span>
                          <span className="bg-warning rounded-pill px-2">
                            {myOrder.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-md-grid justify-content-around align-content-around mb-2">
                    <button
                      onClick={() => handleDeleteOrder(myOrder._id)}
                      className="btn btn-danger"
                    >
                      <i className="fas fa-backspace"></i> Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default MyOrders;
