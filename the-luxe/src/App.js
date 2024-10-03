import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RoomsPage from "./components/Rooms-Page/RoomsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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


const App = () => {

  const[isSignedIn, setIsSignedIn] = useState(() => {
    //Solve Later
    const saved = localStorage.getItem("isSignedIn");
    return saved === "true" ? true : false;
  });

  useEffect(() => {
    //Solve Later
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);
  
  const reservations = [
    {
      id: 1,
      room: "Standard",
      checkin: "2021-10-01",
      checkout: "2021-10-07",
      guests: 2,
      price: 1000,
    },
    {
      id: 2,
      room: "Deluxe",
      checkin: "2021-10-01",
      checkout: "2021-10-07",
      guests: 2,
      price: 2000,
    },
    {
      id: 3,
      room: "Suite",
      checkin: "2021-10-01",
      checkout: "2021-10-07",
      guests: 2,
      price: 3000,
    },
    {
      id: 4,
      room: "Suite",
      checkin: "2021-10-01",
      checkout: "2021-10-07",
      guests: 2,
      price: 3000,
    }
]

  return(
    <Router>
      <AlertProvider>
        <ProfileProvider>
          <Layout isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}>
            <Routes>
              <Route path="/" element={<LandingPage isSignedIn={isSignedIn} />} />
              <Route path="/book" element={<Book/>}/>
              <Route path="/rooms" element={<RoomsPage/>} />
              <Route path="/rooms/:roomType" element={<ViewRooms/>} isSignedIn={isSignedIn}/>
              <Route path="/about" element={<About isSignedIn={isSignedIn}/>}  />
              <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn}/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/logout" element={<LogOut setIsSignedIn={setIsSignedIn}/>} /> 
              <Route path="/profile" element={<Profile/>} />
              <Route path="/reservations" element={<Reservations reservations={reservations}/>} />
            </Routes>
          </Layout>
        </ProfileProvider>
      </AlertProvider>
    </Router>
  )
}

export default App