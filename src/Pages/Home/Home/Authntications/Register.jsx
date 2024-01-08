import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col ">
        <div className="card rounded shrink-0 p-4 w-[350px] md:w-[570px] border-2  border-[#ABABAB]">
          <h1 className="text-2xl font-bold text-[#000]">Create an account</h1>
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                className="input border-[#C5C5C5]  text-xl text-[#000] font-semibold border-b-4"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                className="input border-[#C5C5C5]  text-xl text-[#000] font-semibold border-b-4"
                required
              />
            </div>

            <div className="form-control">
              <input
                type="email"
                placeholder="User Name or Email"
                className="input border-[#C5C5C5]  text-xl text-[#000] font-semibold border-b-4"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="Password"
                className="input border-[#C5C5C5]  text-xl text-[#000] font-semibold border-b-4"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#F63E7B] text-xl font-semibold text-white">
                Create an account
              </button>
            </div>
            <p className="text-center font-bold">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-[#F63E7B]">Login</span>
              </Link>
            </p>
          </form>
        </div>
        <h4>Or</h4>
        <div className="socail_Login">
          <button className="btn bg-white  text-lg font-semibold md:px-20  rounded-full border-2 border-[#C7C7C7] ">
            <span>
              <FaFacebook className="bg-[#3076FF]  text-[#fff] rounded-full w-8 h-8"></FaFacebook>
            </span>
            Continue with Facebook
          </button>
        </div>
        <div className="socail_Login">
          <button className="btn bg-white  text-lg font-semibold md:px-20  rounded-full border-2 border-[#C7C7C7] ">
            <span>
              <FaGoogle className=" rounded-full w-8 h-8"></FaGoogle>
            </span>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
