import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ourPortfolio">Our Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/ourTeam">Our Team</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar pt-5 bg-[#FFF8F5]">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg">
          <img src={logo} />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg pr-10">{links}</ul>
      </div>
      <div className="nav-btn md:hidden navbar-end">
        <a className="btn bg-[#F63E7B] text-white px-10 py-4">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
