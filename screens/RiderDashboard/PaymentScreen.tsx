import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PaymentScreen = () => {
  return (
    <View style={{ margin: "5%" }}>
      <Text style={{ fontSize: 17 }}>PaymentScreen</Text>
      <View>
        <Text style={{ fontSize: 17, marginTop: 30 }}>Order Summary</Text>
        <Text style={{ fontSize: 15, marginTop: 15 }}>
          Number of Items : 1{" "}
        </Text>
        <Text style={{ fontSize: 15 }}>Item Name: Amaron Battery </Text>
        <Text style={{ fontSize: 15 }}>Pick Up location : New delhi</Text>
        <Text style={{ fontSize: 15 }}>Total Payable Amount: $2</Text>
      </View>
      <View>
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Choose Payment Method
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, marginTop: 15 }}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 15 }}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 15 }}>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 15 }}>Cash on delivery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
