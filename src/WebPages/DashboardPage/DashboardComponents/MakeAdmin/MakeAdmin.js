import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleMakeAdmin = (data) => {
    axios.put("https://obscure-coast-47054.herokuapp.com/users/admin", data).then((response) => {
      console.log(response);
      if (response.data.modifiedCount) {
        Swal.fire(
          "Completed",
          "your have successfully created an admin !",
          "success"
        );
        reset();
      }
    });
  };
  return (
    <>
      <div className="container">
        <div>
          <h1 className="pt-4 pb-2">Create a New Admin</h1>
        </div>
        <div className="card border-0 p-5 border-shadow mb-3">
          <form onSubmit={handleSubmit(handleMakeAdmin)}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter new admin email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" &&
              "Write a user email, it's required!"}

            <input
              style={{ backgroundColor: "yellow" }}
              className="btn rounded-pill py-2 px-4 mb-2 fw-bold"
              type="submit"
              value="Make Admin"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
