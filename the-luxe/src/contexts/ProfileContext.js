import React, { createContext, useEffect, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
    const [profileData, setProfileData] = useState(null);

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
        <ProfileContext.Provider value={{profileData, setProfileData}}>
            {children}
        </ProfileContext.Provider>
    )
};