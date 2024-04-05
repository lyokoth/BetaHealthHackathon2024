import { View, Text, Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
    const navigation = useNavigation();

  return (
    <View className="light h-full w-full">
        <StatusBar style="light" />
      <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />
      <View className="absolute w-[109px] h-[27px] top-[87px] left-[138px]">
        <Text className="text-black font-bold tracking-wider text-xl">
            RuralCare
        </Text>
        </View>
        <View>

        </View>


        <View className="flex items-center">
            <Image className="h-[150] w-[150] top-20" source={require('../assets/Standard Collection 10.png')} />
            </View>
         

            <View className="flex items-center mx-4 space-y-4" style={{marginTop: 110}}>
                <Text className="text-black font-bold tracking-wider text-2xl">
                 What We Can Do
                </Text>
                <Text className="text-black font tracking-wider text-2xl">
                    We provide accessible healthcare to all via telehealth.
                </Text>
                        
                    </View>
                    <View className="flex items-center mx-4 space-y-4">
                        <TouchableOpacity className="w-full bg-sky-100 p-3 rounded-2xl">
                        <Button title="Existing patient? Sign in"  onPress={() => navigation.navigate("Login")}/>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-full bg-gray-200 p-3 rounded-2xl">
                            <Button title="Get Started" onPress={() => navigation.navigate("GetStarted")}/>
                            </TouchableOpacity>
                            <View className="flex-row justify-center" style={{marginTop: 155}}>
                                <Text>Don't have an account?</Text>
                                <TouchableOpacity>
                                    <Text className="text-sky-100"
                                    onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
                                    </TouchableOpacity>
                    </View>
                    </View>      
    </View>
    )
}