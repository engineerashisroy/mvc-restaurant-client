import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("api/v1/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="flex justify-center text-center">
      <div className="w-1/2"></div>
      <div className="w-1/2 text-center  ">
        <div className="divider">OR</div>
        <button className="btn text-center w-1/2" onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle>
          <p>Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
