import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Battery1',
            charge: '15'
         },
         {
            id: 1,
            name: 'Battery2',
            charge: '20'
         },
         {
            id: 2,
            name: 'Battery3',
            charge: '10'
         },
         {
            id: 3,
            name: 'Battery4',
            charge: '5'
         }
      ]
   }
   alertItemName = (item: { id?: number; name: any; charge: any; }) => {
      Alert.alert("Confirm Booking", 
      "Battery Type: " + item.name + "\n" + 
      "Charge Left: " + item.charge + " Hours",[
        {text: "Decline"},
        {}
      ])
   }
   render() {
      return (
         <View>
            <Text style={styles.titleText}>Available Batteries</Text>
            {
               this.state.names.map((item) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 40,
      marginTop: 3,
      backgroundColor: '#07294A',
      alignItems: 'center',
      borderRadius: 25,
   },
   text: {
      color: '#fff'
   },
   titleText: {
    marginTop: 60,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  }
})