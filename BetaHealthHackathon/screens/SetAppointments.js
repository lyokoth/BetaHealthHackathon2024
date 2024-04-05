import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CalendarPicker from 'react-native-calendar-picker';
import { Button, Text, View } from "react-native";

class SetAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
        };
    }

    doctorAvailability = (availability, date) => {
        for (const range of availability) {
            const startDate = new Date(range.startDate);
            const endDate = new Date(range.endDate);
            if (date >= startDate && date <= endDate) {
                return true;
            }
        }
        return false;
    };

    render() {
        const { navigation } = this.props;
        const { date } = this.state;

        const doctor = [
            {
                'id': 1,
                'name': 'Dr. John Doe',
                'specialty': 'Diabetes Specialist',
                'rating': '4.5/5',
                availability: [
                    { startDate: '2024-04-04', endDate: '2024-04-10' },
                    { startTime: '09:00', endTime: '17:00' },
                ]
            },
            {
                'id': 2,
                'name': 'Dr. Jane Doe',
                'specialty': 'Therapist',
                'rating': '4.5/5',
                availability: [
                    { startDate: '2024-04-04', endDate: '2024-04-10' },
                    { startTime: '09:00', endTime: '17:00' },
                ]
            },
            {
                'id': 3,
                'name': 'Dr. Cathy Doe',
                'specialty': 'Dermatologist',
                'rating': '4.5/5',
                availability: [
                    { startDate: '2024-04-04', endDate: '2024-04-10' },
                    { startTime: '09:00', endTime: '17:00' },
                ]
            }
        ];

        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Set Appointments</Text>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Select a date</Text>
                        <CalendarPicker
                            selectedDayColor="#8fafff"
                            onDateChange={(date) => this.setState({ date })}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Select a doctor</Text>
                        {doctor.map((doc) => (
                            <View key={doc.id} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{doc.name}</Text>
                                    <Text>{doc.specialty}</Text>
                                    <MaterialCommunityIcons name="star" size={24} color="black" />
                                    <Text>{doc.rating}</Text>
                                </View>
                                <Button 
                                    title="Select" 
                                    onPress={() => navigation.navigate('DoctorProfile', { doctor: doc })}
                                    disabled={!this.doctorAvailability(doc.availability, this.state.date)}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default SetAppointments;
