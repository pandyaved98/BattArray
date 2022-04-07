// Packages Imports
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationTypes";
import SearchVendor from "../screens/RiderDashboard/SearchVendor";

// screen imports

// Create a Stack Navigator
const Stack = createStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // Get the app theme here
  const { colors } = useTheme();

  // default options for the Stack Screens
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    headerStyle: { backgroundColor: colors.background },
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {/**App Screens */}
      <Stack.Screen name="SearchScreen " component={SearchVendor} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
