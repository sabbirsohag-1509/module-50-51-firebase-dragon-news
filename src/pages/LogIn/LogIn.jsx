import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const { loginInfo } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location)

  const logInHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginInfo(email, password)
      .then(result => {
        console.log(result.user);
        // if (location.state) {
        //   navigate(location.state)
        // } else {
        //   navigate('/');
        // }
        navigate(location?.state || '/');
      })
      .catch(error => {
        // console.log(error.message);
        setError("Something went wrong or Wrong Password", error.message);
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={logInHandler}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password"  required/>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              {
                error && <p className="text-red-600 font-semibold text-sm">{ error }</p>
              }

              <p className="text-gray-700 pt-5 ">
                Don't have an Account? <Link className="text-secondary hover:underline" to="/auth/registration"> Register </Link>
                here. </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
