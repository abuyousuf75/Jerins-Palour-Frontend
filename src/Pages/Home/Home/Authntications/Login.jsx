import { FaGoogle } from "react-icons/fa";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="lg:pt-28 md:pt-10 pt-6">
      <div className="flex justify-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="md:mt-20 mt-6">
        <h2 className="text-center text-[#000000] text-2xl font-bold">
          Login With
        </h2>
      </div>
      <div className="socail_Login text-center md:mt-8 mt-4">
        <button className="btn bg-white  text-lg font-semibold md:px-20  rounded-full border-2 border-[#C7C7C7] ">
          <span>
            <FaGoogle className=" rounded-full w-8 h-8"></FaGoogle>
          </span>
          Continue with Google
        </button>
        <p className="mt-4 text-xl font-semibold">
          Don’t have an account?{" "}
          <Link to="/register">
            <span className="text-[#F63E7B]">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
