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
import { Settings } from './screens/Settings';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Help } from './screens/Help';
import Realm, { User } from "realm";
import { UserModel } from './model/UserModel';
import Splash from './screens/Splash';



type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Settings: undefined;
    Help: undefined;
    Splash: undefined;
  };

export const RootStack = createBottomTabNavigator<RootStackParamList>();

async function loadData() {
  const user = {
    name: 'User', 
    properties: {
      _id: "1apro42X",
      firstName: 'John Doe',
      email: 'test@gmail.com'
    }
  };
  let user1, user2;

  const realm = await Realm.open({
    schema: [user],
  });

  realm?.write(() => {
    realm.create<UserModel>( "User", {
      _id: "22222apro42X",
      firstName: 'polpetta'
      })
    realm.create<UserModel>( "User" , {
      _id: "33333apro42X",
      firstName: 'polo'
    })
  });

  // alert( user1.firstName+" "+user2.firstName);
  

  const users = realm.objects('User');
  alert( "there are " + users.length + " users");
  const usersNoEmail = users.filtered("email == null || email == ''");
  alert( "there are " + usersNoEmail.length + " users with no email");

  return users;
}

const App = () => {
      
  let user = { id:"1apro42X", name:"John Doe"};


  return (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userId: user.id }}
      />
      <RootStack.Screen name="Settings" component={Settings} />
      <RootStack.Screen name="Help" component={Help} />
      <RootStack.Screen name="Splash" component={Splash} />

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