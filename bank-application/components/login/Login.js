import React from 'react';
import { StyleSheet, Text, View ,Image,CheckBox} from 'react-native';


import LoginForm from './LoginForm';
export default class Login extends React.Component {
  render(){
    return (
      <View>

                  <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/images.png')} />

          <View style={styles.loginContainer}>
                 <SignUpForm />
          </View>

          </View>
    );
  }
}

const styles = StyleSheet.create({

    logo: {
      marginTop:140,
        width: 400,
        height: 150
    },
    loginContainer:{
      width: 400,
      height: 50


    }
  });
