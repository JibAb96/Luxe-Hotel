import {React, Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RoomsPage from "./components/RoomsPage/RoomsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import ViewRooms from "./components/View-Rooms/ViewRooms";
import About from "./components/About/About";
import LandingPage from "./components/Landing-Page/LandingPage";



class App extends Component {
  
  render(){
    return(
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/rooms" element={<RoomsPage/>}/>
            <Route path="/rooms/:roomType" element={<ViewRooms/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Layout>
      </Router>
    )
   
  }
}

export default App