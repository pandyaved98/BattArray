// Packages Imports
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationTypes";
import VenderDashbaordScreen from "../screens/VenderDashboard/VenderDashbaordScreen";
import BatteryInventoryScreen from "../screens/VenderDashboard/BatteryInventoryScreen";
import BatteryDetail from "../screens/VenderDashboard/BatteryDetail";
// Create a Stack Navigator
const Stack = createStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // Get the app theme here
  const { colors } = useTheme();

  // default options for the Stack Screens
  const screenOptions: StackNavigationOptions = {
    headerStyle: { backgroundColor: colors.background },
  };

  // Render
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Vendor Dashboard" component={VenderDashbaordScreen} />
      <Stack.Screen
        name="Battery Inventory"
        component={BatteryInventoryScreen}
      />
      <Stack.Screen
        // options={{ headerShown: false }}
        name="Battery Info"
        component={BatteryDetail}
      />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
