import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {DrawerNavigator} from 'react-navigation'

import { Icon, Button, Container,Header,Content, Left,Right,Center,Body,Title} from 'native-base'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={ {height:80} }>
          <Left style= {styles.icon}>
                <Icon name='ios-menu' style={ {color: 'black'}} onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                />
                <Text style={{fontSize:20,marginLeft:60,marginTop:2,color: '#808080'}}>Welcome to PACE bank App</Text>
          </Left>
          <Body style={styles.title}>

                </Body>
        </Header>
            <Content contentContainerStyle={styles.container}>
                <Text>Home Screen Page</Text>
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
