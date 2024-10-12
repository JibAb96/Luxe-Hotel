import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RoomsPage from "./components/Rooms-Page/RoomsPage";
import Layout from "./components/Layout/Layout";
import ViewRooms from "./components/View-Rooms/ViewRooms";
import About from "./components/About/About";
import LandingPage from "./components/Landing-Page/LandingPage";
import SignIn from "./components/Sign-In/SignIn";
import Register from "./components/Register/Register";
import Book from "./components/Book/Book";
import LogOut from "./components/Log-Out/LogOut";
import Profile from "./components/Profile/Profile";
import Reservations from "./components/Reservations/Reservations";
import { AlertProvider } from "./contexts/Alert";
import { ProfileProvider } from "./contexts/ProfileContext";
import ForgotPassword from "./components/Forgot-Password/ForgotPassword";
import ResetPassword from "./components/Reset-Password/ResetPassword";


const App = () => {

  return(
    <Router>
      <AlertProvider>
        <ProfileProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/book/:id" element={<Book/>}/>
              <Route path="/rooms" element={<RoomsPage/>} />
              <Route path="/rooms/:roomType" element={<ViewRooms/>}/>
              <Route path="/about" element={<About/>}  />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/logout" element={<LogOut/>} /> 
              <Route path="/profile/:id" element={<Profile/>} />
              <Route path="/reservations/:id" element={<Reservations/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
              <Route path="/reset-password/:id" element={<ResetPassword/>} />
            </Routes>
          </Layout>
        </ProfileProvider>
      </AlertProvider>
    </Router>
  )
}

export default App