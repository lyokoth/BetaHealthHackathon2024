import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {View, Text, Button, Image, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';



export default function BookConsultation() {
    const navigation = useNavigation();

    return (
      <View className="white h-full w-full">
        <StatusBar style="light" />
        <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />
        <Text className="absolute  h-[27px] top-[155px] left-[110px] text-black font-bold tracking-wider text-xl">
            Who is the appointment for?
        </Text>
        <View className= "h-[60] w-[60] top-0">
        <Button title="Back" onPress={() => navigation.navigate("GetStarted")}></Button>

       </View>
       <View className="flex items-center mx-4 space-y-4" style={{marginTop: 110}}>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "Me" onPress={() => navigation.navigate("MyAppointment")}/>
    </TouchableOpacity>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "My Child" onPress={() => navigation.navigate("BookTherapy")}/>
    </TouchableOpacity>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "Someone else" onPress={() => navigation.navigate("Login")}/>

    </TouchableOpacity>
    </View>
      </View>
    )
  }


