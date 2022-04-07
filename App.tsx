// Import all necessary packages
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

// Local Imports
import AuthProvider from "./providers/AuthProvider";

// export the app component
export default function App() {
  // Render app component
  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <PaperProvider>
        <AuthProvider />
      </PaperProvider>
    </NavigationContainer>
  );
}
