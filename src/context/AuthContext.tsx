import React, { FC, createContext, useReducer } from "react";
import { AuthAction, AuthState } from "../interfaces/auth";

interface AuthContextProps {
  auth: string | boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const INITIAL_STATE = {
  auth: !!localStorage.getItem("token"),
};

const AuthProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default AuthProvider;
