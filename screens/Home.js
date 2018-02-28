import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { Card, ListItem, Button, FlatList, Header, Divider, Icon, SocialIcon } from 'react-native-elements';

export default class App extends React.Component {

  render(){
    const { navigate } = this.props.navigation;
    return (

        <View style={styles.container}>
            <ImageBackground
              source= {{ uri: 'img/cove-at-atlantis-e1505801918589-1024x704.jpg' }}
              style={styles.image}>
              <View style={styles.header}>
                <Text style={{fontSize: 29, fontWeight:'500'}}>Atlantis Tours</Text>
              </View>
              <View style={styles.social}>
                <SocialIcon
                  style={styles.socialIcon}
                  title='Sign In With Facebook'
                  button
                  type='facebook'
                  onPress={() => navigate('Resorts') }
                />
                <SocialIcon
                  style={styles.socialIcon}
                  title='Sign in Twitter Message'
                  button
                  type='twitter'
                  onPress={() => navigate('Resorts') }
                />
              </View>
              <View style={styles.footer}>
                <Text style={{color: 'white'}}>Copyright Atlantis - 2018</Text>
              </View>
            </ImageBackground>
        </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  header:{
    flex: 8,
    alignContent: 'center',
    justifyContent: 'center'
  },
  social:{
    flex: 3
  },
  footer:{
    flex: 1,
  },
  socialIcon:{
    padding: 30,
  },
  image:{
    flex: 1,
		width:'100%',
    height: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
