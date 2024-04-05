import React, { Component } from 'react'
import { Text, Image, View, Button, StatusBar, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';


export default function MyAppointment() {
const navigation = useNavigation();
   
    return (
        <View className="white h-full w-full">
            <StatusBar style="light" />
            <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />

            <View className= "h-[60] w-[60] top-0">
            <Button title="Back" onPress={() => navigation.navigate("GetStarted")}></Button>
            </View>
            <Text className="absolute h-[27px] top-[155px] text-black font-bold tracking-wider text-xl">
                Let's help you find the lowest cost healthcare provider!

            </Text>
            <TouchableOpacity className="bg-gray-200 p-3 top-[175px] rounded-2xl">
            <Button title = "Use your Insurance" onPress={() => navigation.navigate("SelectInsurance")}/>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 p-3 top-[200px] rounded-2xl">
            <Button title = "Continue without Insurance" onPress={() => navigation.navigate("LocationPermission")}/>
            </TouchableOpacity>


         
            </View>
    )
}


