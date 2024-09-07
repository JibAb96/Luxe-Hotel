import {React, Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Hero from "./components/Hero/Hero"
import Location from "./components/Location-Section/Location";
import RoomsSection from "./components/Rooms-Section/RoomsSection";
import Reviews from "./components/Reviews/Reviews";
import RoomsPage from "./components/RoomsPage/RoomsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout";



class App extends Component {
  
  render(){
    return(
      <Router>
        <Layout>
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
        </Layout>
      </Router>
    )
   
  }
}

export default App