import { TabNavigator  } from 'react-navigation'
import React from 'react';
import { StyleSheet, View,KeyboardAvoidingView,Text} from 'react-native';


import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'
Amplify.configure(AWSConfig)


import Tabs from './components/login/Tabs'

import Main from './Screens/Main'


export default class App extends React.Component {

  state={
    isAuthenticated :false
  }
  authenticate(isAuthenticated){
      this.setState({ isAuthenticated })
  }
  render() {
    if(this.state.isAuthenticated){
      console.log('Auth :',Auth)
      return(
      <Main/>
      )
    }


    return (

        <Tabs
            screenProps={{
              authenticate:this.authenticate.bind(this)
            }}
        />


    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff2'

    },
  });
