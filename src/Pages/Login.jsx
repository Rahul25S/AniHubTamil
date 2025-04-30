import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../assets/profile.png";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import { combinedValidate } from "./Helper/validate";
import background from "../assets/background.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: combinedValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post("https://final-anihub-backend-1.onrender.com/api/login", values);
        toast.success("Login Successful!");

        // Store user data in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirect to home page
        navigate("/");

        // Reload the page to update Navbar immediately
        window.location.reload();  
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-black"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Log In</h2>
        <h2 className="text-center">Hello Again!</h2>
        <div className="profile flex justify-center py-4">
          <img className="border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-200" src={avatar} alt="User avatar" />
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            {...formik.getFieldProps("email")}
            type="email"
            placeholder="Enter your Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            {...formik.getFieldProps("password")}
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full py-2 mt-2 text-white bg-green-500 rounded hover:bg-green-600" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="text-center py-4">
          <span className="text-gray-700">New to Ani Hub Tamil? </span>
          <Link to="/signup" className="py-2 mt-4 text-blue-700">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
