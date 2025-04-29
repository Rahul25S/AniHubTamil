import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import MovieBox from "../Components/MovieBox";
import { movieData } from "../Components/MovieData";

const animatedTexts = ["勇気 (Courage)", "友情 (Friendship)", "夢 (Dream)", "力 (Power)", "希望 (Hope)"];



const Profile = () => {
  const navigate = useNavigate();
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // Check if the user is logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []); 
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <><div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-20">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-0 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-slideDown">
        {animatedTexts[currentTextIndex]}
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center z-10 animate-fadeInUp">
        <h1 className="text-4xl mt-10 md:text-6xl font-extrabold mb-10 tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-zoomIn">
          Welcome, {user?.username || "Loading..."}
        </h1>

        {user ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-transform hover:scale-105 hover:rotate-1">
            <div className="flex flex-col items-center">
              {user.profile ? (
                <img
                  src={user.profile}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-6 object-cover shadow-xl border-4 border-purple-400 animate-pop"
                />
              ) : (
                <div className="w-32 h-32 rounded-full mb-6 bg-gray-500 flex items-center justify-center text-4xl font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{user.username}</h2>
              <p className="text-gray-300">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500 mb-4"></div>
            <p className="text-lg">Loading account details...</p>
          </div>
        )}
      </div>
    </div>
    <nav className="w-full p-4 flex items-center justify-end fixed mt-16 top-0 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg text-sm flex items-center"
        >
          <FaSignOutAlt size={20} className="mr-2" />
          Logout
        </button>
        </nav>
    </>
  );
};

export default Profile;
