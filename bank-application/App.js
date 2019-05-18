import React from 'react';
import { StyleSheet, Text, View ,Image, KeyboardAvoidingView} from 'react-native';


import Login from './components/login/Login';
export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding" enabled
      >
                <Login />
          </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',

    },
  });
