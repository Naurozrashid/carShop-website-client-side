import axios from "axios";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import UseAuth from "../../../../Hooks/UseAuth";

const Review = () => {
  const { user } = UseAuth();
  /*  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (rate) => {
    setUserRating(rate);
    console.log(userRating);
    console.log(`Your rate is: ${rate}`);
  }; */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://obscure-coast-47054.herokuapp.com/reviews", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        Swal.fire("Thanks", "Your review has been Completed!", "success");
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  return (
    <div className="container">
      <div>
        <h1 className="pt-4 pb-2">Please Review about Our Products</h1>
      </div>
      <div className="card border-0 p-5 border-shadow mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              hidden
              value={user?.photoURL || " "}
              {...register("photoURL", { required: true })}
            />
            {/*  {user?.photoURL && (
              <input
                className="w-50 d-none"
                readOnly={true}
                {...register("img")}
                defaultValue={user?.photoURL}
                placeholder="image url"
              />
            )} */}
            <div>
              <label>Full Name</label>
              <input
                readOnly
                value={user?.displayName || " "}
                className="form-control mb-3"
                placeholder="Enter your Full Name"
                {...register("FullName", { required: true })}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input
                readOnly
                type="email"
                value={user?.email || " "}
                className="form-control mb-3"
                placeholder="Enter your Email Address"
                {...register("email", { required: true })}
              />
            </div>

            <div className="mb-4">
              <label>Review</label>
              <textarea
                className="form-control w-100"
                placeholder="write your review text..."
                {...register("reviewText", { required: true })}
              />
              {errors.reviewText?.type === "required" && (
                <span className="text-danger">
                  Write your review about ours products, it's required!
                </span>
              )}
            </div>
            <div>
              <label>Rating</label>
              <input
                type="number"
                step="0.01"
                max="5"
                className="form-control w-100"
                {...register("rating")}
                placeholder="enter your rating"
              />
            </div>

            {/*   <div>
              <label className="me-2">Reating :</label>
              <Rating
                hidden
                className="text-warning"
                onClick={handleRatingChange}
                initialRating={userRating}
                emptySymbol="far fa-star rating-color"
                fullSymbol="fas fa-star rating-color"
                {...register("rating")}
              />
              <input hidden value={userRating} {...register("rating")} />
            </div> */}
          </div>

          <input
            style={{ backgroundColor: "yellow" }}
            className="btn rounded-pill py-2 px-4 mb-2 fw-bold"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
