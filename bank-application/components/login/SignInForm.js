import React from 'react';
import { StyleSheet, Text, View,TextInput, Alert, Button, StatusBar,Image,KeyboardAvoidingView} from 'react-native';


import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'
Amplify.configure(AWSConfig)
export default class SignInForm extends React.Component {

  state={
        username:'',
        password:'',
        confirmatoinCode:'',
        user:{}
  }
  onChangeText(key,value)
  {
    this.setState({
      [key]:value
    })
  }

  signIn()
  {
    const { username,password } =this.state
    Auth.signIn({username,password})
    .then(user=>{
      this.setState({ user })

      console.log('Successfull sign in')
      Alert.alert('Enter the confirmation code you received.')}
    )
    .catch(err=>console.log('error sign in',err))
  }
  confirmSignIn()
  {
      Auth.confirmSignIn(this.state.user,this.state.confirmatoinCode)
      .then(()=>{
        this.props.screenProps.authenticate(true)
        console.log('Successfull confirmation')})
      .catch(err=>console.log('err confirmation',err))
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position" enabled
      style={styles.container}>
      <View style={styles.logo}>
        <Image resizeMode="contain" source={require('../../components/images/images.png')} />
      </View>
      <TextInput style = {[styles.input,{  marginTop: 20,}]}

               placeholderTextColor='rgba(225,225,225,0.7)'
               onChangeText = { value => this.onChangeText('username',value)}
              placeholder="User Name"/>

      <TextInput style = {styles.input}

              placeholderTextColor='rgba(225,225,225,0.7)'

              onChangeText = { value => this.onChangeText('password',value)}
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}/>



            <Button title="SignIn" style={{marginBottom:50}} onPress={this.signIn.bind(this)} />


     <TextInput
              onChangeText = { value => this.onChangeText('confirmatoinCode',value)}
              style={[styles.input, {marginTop: 20}]}
              placeholder="confirmation Code"
          />


           <Button title="confirm Sign In" onPress={this.confirmSignIn.bind(this)} />



          </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
     padding: 40,
     paddingBottom:40,
     backgroundColor: '#2c3e50',



    },
    logo:{
        alignItems:'center',
        marginTop:20
    },
    check:{
      flexDirection: 'row',
       alignItems : 'center',
       marginBottom:20


    },
    checkBox :{
      backgroundColor: 'silver',
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
