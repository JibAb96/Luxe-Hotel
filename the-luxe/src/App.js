import {React, Component} from "react";
import TheNavbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Hero from "./components/Hero/Hero"
import Location from "./components/Location-Section/Location";
import RoomsSection from "./components/Rooms-Section/RoomsSection";
import Reviews from "./components/Reviews/Reviews";


class App extends Component {


  render(){
    return(
      <div>
        <TheNavbar />
        <Hero />
        <Location />
        <RoomsSection />
        <Reviews />
      </div>
    )
   
  }
}

export default App