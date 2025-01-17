import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/our-menu">Our Menu</Link>
      </li>

      <li>
        <Link to="/order/salad"> Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/cart" className="relative ">
          <MdOutlineAddShoppingCart className="text-2xl pr-2" />
          <div className="absolute top-1 right-1 ">+{cart.length}</div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link> {user?.displayName}</Link>
          </li>
          {/* <li>
            <Link>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </Link>
          </li> */}
          <li>
            <Link onClick={handleLogOut}> Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login"> Login</Link>
          </li>
        </>
      )}
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          AS Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
