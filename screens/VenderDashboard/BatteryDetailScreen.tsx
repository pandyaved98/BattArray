// This component has been created by - Wilson
import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AppScreenProps } from "../../navigation/NavigationTypes";

const BatteryDetailScreen = ({ route, navigation }: AppScreenProps<"BatteryDetailScreen">) => {
  const BatteryInfo = route?.params?.data;

  return (
    <View style={{ margin: "6%" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20 }}>{BatteryInfo?.name}</Text>
        {BatteryInfo?.key == "Full" ? (
          <FontAwesome name="battery-full" size={34} color="black" />
        ) : BatteryInfo?.key == "Half" ? (
          <FontAwesome name="battery-half" size={34} color="black" />
        ) : (
          <Feather name="battery-charging" size={44} color="black" />
        )}
      </View>
      <View
        style={{
          height: "50%",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 17 }}>Status : {BatteryInfo?.status}</Text>
        <Text style={{ fontSize: 17 }}>Change Status :</Text>
        <Text style={{ color: "green", fontSize: 17 }}>Available</Text>
        <Text style={{ color: "red", fontSize: 17 }}>Booked</Text>
        <Text style={{ color: "orange", fontSize: 17 }}>Charging</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, marginTop: 60 }}>Previous Rider Infomation:</Text>
        <Text>Rahul Marvel</Text>
        <Text>Rider ID:3r7343</Text>
        <Text>Time Used: 4 hours</Text>
      </View>
    </View>
  );
};

export default BatteryDetailScreen;
