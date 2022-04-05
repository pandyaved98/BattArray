import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BatteryFullIcon, CalenderIcon } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesome } from "@expo/vector-icons";
const VenderDashbaordScreen = ({ navigation }) => {
  return (
    <View style={{ margin: "2.5%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>Estimated cost to charge</Text>
        <Text>$ 1.5/KW</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text>Estimated Total Charge Time</Text>
        <Text>$ 150 Hrs</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "33%",
        }}
      >
        <View>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Battery Inventory")}
          >
            <FontAwesome name="battery-full" size={44} color="black" />
            <Text>Battery Inventory</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome name="calendar" size={44} color="black" />
            <Text>Rider Bookings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: "50%" }}>
        <Text>Vender Details:</Text>
        <Text>Naman Bhnasal </Text>
        <Text>Karol Garden , New delhi </Text>
      </View>
      {/** <Text style={{ marginTop: 50 }}>Disable/enable Services</Text> */}
    </View>
  );
};

export default VenderDashbaordScreen;

const styles = StyleSheet.create({});
