import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from './Helper/validate';
import background from "../assets/background.png";
import convertToBase64 from './Helper/convert';

const Signup = () => {
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: (values) => {
      const validationErrors = registerValidation(values);
      setErrors(validationErrors);
      return validationErrors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = { ...values, profile: file || '' };

      if (Object.keys(errors).length === 0) {
        try {
          const response = await fetch('https://final-anihub-backend-1.onrender.com/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });

          const data = await response.json();

          if (response.ok) {
            toast.success("Signup successful!");
            console.log("User registered:", data);
          } else {
            toast.error(data.message || "Signup failed");
          }
        } catch (error) {
          toast.error("Something went wrong!");
          console.error("Signup error:", error);
          console.log(values);
        }
      } else {
        console.log("Form submission prevented due to validation errors.");
      }
    }
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  
  

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-black"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <Toaster position='top-center' reverseOrder={false} />
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <h2 className='text-center text-gray-600'>Register</h2>

        <div className='profile flex justify-center py-4'>
          <label htmlFor="profile">
            <img
              className='border-4 border-gray-100 w-[135px] h-[135px] rounded-full shadow-lg cursor-pointer hover:border-gray-300'
              src={file || avatar}
              alt="User avatar"
            />
          </label>
          <input 
            onChange={onUpload} 
            type='file' 
            id='profile' 
            name='profile' 
            style={{ display: 'none' }} 
            accept="image/*"
          />
        </div>

        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <div>
            <input
              {...formik.getFieldProps('email')}
              type="email"
              placeholder="Enter your email*"
              aria-label="Email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              {...formik.getFieldProps('username')}
              type="text"
              placeholder="Enter your username*"
              aria-label="Username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          <div>
            <input
              {...formik.getFieldProps('password')}
              type="password"
              placeholder="Enter your password*"
              aria-label="Password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button
            type='submit'
            className="w-full py-2 mt-2 text-white bg-green-500 rounded hover:bg-green-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <div className='text-center py-4'>
          <span className='text-gray-700'>Already have an account? </span>
          <Link to="/login" className="text-blue-700 hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
