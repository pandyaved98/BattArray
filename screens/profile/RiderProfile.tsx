import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const RiderProfile = () => {
  return (
    <>
      <Text style={{ fontSize: 17 }}>RiderProfile</Text>
      <View style={{ margin: "5%", alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="face" size={54} color="black" />
          <View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 17 }}>Personal Details</Text>
              <Text style={{ marginTop: 6 }}>First Name: Wilson</Text>
              <Text style={{ marginTop: 6 }}>Second Name: Furtado</Text>
              <Text style={{ marginTop: 6 }}>Address: New delhi</Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 17 }}>Booking History </Text>
              <Text style={{ fontSize: 15, marginTop: 10 }}>
                Jayalaxmi Traders{" "}
              </Text>
              <Text>Pick up Location : Anand Vihar</Text>

              <Text style={{ fontSize: 15, marginTop: 10 }}>
                Bnaglore Electricals
              </Text>
              <Text>Pick up Location : Preet Vihar</Text>

              <Text style={{ fontSize: 15, marginTop: 10 }}>Battery Hub</Text>
              <Text>pick up Loaction : Maang Vihar</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({});
