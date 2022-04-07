// Packages imports
import { useState } from "react";

// Local imports and context imports
import AuthContext from "../context/AuthContext";
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";

// Named imports
import { UserProps } from "../types/GlobalTypes";

// AuthProvider function component
function AuthProvider() {
  const [User, SetUser] = useState<UserProps | null>(null);

  // function to log the user in
  const Login = (data: UserProps) => SetUser(data);

  // function to log the user out
  const Logout = () => SetUser(null);

  // Value to be passed to children
  const value = { User, Login, Logout };

  // Render component based on user authentication status
  return (
    <AuthContext.Provider value={value}>
      {User !== null ? <AppNavigator /> : <AuthNavigator />}
    </AuthContext.Provider>
  );
}

// connect and export
export default AuthProvider;
