import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';
import { AuthProvider } from './context/AuthContext';  // Import the AuthProvider
//import ProtectedRoute from './Components/ProtectedRoute';
import Onepiece from './Anime/onepiece'
import Sololeveling from './Anime/sololeveling';

import PageNotFound from './Pages/PageNotFound';
import SakamotoDays from './Anime/Sakamoto Days';
import BlueBox from './Anime/Blue Box';
import Dandadan from './Anime/Dandadan';
import WindBreaker from './Anime/Wind Breaker';
import Naruto from './Anime/Naruto';
import BlackClover from './Anime/Black Clover';
import ClassroomElite from './Anime/Classroom of the Elite';
import MyStar from './Anime/My Star';
//<ProtectedRoute></ProtectedRoute>
const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/onepiece" element={<Onepiece /> }/>
        <Route path="/sololeveling" element={<Sololeveling /> }/>
        <Route path="/Sakamoto Days" element={<SakamotoDays /> }/>
        <Route path="/Blue Box" element={<BlueBox /> }/>
        <Route path="/Dandadan" element={<Dandadan /> }/>
        <Route path="/Wind Breaker" element={<WindBreaker /> }/> 
        <Route path="/Naruto" element={<Naruto /> }/> 
        <Route path="/Black Clover" element={<BlackClover /> }/> 
        <Route path="/Classroom of the Elite" element={<ClassroomElite /> }/> 
        <Route path="/My Star" element={<MyStar /> }/> 
        <Route path="/*" element={<PageNotFound />}/></Routes>
    </AuthProvider>
  );
};

export default App;
