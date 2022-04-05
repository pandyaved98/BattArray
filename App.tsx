// Import all necessary packages
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

// export the app component
export default function App() {
  return (
    <NavigationContainer>
      {/* If User is logged in we will show the AppNavigator or else we will show the AuthNavigator */}
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
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
