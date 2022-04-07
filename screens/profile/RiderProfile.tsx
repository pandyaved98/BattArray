import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppScreenProps } from "../../navigation/NavigationTypes";

const RiderProfile = ({ navigation }: AppScreenProps<"RiderProfileScreen">) => {
  return (
    <>
      <Text style={{ fontSize: 17 }}>RiderProfile</Text>
      <ScrollView style={{ margin: "5%" }}>
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="face" size={54} color="black" />
          <View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontSize: 17 }}>Personal Details</Text>

              <View style={styles.Styles1}>
                <Text style={{ marginTop: 6, fontSize: 10 }}>First Name</Text>
                <Text> Wilson</Text>
              </View>
              <View style={styles.Styles1}>
                <Text style={{ marginTop: 6, fontSize: 10 }}>Second Name</Text>
                <Text> Furtado</Text>
              </View>
              <View style={styles.Styles1}>
                <Text style={{ marginTop: 6, fontSize: 10 }}>Address</Text>
                <Text> New delhi</Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 17 }}>Booking History </Text>

              <View style={styles.Styles1}>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Jayalaxmi Traders </Text>
                <Text>Pick up Location : Anand Vihar</Text>
              </View>
              <View style={styles.Styles1}>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Bnaglore Electricals</Text>
                <Text>Pick up Location : Preet Vihar</Text>
              </View>
              <View style={styles.Styles1}>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Battery Hub</Text>
                <Text>pick up Loaction : Maang Vihar</Text>
              </View>
            </View>
          </View>
        </View>

        <Button
          title="See Nearby Vendors"
          onPress={() => navigation.navigate("NearbyVendorsScreen")}
        />
      </ScrollView>
    </>
  );
};

export default RiderProfile;

const styles = StyleSheet.create({
  Styles1: {
    backgroundColor: "#dedede",
    borderRadius: 10,
    padding: 10,
    marginTop: "2.5%",
    elevation: 5,
    shadowColor: "#000000",
    //  shadowOffset: 5,
    margin: "2.5%",
  },
});
