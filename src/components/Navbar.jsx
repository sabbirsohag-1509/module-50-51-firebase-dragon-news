import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "./../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOutInfo } = use(AuthContext);

  const logOutHandler = () => {
    logOutInfo()
      .then(() => {
        alert("LogOut Successfully");
      })
      .catch((error) => {
        alert("LogOut error", error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 font-semibold text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {user && (
          <>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/exploreNews">Explore More News</NavLink>
            <NavLink to="/bbcNews">BBC News</NavLink>
            <NavLink to="/internationalNews">International News</NavLink>
          </>
        )}
      </div>
      <div className="login-btn flex items-center gap-3 mr-5">
        <img className="w-10 rounded-full object-cover" src={`${user? user.photoURL: userImg}`} alt="" />
        {user ? (
          <button onClick={logOutHandler} className="btn btn-primary px-5">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn btn-primary px-5">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
