
import * as React from 'react';
import { useState } from "react";
import { Button, Linking, PermissionsAndroid, ScrollView, StatusBar, StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { alert, requestLocationPermission, RootStack } from "../App";


export const Home = () => {

    
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitchLocation = () => {
        if (PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
            setIsEnabled(true);
            requestLocationPermission();
        } else {
            setIsEnabled(false);
        }
    };
    
    const isDarkMode = useColorScheme() === 'dark';
    
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    const changeDisplay = () => {
        alert('Display changed');
      }
    return (
        <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }} >
            <Section title="First Intelligent Prometheus">
              <Text>
                FIP is an open-source project to create a machine learning robot that can move and complete simple tasks.
              </Text>
              <Text style={{color: 'blue'}}
                    onPress={() => Linking.openURL('https://github.com/EOTheDev/first-intelligent-prometheus')}>
                {"\n\n"}Get to the project.
              </Text>
            </Section>
            <Section title="Settings">
             <Text onPress={  requestLocationPermission }> Location </Text>
             <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchLocation}
                value={isEnabled}
              />
              {"\n\n"}
              <Button title='Cambia schermata' onPress={changeDisplay}></Button>
              {"\n\n"}
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    );

    
}

    
    const styles = StyleSheet.create({
        sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        },
        sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        },
        sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        },
        highlight: {
        fontWeight: '700',
        },
    });

    const Section: React.FC<{
        title: string;
      }> = ({children, title}) => {
        const isDarkMode = useColorScheme() === 'dark';
        return (
          <View style={styles.sectionContainer}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                },
              ]}>
              {title}
            </Text>
            <Text
              style={[
                styles.sectionDescription,
                {
                  color: isDarkMode ? Colors.light : Colors.dark,
                },
              ]}>
              {children}
            </Text>
          </View>
        );
      };