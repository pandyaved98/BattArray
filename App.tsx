// Import all necessary packages
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation/AppNavigator";

// Local Imports

import AuthContext from "./context/AuthContext";
import AuthNavigator from "./navigation/AuthNavigator";
import AuthProvider from "./providers/AuthProvider";

// export the app component
export default function App() {
  // get the context from the AuthContext
  const { User } = useContext(AuthContext);

  // Render app component
  return (
    <AuthProvider>
      <NavigationContainer>
        <PaperProvider>
          {/* If User is logged in we will show the AppNavigator or else we will show the AuthNavigator */}
          <AuthNavigator />
        </PaperProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
