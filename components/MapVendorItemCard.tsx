// This componnet is made up by - Kartikey Vaish

// Packages Imports
import { useTheme } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";

// Local Imports
import AppText from "./AppText";
import UserDetailsItem from "./UserDetailsItem";

// interface for MapVendorItemCard
export interface MapVendorItemCardProps {
  name?: string;
  store_name?: string;
  battery_count?: number;
  price?: number;
  profile_picture?: string;
}

// function component for MapVendorItemCard
function MapVendorItemCard(props: MapVendorItemCardProps) {
  // Destructuring props
  const { battery_count = 0, name, price = 0, profile_picture, store_name } = props;

  // Get the theme
  const { colors } = useTheme();

  // container styles
  const containerStyles = [
    styles.container,
    {
      backgroundColor: colors.background,
    },
  ];

  // render
  return (
    <View style={containerStyles}>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: profile_picture }} style={styles.image} />

        <View style={{ marginLeft: 20 }}>
          <AppText text={name} size={25} style={{ fontWeight: "bold" }} />
          <AppText text={store_name} size={16} />
        </View>
      </View>

      <UserDetailsItem title="Battery Count : " value={battery_count?.toString()} />
      <UserDetailsItem title="Price : " value={`₹ ${price?.toString()}`} />
    </View>
  );
}

// exports
export default MapVendorItemCard;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    padding: 10,
    elevation: 10,
    borderRadius: 12,
  },
  image: { width: 80, height: 80, borderRadius: 120 },
});
