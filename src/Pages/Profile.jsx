import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import MovieBox from "../Components/MovieBox";
import { movieData } from "../Components/MovieData";

const Profile = () => {
  const navigate = useNavigate();
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if the user is logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  // Fetch liked movies from the API
  // useEffect(() => {
  //   const fetchLikedMovies = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         setLoading(false);
  //         return;
  //       }

  //       const response = await axios.get("/api/liked-movies", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });

  //       console.log("Fetched Liked Movies:", response.data);
  //       setLikedMovies(response.data);
  //     } catch (error) {
  //       console.error("Error fetching liked movies:", error.response?.data || error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLikedMovies();
  // }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-20">
      <nav className="w-full p-4 flex items-center justify-end fixed z-50 bg-gray-800">
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg text-sm flex items-center"
        >
          <FaSignOutAlt size={20} className="mr-2" />
          Logout
        </button>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-8" >L</h1>   
        <h1 className="text-2xl md:text-4xl font-bold mb-8" >Account Details</h1>    
      </div>
    </div>
  );
};

export default Profile;
