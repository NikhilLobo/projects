import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert, Button, StatusBar, KeyboardAvoidingView } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View
      style={styles.container}>
      <TextInput style = {styles.input}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='User Name'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

<TextInput style = {styles.input}
              returnKeyType="go"
              ref={(input)=> this.passwordInput = input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.7)'
              secureTextEntry/>

<TouchableOpacity style={styles.buttonContainer}
                     >
             <Text  style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonContainer}
                     >
             <Text  style={styles.buttonText}>SIGNUP</Text>
</TouchableOpacity>
           </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
     padding: 40,
     paddingBottom:40

    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 20,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
          marginBottom: 20,
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  });
