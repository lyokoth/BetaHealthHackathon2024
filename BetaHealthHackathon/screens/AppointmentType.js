    import React, { Component } from 'react'
    import { useNavigation } from '@react-navigation/native';
    import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
    import { SafeAreaView } from 'react-native-safe-area-context';
  
    
    export default function AppointmentType() {
        const navigation = useNavigation();
        const appointmentType = [
            {
                id: 1,
                name: 'Therapy',
                description: 'Consult with a mental health professional online',
               
            },
            {
                id: 2,
                name: 'Vital Checkup',
                description: 'Consult with a doctor online for a vital checkup',
                
            },
            {
                id: 3,
                name: 'Initial Consultation',
                description: 'Consult with a doctor online for the first time',
            
            },
            
        ]

        const handleAppointmentType = (selectedType) => {
            console.log(selectedType)
            navigation.navigate("SetAppointments", { appointmentType: selectedType })
        };   


    
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
                <View style={styles.container}>
                <Text style={styles.text}>What kind of appointment would you like?</Text>
                {appointmentType.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity key={item.id} 
                        className="w-full bg-sky-100 p-3 rounded-2xl" onPress={() => handleAppointmentType(item)}>
                        <Text style={styles.title}>{item.name}</Text>
                        
                        <Text style={styles.description}>{item.description}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            </SafeAreaView>
        )
                }
                


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        description: {
            fontSize: 16,
            flexWrap: 'wrap'
        },
        card: {
            width: 150,
            height: 150,
            borderRadius: 10,
            backgroundColor: 'bg-sky-100',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            margin: 10,
        },
    })
