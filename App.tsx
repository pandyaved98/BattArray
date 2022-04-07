// Import all necessary packages
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation/AppNavigator";

// export the app component
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* If User is logged in we will show the AppNavigator or else we will show the AuthNavigator */}
        {/**<View style={styles.container}>
          <Text>Hello World</Text>
        </View> */}
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
