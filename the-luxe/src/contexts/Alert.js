import React, { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState("");
  const showAlertWithTimeout = (message, style) => {
    setAlertMessage(message);
    setAlertStyle(style);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        showAlert,
        alertStyle,
        setAlertStyle,
        setShowAlert,
        showAlertWithTimeout,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
