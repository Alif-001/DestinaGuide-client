// auth provider setup

import React, { createContext } from "react";

 export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "John Doe", email: "test@test.com" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
