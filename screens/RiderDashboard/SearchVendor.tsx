import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { data } from "./searchData";
import { TouchableOpacity } from "react-native-gesture-handler";
const SearchVendor = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [displayData, setDisplayData] = useState(data);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };
  const search = (query) => {
    let temp = data;
    setDisplayData(
      temp.filter((info) => {
        return info["name"]?.toLowerCase().includes(query?.toLowerCase());
      })
    );
  };
  useEffect(() => {
    search(searchQuery);
  }, [searchQuery]);
  return (
    <View style={{ margin: "5%" }}>
      <Searchbar
        onChangeText={onChangeSearch}
        placeholder="Search"
        value={searchQuery}
      />
      {(searchQuery?.length > 0 ? displayData : data)?.map((info, index) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("VendorDashboardScreen")}
          style={[styles.Styles1, { marginTop: 20 }]}
        >
          <View key={index}>
            <Text style={{ fontSize: 17, margin: "5%", marginTop: 20 }}>
              {info?.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchVendor;

const styles = StyleSheet.create({
  Styles1: {
    backgroundColor: "#dedede",
    borderRadius: 10,
    padding: 10,
    marginTop: "2.5%",
    elevation: 5,
    shadowColor: "#000000",
    margin: "2.5%",
  },
});
