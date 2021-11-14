import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import defaultImage from "../../../images/defaultUser.png";
const UsersReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://obscure-coast-47054.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  /*  const rate = parseFloat(reviews?.rating)
    console.log(rate) */
  return (
    <div className="py-3 text-center">
      <h1 className="mt-2 mb-5">USER REVIEW SECTION</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map((review) => (
          <div key={review._id} className="col">
            <div className="card h-100 border-0">
              <div className="text-center">
                {review.photoURL ? (
                  <img
                    style={{ width: "70px" }}
                    src={review.photoURL}
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                ) : (
                  <img
                    style={{ width: "70px" }}
                    src={defaultImage}
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{review.FullName}</h5>
                <Rating
                  className="text-warning"
                  initialRating={review?.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                ></Rating>
                <p className="card-text">{review.reviewText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersReview;
