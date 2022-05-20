import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-screens';
import 'react-native-gesture-handler'

import Login from './screens/login.js'
import Chat from './screens/chat.js'
import Profile from './screens/profile.js'
import Cadastro from './screens/cadastro.js'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function App (Component) {

  //render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login"  component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
    
    function Home() {
      return (
          <Drawer.Navigator>
            <Drawer.Screen name ="Chat" component={Chat} />
            <Drawer.Screen name ="Profile" component={Profile} />
          </Drawer.Navigator>
      )
    }
  //}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  bottomView: {
    flexDirection: "row",
    padding: 5,
    marginBottom: 20
  },

  txtInput: {
    flex: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10
  },

  btn: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#204cfa'
  },

  btnTxt: {
    color: '#fff'
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

