// Packages Imports
import { View, StyleSheet, StatusBar, Image } from "react-native";

// Local Imports
import AppText from "../../components/AppText";
import UserDetailsItem from "../../components/UserDetailsItem";

// function component for VendorProfileScreen
function VendorProfileScreen() {
  // render
  return (
    <View style={styles.container}>
      <AppText text="Personal Profile" size={25} style={{ fontWeight: "bold" }} />

      <Image source={require("../../assets/user.png")} style={styles.image} />
      <UserDetailsItem title="Name" value="Kartikey Vaish" />
      <UserDetailsItem title="Available Batteries" value="12" />
    </View>
  );
}

// exports
export default VendorProfileScreen;

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 15,
    alignItems: "center",
  },
  image: { width: 100, height: 100, borderRadius: 50, marginTop: 20 },
});
