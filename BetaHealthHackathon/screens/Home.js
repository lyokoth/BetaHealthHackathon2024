import React, {Component} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Button , StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Avatar, SearchBar } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from 'react-native-elements';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
        };
      }

    
    async componentDidMount() {
        const firstName = await AsyncStorage.getItem('firstName');
        this.setState({ firstName });
      }
    
    
 
render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
          <Image className="fixed w-[143px] h-[115px] top-0 left-0" source={require('../assets/Ellipse 1.png')} />
              <Text style={styles.text}>Welcome, {this.state.firstName}! </Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
              <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AppointmentType")}>
                <Card containerStyle={styles.card}>
                  <MaterialCommunityIcons name="calendar-clock" size={32} color="black" />
                    <Text style={styles.text}>My Appointments</Text>
                    <Text>View and set your upcoming appointments</Text>
                    
                </Card>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate("HealthRecords")}>
                  <Card containerStyle={styles.card2}>
                    <MaterialCommunityIcons name="heart-pulse" size={32} color="black" />
                      <Text style={styles.text}>My Health Records</Text>
                      <Text>View your health records</Text>
                  </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Chat")}>
                    <Card containerStyle={styles.card2}>
                      <MaterialCommunityIcons name="message-text" size={32} color="black" />
                        <Text style={styles.text}>Chat with a specialist</Text>
                    </Card>
                  </TouchableOpacity>
   
                 
                </View>
              </View>
            </View>
        </SafeAreaView>
    )
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card2: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
  },
});