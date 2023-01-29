import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
        <div className="container ">
          <Link to={"/"} className="navbar-brand">
            <i className="fa fa-mobile text-warning me-2" />
            Article
          </Link>
        </div>
        <div className="container">
          <Link onClick={handleLogout} className="navbar-brand">
            <i className=" text-dark me-2" />
            Log-out
          </Link>
        </div>
        <div className="container">
          <Link to={"/login"} className="navbar-brand">
            <i className=" text-dark me-2" />
            Log-in
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
