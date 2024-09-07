import {React, Component} from "react";
import Navigation from "./components/Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Hero from "./components/Hero/Hero"
import Location from "./components/Location-Section/Location";
import RoomsSection from "./components/Rooms-Section/RoomsSection";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import RoomsPage from "./components/RoomsPage/RoomsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



class App extends Component {
  
  render(){
    return(
      <Router>
        <div className="wrapper">
          <Navigation/>
          <Routes>
            <Route
              path="/" 
              element={
                <div>
                  <Hero />
                  <Location />
                  <RoomsSection />
                  <Reviews />
                </div>} 
            />
            <Route path="/rooms" element={<RoomsPage/>}/>
          </Routes>
          <Footer />
        </div>
        </Router>
    )
   
  }
}

export default App