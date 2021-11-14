import React from "react";
import "./Dashboard.css";
import { Switch, Route, NavLink, Link, useRouteMatch } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import AddProduct from "./DashboardComponents/AddProduct/AddProduct";
import ManageOrders from "./DashboardComponents/ManageOrders/ManageOrders";
import MyOrders from "./DashboardComponents/MyOrders/MyOrders";
import PaymentGatway from "./DashboardComponents/PaymentGatway/PaymentGatway";
import logo from "../../images/logo.png";
import Review from "./DashboardComponents/Review/Review";
import ManageProducts from "./DashboardComponents/ManageProducts/ManageProducts";
import MakeAdmin from "./DashboardComponents/MakeAdmin/MakeAdmin";

const Dashboard = () => {
  const { admin, logOut } = UseAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 side-bar-bg">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
              <NavLink
                to="/dashboard"
                className="d-flex align-items-center fw-bold pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <img
                  className="img-fluid"
                  style={{ width: "40px" }}
                  src={logo}
                  alt=""
                />
                <span className="fs-5 d-none d-sm-inline">Deshboard</span>
              </NavLink>

              {!admin ? (
                <ul
                  className="nav flex-column mt-4 mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to="/home"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-home"></i>
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/my_orders`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-receipt"></i>
                      <span className="ms-1 d-none d-sm-inline">My Orders</span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/payment_gatway`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fab fa-paypal"></i>
                      <span className="ms-1 d-none d-sm-inline">Payment</span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/review`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="far fa-comment-alt"></i>
                      <span className="ms-1 d-none d-sm-inline">Review</span>
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul
                  className="nav flex-column mt-4 mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to="/home"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-home"></i>
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/manage_orders`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-clipboard-list"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Manage All Orders
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/manage_products`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-table"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Manage Products
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/add_product`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-plus-square"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Add A Product
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item mb-2">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "Yellow",
                      }}
                      style={{ color: "white" }}
                      to={`${url}/make_admin`}
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fas fa-user-shield"></i>
                      <span className="ms-1 d-none d-sm-inline">
                        Make An Admin
                      </span>
                    </NavLink>
                  </li>
                </ul>
              )}

              <hr />
              <div className="nav-item pb-4">
                <Link to="/login">
                  <button
                    onClick={logOut}
                    className="btn btn-danger rounded-pill  fw-bold"
                  >
                    <span className="ms-1 d-none d-sm-inline">Logout</span>
                    <i className="ps-md-2 fas fa-sign-out-alt"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col py-3">
            <Switch>
              {/* for users */}
              {!admin ? (
                <Route exact path={path}>
                  <MyOrders></MyOrders>
                </Route>
              ) : (
                <Route exact path={path}>
                  <ManageOrders></ManageOrders>
                </Route>
              )}
              <Route path={`${path}/my_orders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/payment_gatway`}>
                <PaymentGatway></PaymentGatway>
              </Route>

              {/* for admin */}
              <Route path={`${path}/manage_orders`}>
                <ManageOrders></ManageOrders>
              </Route>
              <Route path={`${path}/add_product`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/manage_products`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route path={`${path}/make_admin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
