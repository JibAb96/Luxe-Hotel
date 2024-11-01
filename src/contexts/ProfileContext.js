import React, { createContext, useContext, useEffect, useState } from "react";
import { AlertContext } from "./Alert"
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isSignedIn")) || false;
  });

  const { showAlertWithTimeout } = useContext( AlertContext )

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("isSignedIn"));
    if (saved !== isSignedIn) {
      localStorage.setItem("isSignedIn", JSON.stringify(isSignedIn));
    }
  }, [isSignedIn]);

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (profileData) {
      localStorage.setItem("profileData", JSON.stringify(profileData));
      localStorage.setItem("userID", JSON.stringify(profileData.id));
    } else {
    }
  }, [profileData]);

  const logOutUser = () => {
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("profileData")
    showAlertWithTimeout("You have successfully logged out!", "alert-success");
  };
  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, isSignedIn, setIsSignedIn, logOutUser }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
