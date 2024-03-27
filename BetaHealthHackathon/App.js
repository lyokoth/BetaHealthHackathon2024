import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch, StyleSheet } from 'react-native';
import * as React from 'react';
import { useColorScheme } from 'nativewind';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import GetStarted from './screens/GetStarted';
import WelcomeScreen from './screens/WelcomeScreen';
import BookConsultation from './screens/BookConsultation';


const Stack = createNativeStackNavigator();

export default function App() {
  const {colorScheme, setColorScheme} = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
       <Stack.Screen name="Login" component={Login} /> 
         <Stack.Screen name="SignUp" component={SignUp} /> 
         <Stack.Screen name="GetStarted" component={GetStarted} />
         <Stack.Screen name="BookConsultation" component={BookConsultation} />
      </Stack.Navigator>
      </NavigationContainer>


  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#87CEEB',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

// Path: BetaHealthHackathon/screens/Login.js