import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'; // Correct import
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import UserProfile from '../screens/UserProfile';
import Settings from '../screens/Settings';


const Tab = createBottomTabNavigator();

function BottomNavi() {
    return (
        <Tab.Navigator
          initialRouteName='Home'
          tabBar={{
            showLabel: false,
            style: {
              backgroundColor: '#8e44ad',
              position: 'absolute',
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            }
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="UserProfile" component={UserProfile} />  // Add this line
          <Tab.Screen name="Settings" component={Settings} />  // Add this line
        </Tab.Navigator>
    );
}
export default BottomNavi;