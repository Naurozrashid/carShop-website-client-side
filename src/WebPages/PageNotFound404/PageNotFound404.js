import React from "react";
import { Link } from "react-router-dom";
import NotFoundPage from "../../images/pageNotFound404.png";

const PageNotFound_404 = () => {
  return (
    <div className="text-center">
      <img className="img-fluid" src={NotFoundPage} alt=""/>
      <div className="d-flex card-img-overlay justify-content-start">
        <Link to="/home">
          <button className="fw-bold btn btn-danger my-4 button">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound_404;
