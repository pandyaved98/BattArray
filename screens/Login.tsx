import { View, Text , TextInput ,Image , KeyboardAvoidingView , Button , Dimensions , StyleSheet} from 'react-native'
import React , {useState} from 'react'
var {width} = Dimensions.get('window') ;
const Login = () => {
  const onSubmit = () =>{
    console.log("Pressed") ; 
   }
  return (
    <View style={styles.container}>
      <View>
        <Image style = {styles.imageContainer} source={require('../assets/login.jpg')} />
      </View>
      <Text style={styles.loginText}>Login</Text>
      <TextInput 
        style={styles.email}
        placeholder="Email"
      />
      <TextInput 
        style={styles.password}
        placeholder="Password"
      />
      <Button 
        onPress={onSubmit}
        title="Login"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{},
  
  imageContainer:{
    height:180,
    width:width-20 ,
  },
  loginText:{
    fontSize:22,
    textAlign:'center',
    marginBottom:40,
    marginTop:40,
  },
  email:{
    backgroundColor:'#F5F5F5',
    height:70,
    width:width - 40,
    borderRadius:20,
    margin:10,
    padding:20,
    fontSize:18,
  },
  password:{
    backgroundColor:'#F5F5F5',
    height:70,
    width:width - 40,
    borderRadius:20,
    margin:10,
    padding:20,
    fontSize:18,
  }
})

export default Login