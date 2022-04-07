import { View, Text,TextInput,Image,KeyboardAvoidingView ,Button,  TouchableOpacity , Dimensions, StyleSheet } from 'react-native'
import React,{useState} from 'react' ;
import { ScrollView } from 'react-native-gesture-handler';
import FormContainer from './Form/FormContainer';
import Input from './Form/Input';
import Error from './Form/Error';
var {width} = Dimensions.get('window')

const SignUp = (props) => {
  const onSubmit = () =>{
   console.log("Pressed") ; 
  }
  const [name,setName] = useState('') ; 
  const [email,setEmail] = useState('') ; 
  const [password , setPassword] = useState('') ;
  const [error,setError] = useState('') ;  

  const register = () =>{
    let user = {
      name:name , 
      email:email,
      password:password,
      
    } ; 
    if(email==="" || password==""){
      setError("Please Fill In Your Credentials")
    }
   
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

    <Image style={styles.bikeImage} source={require('../assets/bike.jpg')} />
    <FormContainer title={"Register"}>
      <Input 
          placeholder={"Name"}
          name={"name"}
          id={"name"}
          onChangeText={(text)=>setName(text)}
      />
     <Input
      placeholder={"Email"}
      name={"email"}
      id={"email"}
      onChangeText={(text) => setEmail(text.toLowerCase())}
    />
    <Input
      placeholder={"Password"}
      name={"password"}
      id={"password"}
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
    <View>
    {error ? <Error message={error} /> : null}
    </View>
    <View>
      <Button title='Register' onPress={() => register()} >
        <Text style={[{marginLeft:25, color: "white" , justifyContent:'center' }]}>Register</Text>
      </Button>
    </View>
    </FormContainer>
    </KeyboardAvoidingView>
  ) 
}
const styles = StyleSheet.create({
  container:{
    marginTop:150,
    alignItems:'center',
  },
  bikeImage:{
    height:250,
    width:width-40,
  }

})
export default SignUp