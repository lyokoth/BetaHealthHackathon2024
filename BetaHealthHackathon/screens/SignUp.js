import  React, {Component, useState, useEffect} from 'react'

import { Text, Image, View, Button, TouchableOpacity, TextInput, StatusBar, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        isCheck: false,
        passwordMatchError: '',
        emailFormatError: '',
      };
    }
  
    handleSignup = async () => {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isCheck
      } = this.state;
  
      if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill all fields.');
        return;
      }
  
      if (password !== confirmPassword) {
        this.setState({ passwordMatchError: 'Passwords must match.' });
        return;
      } else {
        this.setState({ passwordMatchError: '' });
      }

  
      const emailExits = email.includes('@');
        if (!emailExits) {
            this.setState({ emailFormatError: 'Email format is incorrect.' });
            return;
        }
        // checking if the email exists in the database

    
  
      if (!isCheck) {
        alert('Please agree to the Terms and Conditions.');
        return;
      }

      try {
        await AsyncStorage.setItem('firstName', firstName);
        this.props.navigation.navigate('Home', { firstName });
        alert('Account created successfully.');
      } catch (error) {
        console.error('Error saving data:', error);
        alert('Error creating account. Please try again.');
      }
  
      
      
}
  
    render() {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        showPassword,
        isCheck,
        passwordMatchError,
        emailFormatError
      } = this.state;
  
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle="dark-content" />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/Standard Collection 10.png')} style={{ width: 200, height: 200 }} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Sign Up</Text>
            <View style={{ width: '80%', marginTop: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => this.setState({ firstName: text })}
              />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(text) => this.setState({ lastName: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="name@domain.com"
                    value={email}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={(text) => this.setState({ confirmPassword: text })}
                />
              <Text style={{ color: 'red', marginBottom: 10 }}>{passwordMatchError}</Text>
              <TouchableOpacity onPress={() => this.setState({ showPassword: !showPassword })}>
                <Text style={{ color: 'blue' }}>{showPassword ? 'Hide' : 'Show'} Password</Text>
              </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ isCheck: !isCheck })}>
                    <Text>{isCheck ? 'Uncheck' : 'Check'} I agree to the Terms and Conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity style="w-full bg-sky-100 p-3 rounded-2xl">
              <Button title="Sign Up" onPress={this.handleSignup} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )
    }
  }
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10
    }
  });
  