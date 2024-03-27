import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function GetStarted() {
    const navigation = useNavigation();

    return (
        <View className="white h-full w-full">
        <StatusBar style="light" />
        <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />
        <Text className="absolute  h-[27px] top-[155px] left-[110px] text-black font-bold tracking-wider text-xl">
            How can we help you?
        </Text>
        <View className= "h-[60] w-[60] top-0">
        <Button title="Back" onPress={() => navigation.navigate("WelcomeScreen")}></Button>
        </View>
<View className="flex items-center mx-4 space-y-4" style={{marginTop: 110}}>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "Book a Consultation" onPress={() => navigation.navigate("BookConsultation")}/>
    </TouchableOpacity>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "Book a Therapy Session" onPress={() => navigation.navigate("BookTherapy")}/>
    </TouchableOpacity>
    <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
    <Button title = "Sign In" onPress={() => navigation.navigate("Login")}/>

    </TouchableOpacity>
    </View>
      </View>
    )
}   