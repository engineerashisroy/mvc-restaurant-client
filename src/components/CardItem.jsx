import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const CardItem = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  // console.log(name, price, recipe);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //todo send cart item to the database

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // console.log(user.email, cartItem);
      axiosSecure.post("/api/v1/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data) {
          let timerInterval;
          Swal.fire({
            title: `${name} added successfully !`,
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("cart item added successfully");
              refetch();
            }
          });
        }
      });
      //advanced method
    } else {
      Swal.fire({
        title: "You are not loging?",
        text: "Please login first and add to the cart !..",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", (state = { from: location }), replace);
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:">
        <figure className="px-10 pt-10 hover:scale-110 hover:transition-all">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <p className="bg-black absolute right-1 top-1 border-red-200 rounded-md hover:cursor-pointer hover:bg-yellow-300 hover:text-black text-white px-3 py-2">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
