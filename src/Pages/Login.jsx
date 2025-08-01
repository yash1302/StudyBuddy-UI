import React from "react";
import { FaFacebook, FaGoogle, FaApple, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#F9F5FB" }}
    >
      <div
        className="w-full max-w-sm p-8 rounded-2xl shadow-xl"
        style={{ backgroundColor: "#CBB2EE" }}
      >
        <h2
          className="text-center text-3xl font-bold mb-2"
          style={{ color: "#5B21B6" }}
        >
          Sign In
        </h2>
        <p className="text-center text-sm mb-6" style={{ color: "#5B21B6" }}>
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold underline"
            style={{ color: "#5B21B6" }}
          >
            Sign Up
          </a>
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 transition-shadow"
              style={{ backgroundColor: "#DDD3EF", color: "#5B21B6" }}
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-700 transition-shadow"
              style={{ backgroundColor: "#DDD3EF", color: "#5B21B6" }}
              placeholder="Password"
            />
          </div>
          <div className="text-right text-sm">
            <a
              href="#"
              className="font-semibold underline"
              style={{ color: "#5B21B6" }}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold transition-colors"
            style={{ backgroundColor: "#7C3AED", color: "#FFFFFF" }}
          >
            Continue
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-purple-400"></div>
          <span className="mx-4 text-sm font-light text-purple-700">
            Or Continue with
          </span>
          <div className="flex-grow border-t border-purple-400"></div>
        </div>

        <div className="flex justify-center space-x-6">
          <button className="text-2xl text-purple-700 hover:text-purple-900 transition-colors">
            <FaFacebook />
          </button>
          <button className="text-2xl text-purple-700 hover:text-purple-900 transition-colors">
            <FaGoogle />
          </button>
          <button className="text-2xl text-purple-700 hover:text-purple-900 transition-colors">
            <FaApple />
          </button>
          <button className="text-2xl text-purple-700 hover:text-purple-900 transition-colors">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
