import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, FlatList, Header, Divider, Icon } from 'react-native-elements';


export default class Details extends React.Component {
  render(){
    return (

      <View style={styles.container}>
        <Text>Atlantis Resorts</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  header:{
    width: '100%',
    height: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between'
  },
  headerComponent:{
    flexDirection: 'row',
    flex: 1,
    height: 50,
    width: 300,
    backgroundColor: '#ffffff',
    justifyContent: 'space-around'
  },
  scroll:{
    width: '100%'
  },
  Resorts:{
    flex: 1,
    width: '100%',
    backgroundColor: '#cccccc',
  },
  subHeader:{
    flex: 1,
    backgroundColor: '#cccccc',
  },
  user:{
    width: '100%',
    backgroundColor: 'white',
  },
  image:{
    width: '100%',
    height: 180
  },
  name:{
    marginTop: 10,
    marginBottom: 5,
    fontWeight:'500',
    fontSize: 18,
    color: '#37474f'
  },
  price:{
    marginTop: 15,
    marginBottom: 5,
    fontWeight:'300',
    fontSize: 13,
    color: '#37474f'
  },
  rate:{
    flexDirection: 'row'
  },
  Box:{
  shadowColor: 'black',
  shadowOpacity: .2,
  shadowOffset:
          {
            height:1,
            width:-1,
          },
          elevation: 2,
      },
});
