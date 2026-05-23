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

import {
  NavLink,
  Outlet,
} from "react-router-dom";

import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {

  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  // active + normal nav style
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-[#204C8C] text-white shadow-lg"
        : "text-white hover:bg-[#204C8C]"
    }`;

  return (
    <div className="bg-[#F4F7FE] min-h-screen overflow-hidden">
      
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <div className="flex">
        
        {/* ================= SIDEBAR ================= */}
        <div className="w-72 h-screen fixed top-0 left-0 z-50 px-4 py-5">
          
          <div className="h-full bg-gradient-to-b from-[#163B73] via-[#12356A] to-[#0E2C57] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Logo */}
            <div className="px-2 py-1 border-b border-white/10">
              
              <h1 className="text-2xl font-black text-white">
                AS
              </h1>

              <p className="text-blue-200 text-sm mt-2 tracking-[3px] uppercase">
                Restaurant Dashboard
              </p>
            </div>

            {/* Scrollable Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-5">
              
              <ul className="space-y-3">
                
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard"
                        end
                        className={navLinkClass}
                      >
                        <FaHome />
                        Admin Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="add-item"
                        className={navLinkClass}
                      >
                        <FaUtensils />
                        Add Items
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="menu-item-list"
                        className={navLinkClass}
                      >
                        <FaUtensils />
                        All Menu Items
                      </NavLink>
                    </li>

                    {/* <li>
                      <NavLink
                        to="/dashboard"
                        className={navLinkClass}
                      >
                        <FaList />
                        Manage Items
                      </NavLink>
                    </li> */}
{/* 
                    <li>
                      <NavLink
                        to="/dashboard"
                        className={navLinkClass}
                      >
                        <FaBook />
                        Manage Bookings
                      </NavLink>
                    </li> */}

                    <li>
                      <NavLink
                        to="users"
                        className={navLinkClass}
                      >
                        <FaUser />
                        All Users
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard"
                        end
                        className={navLinkClass}
                      >
                        <FaHome />
                        User Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="reservation"
                        className={navLinkClass}
                      >
                        <FaCalendar />
                        Reservation
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="cart"
                        className={navLinkClass}
                      >
                        <RiShoppingCart2Line />
                        My Cart ({cart.length})
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="review"
                        className={navLinkClass}
                      >
                        <FaAd />
                        Add a Review
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="bookings"
                        className={navLinkClass}
                      >
                        <FaList />
                        My Bookings
                      </NavLink>
                    </li>
                  </>
                )}

                {/* Divider */}
                <div className="border-t border-white/10 my-6"></div>

                {/* Shared Links */}
                <li>
                  <NavLink
                    to="/"
                    className={navLinkClass}
                  >
                    <FaHome />
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/order/salad"
                    className={navLinkClass}
                  >
                    <FaSearch />
                    Menu
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={navLinkClass}
                  >
                    <FaEnvelope />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

           
           
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 ml-72 p-6 overflow-y-auto h-screen">
          
          <div className="bg-white rounded-3xl min-h-full shadow-lg p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;