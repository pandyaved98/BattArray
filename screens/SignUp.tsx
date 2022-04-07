import { View, Text,TextInput,Image,KeyboardAvoidingView ,Button,  TouchableOpacity , Dimensions, StyleSheet } from 'react-native'
import React,{useState} from 'react' ;
import { ScrollView } from 'react-native-gesture-handler';
var {width} = Dimensions.get('window')

const SignUp = () => {
  const onSubmit = () =>{
   console.log("Pressed") ; 
  }
  const [firstName,setFirstname] = useState('') ; 
  const [email,setEmail] = useState('') ; 
  const [password , setPassword] = useState('') ; 
  return (
    <KeyboardAvoidingView >
      <ScrollView style={styles.container}>
      <Image source={require('../assets/bike.jpg')} style={styles.container_image}/>
      <Text style={styles.signUpText}>Sign Up</Text>
      <View>
      <TextInput
         style={styles.firstNameInput} 
         placeholder="First Name"   
      />
      <TextInput
         style={styles.firstNameInput} 
         placeholder="Email"   
      />
      <TextInput 
        style={styles.password}
        placeholder="Password"
      />
      <TextInput 
        style={styles.confirmPassword}
        placeholder="Confirm Here Password"
      />
      <View  style={styles.submitButton}>
        <Button 
          onPress={onSubmit}
          title="Submit"

        />
      </View>

      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
  container_image:{
    height:165,
    width:width-45,
  },
  buttonSubmit:{
    height:45,
  },
  signUpText:{
    fontSize:28,
    justifyContent:'center',
    textAlign:'center',
    fontWeight:'400',
  },

  firstNameInput:{
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
  },
  confirmPassword:{
    backgroundColor:'#F5F5F5',
    height:70,
    width:width - 40,
    borderRadius:20,
    margin:10,
    padding:20,
    fontSize:18,
  },
  submitButton:{
  
    width:width - 45,
    marginLeft:10,
    marginTop:20,
  }

})
export default SignUp