import React from "react";

import { Button } from "@nextui-org/react";

const LoginPage = () => {
  return (
    <div
      className="flex-custom"
      style={{
        backgroundImage: "url('Login.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
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
            className=" login-input text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />

          {/* <div className="mt-4 flex justify-between font-semibold text-sm">
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div> */}

          <div
            className="text-center md:text-left flex"
            style={{ alignItems: "center", columnGap: "70px" }}
          >
            <Button
              color="primary"
              variant="bordered"
              style={{ margin: "10px 0px" }}
            >
              Login
            </Button>
            <div
              className="mt-4 font-bold text-sm text-slate-500 text-center md:text-left"
              style={{ marginBottom: "10px" }}
            >
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="#"
              >
                Don't have an account? Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
