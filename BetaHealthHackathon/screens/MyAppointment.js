import React, { Component } from 'react'
import { Text, Image, View, Button, StatusBar } from 'react-native'
import { SearchBar } from 'react-native-screens'

export default function MyAppointment() {
    return (
        <View className="white h-full w-full">
            <StatusBar style="light" />
            <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />

            <View className= "h-[60] w-[60] top-0">
            <Button title="Back" onPress={() => navigation.navigate("GetStarted")}></Button>
            </View>
            <View>
                <Text> 
                   Select your Insurance Provider
                </Text>
                <SearchBar placeholder="Search for Insurance Provider" />
                
            </View>
            </View>
    )
}


