import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import BottomNavi from '../components/BottomNavi';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GetStarted() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View syles={styles.container}>
            <StatusBar style="light" />
            <Image style={styles.image} source={require('../assets/Ellipse 1.png')} />
            <Text style={styles.title}>
                How can we help you?
            </Text>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
           <Button title="Back"></Button>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1}>
                <Button title="Book a Consultation" onPress={() => navigation.navigate("Login")}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Button title="Book a Therapy session" onPress={() => navigation.navigate("Login")}></Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Button title="Sign In" onPress={() => navigation.navigate("Login")}></Button>
              </TouchableOpacity>
            
                
           
     </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        position: 'absolute',
        width: 143,
        height: 115,
        top: 0,
        left: 0,
    },
    title: {
        position: 'absolute',
        height: 27,
        top: 155,
        left: 100,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 'wider',
    },
    backButton: {
        position: 'absolute',
        top: 0,
        height: 60,
        width: 60,
    },
    button1: {
        backgroundColor: 'white',
        padding: 10,
        top: 200,
        borderRadius: 20,
    },
    button2: {
        backgroundColor: 'white',
        padding: 10,
        top: 250,
        borderRadius: 20,
    },
    button3: {
        backgroundColor: 'white',
        padding: 10,
        top: 300,
        borderRadius: 20,
    },

    }

);
// Path: BetaHealthHackathon/screens/GetStarted.js