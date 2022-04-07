// This component has been made by - Kartikey Vaish

// Packages Imports
import { View, StyleSheet } from "react-native";

// Local Imports
import AppText from "./AppText";

// function component for UserDetailsItem
function UserDetailsItem(props: { title: string; value: string }) {
  // Destructuring props
  const { title, value } = props;

  // render
  return (
    <View style={styles.container}>
      <AppText text={title} size={20} />
      <AppText text={value} size={20} />
    </View>
  );
}

// exports
export default UserDetailsItem;

// styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
