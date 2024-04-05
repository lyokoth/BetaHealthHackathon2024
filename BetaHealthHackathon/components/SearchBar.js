import * as React from 'react';
import { Text, TextInput, View, Keyboard, Button, StyleSheet } from 'react-native';

const SearchBar = () => {
    const insuranceProviders = [
        'Aetna',
        'Blue Cross Blue Shield',
        'Cigna',
        'Humana',
        'UnitedHealthcare',
        'Kaiser Permanente',
        'Anthem',
        'Centene',
    ];

    const styles = StyleSheet.create({
        separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
        },
    });

    return (
        <View>
            <TextInput
                placeholder="Search for Insurance Provider"
            />
            <Button title="Search" onPress={Keyboard.dismiss} />
            <View style={styles.separator}>
            {insuranceProviders.map((provider) => (
                <Text key={provider}>{provider}</Text>
            ))}
            </View>
        </View>

    );
}
export default SearchBar;
