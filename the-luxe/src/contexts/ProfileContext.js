import React, { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
    const [profileData, setProfileData] = useState(null);
    const[isSignedIn, setIsSignedIn] = useState(() => {
        const saved = localStorage.getItem("isSignedIn");
        return saved === "true" ? true : false;
      });
    
      useEffect(() => {
        localStorage.setItem("isSignedIn", isSignedIn);
      }, [isSignedIn]);
    
    
    useEffect(() => {
        const savedData = localStorage.getItem("profileData");
        if(savedData){
            setProfileData(JSON.parse(savedData))
        }
    }, [])

    useEffect(() => {
        if(profileData){
            localStorage.setItem("profileData", JSON.stringify(profileData))
            localStorage.setItem("userID", JSON.stringify(profileData.id))
        }
    }, [profileData])
    return (
        <ProfileContext.Provider value={{profileData, setProfileData, isSignedIn, setIsSignedIn}}>
            {children}
        </ProfileContext.Provider>
    )
};