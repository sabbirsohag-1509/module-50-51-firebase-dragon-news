import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const { registerInfo, updatedUserInfo } = use(AuthContext);
  const navigate = useNavigate();

  const registerHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Step 1: Create user
    registerInfo(email, password)
      .then((result) => {
        const user = result.user;
        // console.log("User created:", user);

        // Step 2: Update profile
        updatedUserInfo({ displayName: name, photoURL: photo })
          .then(() => {
            alert("Profile updated successfully");
            navigate("/"); // redirect to home after registration
          })
          .catch((error) => {
            // console.log( error.message);
            alert("Profile update error:",error.message);
          });
      })
      .catch((error) => {
        // console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
        <div className="card-body">
          <form onSubmit={registerHandler}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Your name" required />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input" placeholder="Photo URL" />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>

              <p className="text-gray-700 pt-5">
                Already have an Account?{" "}
                <Link className="text-secondary hover:underline" to="/auth/login">
                  Login
                </Link>{" "}
                here.
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
