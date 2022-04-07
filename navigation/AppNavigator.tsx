// Packages Imports
import { useContext } from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

// Types/components/Navigators imports
import AuthContext from "../context/AuthContext";
import { AppStackParamsList } from "./NavigationTypes";

// screen imports
import BatteryDetailScreen from "../screens/VenderDashboard/BatteryDetailScreen";
import NearbyVendorsScreen from "../screens/NearbyVendors/NearbyVendorsScreen";
import PaymentScreen from "../screens/RiderDashboard/PaymentScreen";
import RiderProfile from "../screens/profile/RiderProfile";
import VendorDashboardScreen from "../screens/VenderDashboard/VendorDashboardScreen";
import VendorProfileScreen from "../screens/profile/VendorProfileScreen";
import BatteryInventoryScreen from "../screens/VenderDashboard/BatteryInventoryScreen";
import BatteryBooking from "../screens/RiderDashboard/BatteryBooking";
import RiderBooking from "../screens/VenderDashboard/RiderBooking";
import SearchVendor from "../screens/RiderDashboard/SearchVendor";
import RiderDetails from "../screens/VenderDashboard/RiderDetails";
import BatteryDetailScreenRider from "../screens/VenderDashboard/BatteryDetailsRider";

// Create a Stack Navigator
const Stack = createStackNavigator<AppStackParamsList>();

// Function for AppNavigator
function AppNavigator() {
  // Get the app theme here
  const { colors } = useTheme();

  const { User } = useContext(AuthContext);

  // default options for the Stack Screens
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    headerStyle: { backgroundColor: colors.background },
  };

  // Render
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={
        User.account_type === "RIDER"
          ? "NearbyVendorsScreen"
          : "VendorDashboardScreen"
      }
    >
      <Stack.Screen
        name="NearbyVendorsScreen"
        component={NearbyVendorsScreen}
      />
      <Stack.Screen name="RiderProfileScreen" component={RiderProfile} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="RiderBookingDetailScreen" component={RiderBooking} />
      <Stack.Screen
        name="VendorDashboardScreen"
        component={VendorDashboardScreen}
      />
      <Stack.Screen
        name="VendorProfileScreen"
        component={VendorProfileScreen}
      />
      <Stack.Screen
        name="BatteryDetailScreen"
        component={BatteryDetailScreen}
      />
      <Stack.Screen
        name="BatteryInventoryScreen"
        component={BatteryInventoryScreen}
      />

      <Stack.Screen name="BatteryBookingScreen" component={BatteryBooking} />
      <Stack.Screen name="SearchVendorScreen" component={SearchVendor} />
      <Stack.Screen name="RiderBookingScreen" component={RiderBooking} />
      <Stack.Screen name="RiderDetailsScreen" component={RiderDetails} />
    </Stack.Navigator>
  );
}

// Exporting AppNavigator
export default AppNavigator;
