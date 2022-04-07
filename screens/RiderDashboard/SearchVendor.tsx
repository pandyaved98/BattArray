import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { data } from "./searchData";
const SearchVendor = () => {
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
      {(searchQuery?.length > 0 ? displayData : data)?.map((info) => (
        <View style={[styles.Styles1, {}]}>
          <Text style={{ fontSize: 17, margin: "5%" }}>{info?.name}</Text>
        </View>
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
    //  shadowOffset: 5,
    margin: "2.5%",
  },
});
