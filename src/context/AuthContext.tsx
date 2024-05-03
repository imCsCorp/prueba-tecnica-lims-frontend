import React, { FC, createContext, useReducer } from "react";
import { AuthAction, AuthState } from "../interfaces/auth";

interface AuthContextProps {
  auth: string | boolean;
  setSignIn: (token: string) => void;
  setLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "[AUTH] SIGN IN":
      return { ...state, auth: true };

    case "[AUTH] SIGN OUT":
      return { ...state, auth: false };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  auth: !!localStorage.getItem("token"),
};

const AuthProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const setSignIn = (token: string) => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    localStorage.setItem("token", token);
    dispatch({ type: "[AUTH] SIGN IN" });
  };

  const setLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    dispatch({ type: "[AUTH] SIGN OUT" });
  };

  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          ...state,
          setSignIn,
          setLogout,
        }}
      >
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default AuthProvider;
