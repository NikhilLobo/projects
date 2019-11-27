import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import {DrawerNavigator,DrawerItems} from 'react-navigation'

import { Icon, Button, Container,Header,Content, Left,Body} from 'native-base'

import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import ProductsScreen from './ProductScreen'
import LogoutScreen from './LogOut'


export default class Main extends React.Component {

  render() {
    return (
      <MyApp/>
    );
  }
}

const CustomDrawerContentComponent =(props)=>(
  <Container>
        <Header style={{height:100}}>
          <Body>
            <Image
                source={require('../assets/profile.png')}
                style={styles.drawImage}
              />
          </Body>
        </Header>
        <Content style={styles.items}>
              <DrawerItems {...props} />
        </Content>
    </Container>
)

const MyApp=DrawerNavigator({
  Home:{
      screen : HomeScreen
  },
  Products:{
    screen: ProductsScreen
  },
  Settings: {
      screen : SettingScreen
  },
  LogOut:{
      screen:LogoutScreen
  }
},{
    InitialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
  })

const styles=StyleSheet.create({
  drawImage:{
    height:80,
    width:80,
    borderRadius:40,
  },
  items:{
    marginTop:5,
  }
})
