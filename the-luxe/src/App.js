import {React, Component} from "react";
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



class App extends Component {
  
  render(){
    return(
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rooms" element={<RoomsPage/>} />
            <Route path="/rooms/:roomType" element={<ViewRooms/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </Layout>
      </Router>
    )
   
  }
}

export default App