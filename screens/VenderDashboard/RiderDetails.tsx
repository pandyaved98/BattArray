import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import RiderCard from "../../components/RiderCard";

// import RiderCard from '../../components/RiderCard';

export default function RiderDetails() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <RiderCard>
        <Text style={styles.titleText}>Battery1</Text>
        <Text style={styles.titleText}>Charge Left: 15 Hours</Text>
        <Text style={styles.middleText}>Status: In Use</Text>
        <Text style={styles.titleText}>Previous Rider Details</Text>
        <Text style={styles.middleText}>Rider Assigned: 0025</Text>
        <Text style={styles.titleText}>Set Status</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </RiderCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  middleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    paddingBottom: 100,
  },
});
