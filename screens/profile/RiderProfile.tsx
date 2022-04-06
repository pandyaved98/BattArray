import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RiderProfile = () => {
  return (
    <View style={{ margin: "5%" }}>
      <Text style={{ fontSize: 17 }}>RiderProfile</Text>
      <MaterialCommunityIcons name="face" size={54} color="black" />
      <View>
        <Text style={{ fontSize: 17 }}>Personal Details</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17 }}>Booking History </Text>
      </View>
    </View>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({});
