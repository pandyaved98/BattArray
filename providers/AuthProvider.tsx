// Packages imports
import { useState } from "react";

// Local imports and context imports
import AuthContext from "../context/AuthContext";

// Named imports
import { AuthProviderProps } from "../types/ContextTypes";
import { UserProps } from "../types/GlobalTypes";

// AuthProvider function component
function AuthProvider(props: AuthProviderProps) {
  // Destructuring props
  const { children } = props;

  const [User, SetUser] = useState<UserProps | null>(null);

  // function to log the user in
  const Login = (data: UserProps) => SetUser(data);

  // function to log the user out
  const Logout = () => SetUser(null);

  // Value to be passed to children
  const value = { User, Login, Logout };

  // Render component based on user authentication status
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// connect and export
export default AuthProvider;
