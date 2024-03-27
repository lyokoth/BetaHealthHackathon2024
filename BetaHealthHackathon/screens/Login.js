import {View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
    const navigation = useNavigation();

    
    return (
        <View className="white h-full w-full">
            <StatusBar style="light" />
            <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />

            <View className= "h-[60] w-[60] top-0">
            <Button title="Back" onPress={() => navigation.navigate("WelcomeScreen")}></Button>
            </View>
            <View className="absolute w-[160px] h-[23px] top-[126px] left-[127px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15.7px] text-center tracking-[-0.28px] leading-[normal]">
          <Text>Sign into your account</Text>
        </View>
        <View className="absolute h-[19px] top-[203px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15.7px] text-center tracking-[-0.28px] leading-[normal]">
        <Text>E-mail:</Text>
        </View>
        <View className="absolute w-[300px] h-[57px] top-[248px] left-[37px] bg-black/5 rounded-2xl">
        <TextInput placeholder="Email" placeholderTextColor={'gray'} />
            </View> 
            <View className="absolute h-[19px] top-[328px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15.7px] text-center tracking-[-0.28px] leading-[normal]">
        <Text>Password:</Text>
        </View>
        <View className="absolute w-[300px] h-[57px] top-[373px] left-[37px] bg-black/5 rounded-2xl">
        <TextInput placeholder="Password" placeholderTextColor={'gray'} />
            </View> 
           
            <View className="absolute w-[300px] h-[57px] top-[500px] left-[37px] bg-black/5 rounded-2xl">
            <TouchableOpacity color="text-white" className="bg-[#8fafff] w-[300px] h-[57px] rounded-2xl flex justify-center items-center" onPress={() => navigation.navigate('Home')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
            </View>
            
            <View className="absolute h-[19px] top-[600px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15.7px] text-center tracking-[-0.28px] leading-[normal]">
        <Text>Don't have an account?
          <TouchableOpacity>
            <Text className="text-sky-100">Sign Up</Text>
        </TouchableOpacity>
        
        </Text>
        </View>
            
          
        </View>
  
    )
}
