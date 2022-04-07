import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
var { width } = Dimensions.get("window");

const FormContainer = props => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
});
export default FormContainer;
