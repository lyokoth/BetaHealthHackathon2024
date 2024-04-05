import React, {Component, useState, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';   


export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        showPassword: false,
        rememberMe: false,
      };
    }
  
    buttonClick = () => {
      this.props.navigation.navigate('Home', {name: 
    this.state.firstName});
    };
  
    InsertRecord = () => {
      const { email, password } = this.state;
  
      if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
      
      // Continue with login process
      this.props.navigation.navigate('Home');
    ;
  
        // Send data to server
         
    };
  
    render() {
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <StatusBar style="auto" />
          <View>
            <Image source={require('../assets/Standard Collection 10.png')} style={{ width: 200, height: 200 }} />
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!this.state.showPassword}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
            <TouchableOpacity onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
              <Text className='bold text-sky-100'>{this.state.showPassword ? 'Hide' : 'Show'} Password</Text>
            </TouchableOpacity>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.rememberMe}
                onValueChange={() => this.setState({ rememberMe: !this.state.rememberMe })}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Remember Me</Text>
            </View>
            <TouchableOpacity className="w-full bg-sky-100 p-3 rounded-2xl">
            <Button title="Login" onPress={this.InsertRecord} />
            </TouchableOpacity>
      
            <TouchableOpacity onPress={this.buttonClick}>
              <Text>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 200,
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
  });