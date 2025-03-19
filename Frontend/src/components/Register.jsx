import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Register Page</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded-lg w-64"
            required
          />
        </div>
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
          Register
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Register;
    