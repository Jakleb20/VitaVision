import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import AgentInput from "./components/AgentInput";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Main from "./src/screens/Main";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Home"} component={Home}/>
          <Stack.Screen name={"Login"} component={Login}/>
          <Stack.Screen name={"Registration"} component={Register}/>
          <Stack.Screen name={"Main"} component={Main}/>

          {/*<View style={styles.container}>
            <Login/>
          </View>*/}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: "contain",
  },
});
