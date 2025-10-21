import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { gitHubLoginInfo, googleLoginInfo } = use(AuthContext);

  // gitHub login handler
  const gitHubHandler = () => {
    gitHubLoginInfo()
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // google login handler
  const googleHandler = () => {
    googleLoginInfo()
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" mt-8 ">
      <h1 className="font-semibold">Login With</h1>
      <div className="space-y-4 mt-4">
        {/* Google */}
        <button
          onClick={googleHandler}
          className="btn w-full bg-white text-black border-[#e5e5e5]"
        >
          <FcGoogle size={25} /> Login with Google
        </button>

        {/* GitHub */}
        <button
          onClick={gitHubHandler}
          className="btn w-full bg-white text-bla border-[#e5e5e5]"
        >
          <VscGithub size={25} /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
