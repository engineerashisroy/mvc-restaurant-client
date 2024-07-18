import React, { useContext, useEffect, useRef, useState } from "react";
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
  // const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // let from = location.state?.from?.pathname || "/";
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
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successfully !",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Helmet>
        <title>Log In </title>
      </Helmet>
      <div className="md:flex w-full container mx-auto mt-20">
        <div className="md:w-1/2">
          <div className="text-center">
            <img src={login} alt="Login" />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control border rounded-md p-2">
              <div>
                <LoadCanvasTemplate />
              </div>
            </div>
            <div className="form-control">
              <input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                className="input input-bordered"
                required
                // ref={captchaRef}
                onBlur={handleValidateCaptcha}
              />
              <div className="form-control mt-6">
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline"
                >
                  Validate
                </button> */}
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                disabled={disable}
                className="btn btn-primary hover:bg-purple-500 hover:text-black text-2xl"
              />
            </div>
          </form>
          <p className="text-yellow-600 text-2xl text-center">
            <small>
              New here ?{" "}
              <Link
                to="/signup"
                className="text-green-500 hover:underline hover:text-green-400 cursor-pointer"
              >
                Create and Account
              </Link>
            </small>
          </p>
        </div>
      </div>
      <div className="">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
