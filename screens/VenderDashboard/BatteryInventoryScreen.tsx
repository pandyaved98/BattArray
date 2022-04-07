// This component has been created by - Wilson

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { data } from "./data";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AppScreenProps } from "../../navigation/NavigationTypes";

const BatteryInventoryScreen = ({ navigation }: AppScreenProps<"BatteryInventoryScreen">) => {
  console.log(data);
  return (
    <View style={{ margin: "3%" }}>
      {data?.map((info, index) => (
        <View key={index}>
          <TouchableOpacity
            style={{
              backgroundColor: "#dedede",
              borderRadius: 10,
              padding: 10,
              marginTop: "2.5%",
              elevation: 5,
              shadowColor: "#000000",
              shadowOffset: 5,
            }}
            onPress={() => navigation.navigate("BatteryDetailScreen", { data: info })}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{info?.name}</Text>
                {info?.key == "Full" ? (
                  <FontAwesome name="battery-full" size={34} color="black" />
                ) : info?.key == "Half" ? (
                  <FontAwesome name="battery-half" size={34} color="black" />
                ) : (
                  <Feather name="battery-charging" size={44} color="black" />
                )}
              </View>

              <Text>Status : {info?.status}</Text>
              <Text>Charge Left : {info?.chargeLeft}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BatteryInventoryScreen;

const styles = StyleSheet.create({});
