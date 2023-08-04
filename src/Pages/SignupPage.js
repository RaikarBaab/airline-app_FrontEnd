import React from "react";

import { Button } from "@nextui-org/react";

const SignupPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/Signup.jpg")`,

        backgroundRepeat: "no-repeat",

        backgroundSize: "100%",
      }}
      className="container"
    >
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center ">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>

        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left"></div>

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            style={{ marginBottom: "7px", color: "black" }}
          />

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            style={{ marginBottom: "7px", color: "black" }}
          />

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Confirm Password"
            style={{ marginBottom: "7px", color: "black" }}
          />

          <div className="text-center ">
            <Button color="primary" variant="solid">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
