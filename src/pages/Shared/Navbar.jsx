import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
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
        <Link 
          to="/" 
          className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link 
          to="/our-menu" 
          className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
        >
          Our Menu
        </Link>
      </li>
      <li>
        <Link 
          to="/order/salad" 
          className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
        >
          Order Food
        </Link>
      </li>
      <li>
        <Link 
          to="/dashboard/cart" 
          className="hover:text-amber-400 transition-colors duration-200 py-2 px-3 flex items-center gap-1 group relative"
        >
          <div className="relative p-1.5 bg-white/10 rounded-full group-hover:bg-amber-400/20 transition-colors">
            <MdOutlineAddShoppingCart className="text-xl" />
            <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border border-slate-900 shadow-sm animate-pulse">
              {cart.length}
            </span>
          </div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <Link className="text-amber-400 font-semibold py-2 px-3 block lg:inline cursor-default">
              {user?.displayName}
            </Link>
          </li>
          <li>
            <Link 
              onClick={handleLogOut} 
              className="hover:text-red-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
            >
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link 
            to="/login" 
            className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
          >
            Login
          </Link>
        </li>
      )}
      
      {user && (
        <li>
          <Link 
            to="/dashboard" 
            className="hover:text-amber-400 font-medium transition-colors duration-200 py-2 px-3 block lg:inline"
          >
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 h-20 text-white">
        
        {/* Navbar Start: Logo & Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost p-2 text-white hover:bg-white/10 lg:hidden rounded-lg mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content mt-3 z-[50] p-4 shadow-xl bg-slate-900/95 backdrop-blur-lg rounded-xl w-64 border border-white/10 space-y-1 text-slate-200"
            >
              {navItem}
            </ul>
          </div>
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl font-bold tracking-wide text-white hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            AS Restaurant
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2 px-1">
            {navItem}
          </ul>
        </div>

        {/* Navbar End: Dynamic Action Button */}
        <div className="navbar-end">
          <a className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-900 font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 text-sm tracking-wider uppercase cursor-pointer">
            Button
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;