// Packages Imports
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AuthStackParamsList } from "./NavigationTypes";

// Create a Stack Navigator
const Stack = createStackNavigator<AuthStackParamsList>();

// Function for AuthNavigator
function AuthNavigator() {
  // Get the app theme here
  const { colors } = useTheme();

  // default options for the Stack Screens
  const screenOptions: StackNavigationOptions = {
    headerStyle: { backgroundColor: colors.background },
  };

  // Render
  return <Stack.Navigator screenOptions={screenOptions}>{/* Auth Screens */}</Stack.Navigator>;
}

// Exporting AuthNavigator
export default AuthNavigator;
