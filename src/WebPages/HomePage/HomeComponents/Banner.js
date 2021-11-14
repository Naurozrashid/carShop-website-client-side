import React from "react";
import "./HomeComponents.css";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <section
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item banner1 active py-5">
          <div className="text-center caption py-2 my-5">
            <div className=" my-5">
              <h3>Welcome to GarirBazar</h3>
              <h4>Lets Help you get your next car!</h4>
              <NavLink to="/explore" className="nav-link ">
                <button className=" btn brdr font-color5rounded-pill border-3 border-info py-2 px-5 btn-explore fw-bold font-color5 my-5">
                  Explore More <i className="fas fa-arrow-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="carousel-item banner2 py-5">
          <div className="text-center caption py-2 my-5">
            <div className=" my-5">
              <h3>Find Your Next Match</h3>
              <h4>Lets Help you get your next car!</h4>
              <NavLink to="/explore" className="nav-link ">
                <button className="btn brdr font-color5 rounded-pill border-3 border-info py-2 px-5 btn-explore fw-bold font-color5 my-5">
                  Explore More <i className="fas fa-arrow-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="carousel-item banner3 py-5">
          <div className="text-center caption py-2  my-5">
            <div className=" my-5">
              <h3>Find Your Perfect Car</h3>
              <h4>Lets Help you get your next car!</h4>
              <NavLink to="/explore" className="nav-link ">
                <button className="btn brdr font-color5 rounded-pill border-3 border-info py-2 px-5 btn-explore fw-bold font-color5 my-5">
                  Explore More <i className="fas fa-arrow-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Banner;
