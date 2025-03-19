import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Login Page</h2>
      <form>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg w-64"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded-lg w-64"
            required
          />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </form>

      <p className="mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
