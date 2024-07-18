import React, { useContext } from "react";
import login from "../../assets/others/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log("user profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          //create user entry in the database
          axiosPublic.post("api/v1/users", userInfo).then((res) => {
            if (res.data) {
              console.log("User added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  // console.log(watch("name"));
  return (
    <div>
      <Helmet>
        <title>Sign Up </title>
      </Helmet>
      <div className="md:flex w-full container mx-auto mt-20">
        <div className="md:w-1/2">
          <div className="text-center">
            <img src={login} alt="Login" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter You Name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <p>
              {errors.name && (
                <span className="text-red-700">Name is required</span>
              )}
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Enter You photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <p>
              {errors.photoURL && (
                <span className="text-red-700">photoURL is required</span>
              )}
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
                required
              />
            </div>
            <p>
              {errors.email && (
                <span className="text-red-700">Email is required</span>
              )}
            </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p>
              {errors.password && (
                <span className="text-red-700">Password is required</span>
              )}
            </p>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary hover:text-black hover:bg-purple-700 text-2xl"
              />
            </div>
          </form>
          <p className="text-yellow-600 text-2xl text-center">
            <small>
              Have an Account ?
              <Link
                to="/login"
                className="text-green-500 hover:underline hover:text-green-400 cursor-pointer"
              >
                Please login
              </Link>
            </small>
          </p>
        </div>
      </div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
