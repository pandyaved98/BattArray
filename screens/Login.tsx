import { View, Text, Image, Button, Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import FormContainer from "./Form/FormContainer";
import Input from "./Form/Input";
import Error from "./Form/Error";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
var { width } = Dimensions.get("window");
import Users from "../mock/Users.json";
import AppLoading from "../components/AppLoading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, SetLoading] = useState(false);

  const { Login } = useContext(AuthContext);

  const login = () => {
    try {
      SetLoading(true);
      let user = {
        email: email,
        password: password,
      };
      if (email === "" || password === "") {
        SetLoading(false);
        setError("Please Fill In Your Credentials");
        return;
      }

      console.log(user);
      let findUser = Users.findIndex(item => item.email === email && item.password === password);
      if (findUser === -1) {
        SetLoading(false);
        setError("Invalid Credentials");
        return;
      }

      SetLoading(false);
      Login({ ...Users[findUser] });
    } catch (error) {
      SetLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.imageContainer} source={require("../assets/login.jpg")} />
      </View>
      <Text style={styles.loginText}>Login</Text>
      <FormContainer>
        <Input
          placeholder={"Email"}
          name={"email"}
          id={"email"}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          onChangeText={text => setPassword(text)}
        />
        <View>{error ? <Error message={error} /> : null}</View>
        <Button onPress={login} title="Login" />
      </FormContainer>

      <AppLoading visible={Loading} loadingText="Logging In.." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  imageContainer: {
    height: 180,
    width: width - 40,
    alignSelf: "center",
  },
  loginText: {
    fontSize: 22,
    textAlign: "center",
    marginTop: 40,
  },
  email: {
    backgroundColor: "#F5F5F5",
    height: 70,
    width: width - 40,
    borderRadius: 20,
    margin: 10,
    padding: 20,
    fontSize: 18,
  },
  password: {
    backgroundColor: "#F5F5F5",
    height: 70,
    width: width - 40,
    borderRadius: 20,
    margin: 10,
    padding: 20,
    fontSize: 18,
  },
});

export default Login;
