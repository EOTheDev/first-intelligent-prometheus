
import * as React from 'react';
import { useState } from "react";
import { Button, Linking, PermissionsAndroid, ScrollView, StatusBar, StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { alert, requestLocationPermission } from "../App";


export const Home = () => {
    return (
    <ScrollView>
        <Text>Home</Text>
    </ScrollView> 
    );

    
}

