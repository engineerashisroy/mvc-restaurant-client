import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import login from "../../assets/others/login.png";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "User Login Successfully !",
        icon: "success",
        background: "#fff",
        confirmButtonColor: "#5B6EF5",
      });

      navigate(from, { replace: true });
    });
  };

  return (
    <div className="min-h-screen bg-[#eef2ff] flex items-center justify-center px-4 py-10 overflow-hidden">
      <Helmet>
        <title>Log In</title>
      </Helmet>

      <div className="w-full max-w-6xl rounded-[30px] overflow-hidden shadow-2xl bg-white grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative bg-gradient-to-br from-[#5B6EF5] to-[#6d7dff] text-white p-10 md:p-16 flex flex-col justify-center overflow-hidden">
          
          {/* Decorative Circles */}
          <div className="absolute w-72 h-72 rounded-full bg-white/10 -bottom-24 -left-24"></div>
          <div className="absolute w-52 h-52 rounded-full bg-cyan-300/20 -top-20 -right-20"></div>
          <div className="absolute w-24 h-24 rounded-full border-4 border-cyan-300/40 bottom-10 right-10"></div>

          {/* Login Image */}
          <div className="relative z-10 flex justify-center mb-10">
            <img
              src={login}
              alt="Login"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>

          {/* Left Content */}
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight mb-5">
              Adventure <br /> start here
            </h1>

            <p className="text-blue-100 text-lg leading-7 max-w-md">
              Create and account to Join Our Community
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f8f9ff] flex items-center justify-center p-6 md:p-14">
          <div className="w-full max-w-md">
            
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#5B6EF5] to-cyan-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                A
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
              Hello ! Welcome back
            </h2>

            <p className="text-center text-gray-500 mb-8">
              Login to continue your journey
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#5B6EF5] focus:ring-4 focus:ring-[#5B6EF5]/10 transition-all duration-300"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#5B6EF5] focus:ring-4 focus:ring-[#5B6EF5]/10 transition-all duration-300"
                  required
                />
              </div>

              {/* Captcha */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <LoadCanvasTemplate />
              </div>

              {/* Captcha Input */}
              <div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#5B6EF5] focus:ring-4 focus:ring-[#5B6EF5]/10 transition-all duration-300"
                  required
                  onBlur={handleValidateCaptcha}
                />
              </div>

              {/* Login Button */}
              <div className="pt-2">
                <input
                  type="submit"
                  value="Login"
                  disabled={disable}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    disable
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#5B6EF5] to-[#6d7dff] hover:scale-[1.02] text-white shadow-lg cursor-pointer"
                  }`}
                />
              </div>
            </form>

            {/* Signup */}
            <p className="text-center text-gray-500 mt-8">
              New here ?{" "}
              <Link
                to="/signup"
                className="text-[#5B6EF5] font-semibold hover:underline"
              >
                Create and Account
              </Link>
            </p>

            {/* Social Login */}
            <div className="mt-8">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;