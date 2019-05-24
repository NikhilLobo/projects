import React from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

import {DrawerNavigator} from 'react-navigation'

import { Icon, Container,Header,Content, Left,Right,Center,Body,Title} from 'native-base'

import SettingScreen from './SettingScreen'

export default class LogoutScreen extends React.Component {


  render() {
    return (
      <Container>
        <Header style={ {height:80} }>
          <Left style= {styles.icon}>
                <Icon name='ios-menu' style={ {color: 'black'}} onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                />
                <Text style={{fontSize:20,marginLeft:60,marginTop:2,color: '#808080'}}>Logging Out of the App</Text>
          </Left>
          <Body style={styles.title}>

                </Body>
        </Header>
            <Content contentContainerStyle={styles.container}>

                      <Button onPress={() => this.props.navigation.navigate('SettingScreen')} title="Log Out"/>
            </Content>
      </Container>
    );
  }
}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
      flex:5,
      justifyContent:'flex-start',
      flexDirection: 'row',
      marginTop:25,
      marginLeft:20,
    },
    title:{

      color: 'silver',
      fontWeight: 'bold',


    }
  });
