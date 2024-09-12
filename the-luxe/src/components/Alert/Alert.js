import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const showAlertWithTimeout = (message, duration) => {
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };
    return (
        <AlertContext.Provider value={{ alertMessage, setAlertMessage, showAlert, setShowAlert, showAlertWithTimeout }}>
            {children}
        </AlertContext.Provider>
    );
};