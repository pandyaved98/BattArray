import { View, Text , TextInput ,Image , KeyboardAvoidingView , Button , Dimensions , StyleSheet} from 'react-native'
import React , {useState} from 'react'
import FormContainer from './Form/FormContainer';
import Input from './Form/Input';
import Error from './Form/Error';
var {width} = Dimensions.get('window') ;
const Login = () => {
  const onSubmit = () =>{
    console.log("Pressed") ; 
   }
   const [email,setEmail] = useState('') ; 
   const [password , setPassword] = useState('') ; 
   const [error,setError] = useState('') ; 

   const login = () => {
     let user = {
       email : email ,
       password : password ,
     }
     if(email==="" || password===""){
       setError("Please Fill In Your Credentials") ; 
     }
   }
  return (
    <View style={styles.container}>
      <View>
        <Image style = {styles.imageContainer} source={require('../assets/login.jpg')} />
      </View>
      <Text style={styles.loginText}>Login</Text>
      <FormContainer>
        <Input
          placeholder={"Email"}
          name={"email"}
          id={"email"}
          onChangeText={(text)=>{setEmail(text)}}
        />
        <Input 
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          onChangeText={(text)=>setPassword(text)}
        />
     <View>
    {error ? <Error message={error} /> : null}
    </View>
        <Button 
          onPress={login}
          title="Login"
        />
      </FormContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{},
  
  imageContainer:{
    height:180,
    width:width-40 ,
    alignSelf:'center'
  },
  loginText:{
    fontSize:22,
    textAlign:'center',
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