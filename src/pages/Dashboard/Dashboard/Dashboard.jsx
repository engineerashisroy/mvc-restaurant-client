import React from "react";
import { Helmet } from "react-helmet";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const Dashboard = () => {
  const [cart, refetch] = useCart();

  //todo :get isAdmin value from the database
  const [isAdmin] = useAdmin();
  // const isAdmin = true;
  console.log(isAdmin);
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="flex">
        <h2>Part One</h2>
        <div className="w-64 h-screen bg-yellow-100">
          <ul className="menu bg-base-200 w-full rounded-box">
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome />
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaUtensils />
                    Add Items
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <FaList />
                    Manage Items
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <FaBook />
                    Manage Bookings
                  </Link>
                </li>
                <li>
                  <Link to="users">
                    <FaUser />
                    All Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome />
                    User Home
                  </Link>
                </li>
                <li>
                  <Link to="reservation">
                    <FaCalendar />
                    Reservation
                  </Link>
                </li>

                <li>
                  <Link to="cart">
                    <RiShoppingCart2Line />
                    My Cart ({cart.length})
                  </Link>
                </li>
                <li>
                  <Link to="review">
                    <FaAd />
                    Add a Review
                  </Link>
                </li>
                <li>
                  <Link to="bookings">
                    <FaList />
                    My Bookings
                  </Link>
                </li>
              </>
            )}
            {/* shared nav link  */}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/order/salad">
                <FaSearch />
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FaEnvelope />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3>Part two</h3>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
