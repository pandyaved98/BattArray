import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Button,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FormContainer from "./Form/FormContainer";
import Input from "./Form/Input";
import Error from "./Form/Error";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
var { width } = Dimensions.get("window");
import AppLoading from "../components/AppLoading";

const SignUp = props => {
  const onSubmit = () => {
    console.log("Pressed");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [account_type, Setaccount_type] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [Loading, SetLoading] = useState(false);

  const { Login } = useContext(AuthContext);

  const register = () => {
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

      SetLoading(false);
      console.log({
        email: email,
        name: name,
        account_type: account_type,
      });
      Login({
        email: email,
        name: name,
        account_type: account_type,
      });
    } catch (error) {
      SetLoading(false);
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <Image style={styles.bikeImage} source={require("../assets/bike.jpg")} />
        <FormContainer title={"Register"}>
          <Input
            placeholder={"Name"}
            name={"name"}
            id={"name"}
            onChangeText={text => setName(text)}
          />
          <Input
            placeholder={"Email"}
            name={"email"}
            id={"email"}
            onChangeText={text => setEmail(text.toLowerCase())}
          />
          <Input placeholder={"Account Type"} onChangeText={Setaccount_type} />
          <Input
            placeholder={"Password"}
            name={"password"}
            id={"password"}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <View>{error ? <Error message={error} /> : null}</View>
          <View>
            <Button title="Register" onPress={() => register()}>
              <Text style={[{ marginLeft: 25, color: "white", justifyContent: "center" }]}>
                Register
              </Text>
            </Button>
          </View>
        </FormContainer>

        <AppLoading visible={Loading} loadingText="Logging In.." />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  bikeImage: {
    height: 250,
    width: width - 40,
  },
});
export default SignUp;
