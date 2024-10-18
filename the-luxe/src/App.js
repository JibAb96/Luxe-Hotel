import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { AlertProvider } from "./contexts/Alert";
import { ProfileProvider } from "./contexts/ProfileContext";
import Loader from "./components/Spinner/Spinner";

// Lazy loading components
const RoomsPage = lazy(() => import("./components/Rooms-Page/RoomsPage"));
const ViewRooms = lazy(() => import("./components/View-Rooms/ViewRooms"));
const About = lazy(() => import("./components/About/About"));
const LandingPage = lazy(() => import("./components/Landing-Page/LandingPage"));
const SignIn = lazy(() => import("./components/Sign-In/SignIn"));
const Register = lazy(() => import("./components/Register/Register"));
const Book = lazy(() => import("./components/Book/Book"));
const LogOut = lazy(() => import("./components/Log-Out/LogOut"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Reservations = lazy(
  () => import("./components/Reservations/Reservations"),
);
const ForgotPassword = lazy(
  () => import("./components/Forgot-Password/ForgotPassword"),
);
const ResetPassword = lazy(
  () => import("./components/Reset-Password/ResetPassword"),
);
const ConfirmBooking = lazy(
  () => import("./components/Confirm-Booking/ConfirmBooking"),
);
const NotFound = lazy(() => import("./components/Not-Found/NotFound"));

const App = () => {
  return (
    <Router>
      <AlertProvider>
        <ProfileProvider>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/book/:id" element={<Book />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/rooms/:roomType" element={<ViewRooms />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/reservations/:id" element={<Reservations />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:id" element={<ResetPassword />} />
                <Route
                  path="/confirm-booking/:id"
                  element={<ConfirmBooking />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </ProfileProvider>
      </AlertProvider>
    </Router>
  );
};

export default App;
