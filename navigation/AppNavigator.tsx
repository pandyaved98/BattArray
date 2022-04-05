// Packages Imports
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import { AppStackParamsList } from "./NavigationTypes";

// screen imports
import BatteryInventoryScreen from "../screens/VenderDashboard/BatteryInventoryScreen";
import BatteryDetailScreen from "../screens/VenderDashboard/BatteryDetailScreen";
import VenderDashbaordScreen from "../screens/VenderDashboard/VenderDashbaordScreen";

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
      <Stack.Screen name="VendorDashboardScreen" component={VenderDashbaordScreen} />
      <Stack.Screen name="BatteryInventoryScreen" component={BatteryInventoryScreen} />
      <Stack.Screen name="BatteryDetailScreen" component={BatteryDetailScreen} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
