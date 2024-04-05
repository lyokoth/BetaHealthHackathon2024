import * as React from 'react';
import { Text, 
    TouchableOpacity, StatusBar, Image, TextInput, View, Keyboard, Button, StyleSheet } from 'react-native';

export default SelectLanguage = () => {
    const languages = [
        'English',
        'Français',
        'Kiswahili',
,
    ];

   return (
    <View className="white h-full w-full">
    <StatusBar style="light" />
    <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />
    <Text className="absolute  h-[27px] top-[155px] left-[110px] text-black font-bold tracking-wider text-xl">
        Select your language
    </Text>
    <View className= "h-[60] w-[60] top-0">
    <Button title="Back" onPress={() => navigation.navigate("GetStarted")}></Button>
    </View>
    <View className="flex items-center mx-4 space-y-4" style={{marginTop: 110}}>
    {languages.map((language) => (
        <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
        <Button title = {language} onPress={() => navigation.navigate("GetStarted")}/>
        </TouchableOpacity>
    ))}
    </View>
    </View>

   )
    }