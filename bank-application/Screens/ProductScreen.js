import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {DrawerNavigator} from 'react-navigation'

import { Icon, Button, Container,Header,Content, Left,Right,Center,Body,Title,Card,CardItem} from 'native-base'

export default class ProductsScreen extends React.Component {


  constructor() {
     super();
     this.state = { showMessage: false }
   }
   _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  render() {
    return (
      <Container>
        <Header style={ {height:80} }>
          <Left style= {styles.icon}>
                <Icon name='ios-menu' style={ {color: 'black'}} onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                />
                <Text style={{fontSize:20,marginLeft:60,marginTop:2,color: '#808080'}}>Services we provide</Text>
          </Left>
          <Body style={styles.title}>

                </Body>
        </Header>
            <Content contentContainerStyle={styles.container}>
            <Card>
            <CardItem header button onPress={() => { this._showMessage.bind(null, true),
              console.log("Calliing"),
              alert("Minimum Balance required is $20")
            }}>

            <CardItem header borderRadius={5}  bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <Text>Saving Account</Text>
            </CardItem>
            </CardItem>


                </Card>

                <Card>
                <CardItem header button onPress={() => alert("Minimum Balance required is $30")}>
                        <CardItem borderRadius={5} header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                            <Text>
                                Checking Account
                            </Text>
                        </CardItem>
                          </CardItem>

                    </Card>
                    <Card>
                    <CardItem header button onPress={() => alert("Minimum Balance required is $40")}>
                            <CardItem borderRadius={5} header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <Text>
                                      Money Market
                                </Text>
                            </CardItem>
                        </CardItem>
                        </Card>
                        <Card >
                        <CardItem header button onPress={() => alert("Minimum Balance required is $40")}>
                                <CardItem borderRadius={5} header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                    <Text>
                                          CD Account
                                    </Text>
                                </CardItem>
                              </CardItem>
                            </Card>
                            <Card >
                            <CardItem header button onPress={() => alert("Minimum Balance required is $30")}>
                                    <CardItem borderRadius={5} header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                        <Text>
                                              IRA CD Account
                                        </Text>
                                    </CardItem>
                                  </CardItem>
                                </Card>

                                  { this.state.showMessage && (<div>hello world!</div>) }

            </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop:50
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
