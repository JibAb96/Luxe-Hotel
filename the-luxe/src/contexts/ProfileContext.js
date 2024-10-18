import React, { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isSignedIn")) || false;
  });

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
  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, isSignedIn, setIsSignedIn }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
