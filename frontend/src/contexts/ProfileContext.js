import React, { createContext, useContext, useEffect, useState } from "react";
import { AlertContext } from "./Alert"

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { showAlertWithTimeout } = useContext( AlertContext )
  
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setIsSignedIn(false);
        return;
      }


      const apiURL = process.env.REACT_APP_API_BASE_URL;
      
      const response = await fetch(`${apiURL}/auth/status`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setIsSignedIn(data.isSignedIn);
        if (data.isSignedIn) {
          setProfileData(data.user);
        }
      } else {
        // Clear invalid auth state
        setIsSignedIn(false);
        setProfileData(null);
        localStorage.removeItem('authToken');
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsSignedIn(false);
      setProfileData(null);
      localStorage.removeItem('authToken');
    } 
  };

  const logOutUser = async () => {
    try {
      localStorage.removeItem('authToken');
      setIsSignedIn(false);
      setProfileData(null);
      showAlertWithTimeout("You have successfully logged out!", "alert-success");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, isSignedIn, setIsSignedIn, logOutUser }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
