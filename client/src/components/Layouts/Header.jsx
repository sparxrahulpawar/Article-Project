// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [loginUser, setLoginUser] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setLoginUser(user);
//     }
//   }, []);

//   const logoutHandler = () => {
//     localStorage.removeItem("user");

//     navigate("/login");
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link className="navbar-brand" to="/">
//               Article-App
//             </Link>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 {" "}
//                 <p className="nav-link">{loginUser && loginUser.name}</p>{" "}
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-primary" onClick={logoutHandler}>
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
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
