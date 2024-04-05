import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const Settings = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View>
                <Text>Settings</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default Settings;