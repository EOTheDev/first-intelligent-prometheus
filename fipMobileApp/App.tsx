/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  ToastAndroid,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PermissionsAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens/Home';
import { Profile } from './screens/Profile';

import { createNativeStackNavigator } from "@react-navigation/native-stack";



type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
  };
  
export const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
      
  const user = {
    id: "1apro42X", name: 'John Doe',  email: 'test@gmail.com'
  }

  return (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userId: user.id }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
  );
};



export default App;




/**
 * Request location permission
 * TODO: if not given, get out of the app.
 */
export async function requestLocationPermission() 
{
try {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("You can use the location")
    alert("You can use the location");
  } else {
    console.log("location permission denied")
    alert("Location permission denied");
  }
} catch (err) {
  console.warn(err)
}
}

export function alert(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}