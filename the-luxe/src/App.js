import React, {useState} from "react";
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
import { AlertProvider } from "./components/Alert/Alert";
import Book from "./components/Book/Book";
import LogOut from "./components/Log-Out/LogOut";
import Profile from "./components/Profile/Profile";



const App = () => {

  const[isSignedIn, setIsSignedIn] = useState(false)

  return(
    <Router>
      <AlertProvider>
        <Layout isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}>
          <Routes>
            <Route path="/" element={<LandingPage isSignedIn={isSignedIn} />} />
            <Route path="/book" element={<Book/>}/>
            <Route path="/rooms" element={<RoomsPage/>} />
            <Route path="/rooms/:roomType" element={<ViewRooms/>} isSignedIn={isSignedIn}/>
            <Route path="/about" element={<About/>} />
            <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn}/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/logout" element={<LogOut setIsSignedIn={setIsSignedIn}/>} /> 
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Layout>
      </AlertProvider>
    </Router>
  )
}

export default App