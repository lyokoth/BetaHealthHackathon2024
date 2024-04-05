import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useColorScheme } from 'nativewind';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import GetStarted from './screens/GetStarted';
import Home from './screens/Home';
import WelcomeScreen from './screens/WelcomeScreen';
import BookConsultation from './screens/BookConsultation';
import MyAppointment from './screens/MyAppointment';
import BottomNavi from './components/BottomNavi';

import UserProfile from './screens/UserProfile';
import HealthRecords from './screens/HealthRecords';
import SetAppointment  from './screens/SetAppointments';
import AppointmentType from './screens/AppointmentType';
//import  SelectLanguage  from './screens/SelectLanguage';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> 
       <Stack.Screen name="Login" component={Login} /> 
       <Stack.Screen name="Home" component={Home} />  
        <Stack.Screen name="SignUp" component={SignUp} /> 
         <Stack.Screen name="GetStarted" component={GetStarted} />
         <Stack.Screen name="BookConsultation" component={BookConsultation} />
         <Stack.Screen name="MyAppointment" component={MyAppointment} />
         <Stack.Screen name="SetAppointments" component={SetAppointment} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="SetAppointment" component={SetAppointment} />
          <Stack.Screen name="HealthRecords" component={HealthRecords} />
          <Stack.Screen name="AppointmentType" component={AppointmentType} />

     
         {/* <Stack.Screen name="SelectLanguage" component={SelectLanguage} /> */ }

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