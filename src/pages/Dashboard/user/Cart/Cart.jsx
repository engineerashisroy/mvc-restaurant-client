import React from "react";
import useCart from "../../../../hooks/useCart";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const Cart = () => {
  const [cart, refetch] = useCart();

  //   console.log(cart);
  const totalPrice = cart.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("deleted item", id);
        axiosSecure.delete(`/api/v1/carts/${id}`).then((res) => {
          //   console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex gap-3 justify-around bg-green-300 py-3 items-center text-2xl">
        <h2>Total Order :{cart.length}</h2>
        <h3>Total Price :{totalPrice}</h3>
        <button className="btn btn-primary px-10">Pay </button>
      </div>
      <div className="pl-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={item.image} alt="item" className="w-10 h-10" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className="text-red-600 text-3xl hover:cursor-pointer">
                    <button onClick={() => handleDelete(item._id)}>
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
