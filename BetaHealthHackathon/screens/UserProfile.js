import { View, Text, Image, Button, ViewBase } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';


const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#ffff',
    }}>

        <Image source={require('../assets/Ellipse 1.png')} />
   


<View style={{flex: 1, alignItems: "center"}}>
  <Image
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  style={{
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: -9
  }}></Image>

<Text style={{
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  marginTop: 10,
  marginVertical: 8,
}}>Your Name</Text>
<MaterialCommunityIcons
name="map-marker-radius"
size={24}
color="black"
/>


<Text style={{
  fontSize: 15,
  color: 'black',
  marginVertical: 8,
}}></Text>

<View style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  marginVertical: 8,
}}>
  <Button
  title="Edit Profile"
  onPress = {() => navigation.navigate('EditProfile')}
  />
<Button title = "Set Appointment" onPress={() => navigation.navigate("SetAppointment")}/>
</View>

<View>

    <Text style={{fontWeight: 'bold'}}>Your Appointments:</Text>
    <Card>
      <Card.Title>Dr. John Doe</Card.Title>
      <Card.Divider/>
      <Text style={{marginBottom: 10}}>
        Appointment Date: 10/10/2021
      </Text>
      <Button icon={<MaterialCommunityIcons name="phone" size={15} color="white" />} title="Call" />
      
    </Card>
   </View>    
</View>
</SafeAreaView>



  );
}
export default UserProfile;

  