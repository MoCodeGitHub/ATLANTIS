import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { Card, ListItem, Button, FlatList, Header, Divider, Icon, SocialIcon } from 'react-native-elements';

export default class App extends React.Component {

  render(){
    const { navigate } = this.props.navigation;
    return (

        <View style={styles.container}>
            <ImageBackground
              source= {{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Atlantis_Resort_framed_by_flowers.jpg/1280px-Atlantis_Resort_framed_by_flowers.jpg' }}
              style={styles.image}>
              <View style={styles.header}>
                <Text style={{color: 'white', fontSize: 50, fontWeight:'500'}}>Atlantis</Text>
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
                  title='Sign In With Twitter'
                  button
                  type='twitter'
                  onPress={() => navigate('Resorts') }
                />
                <SocialIcon
                  style={styles.socialIcon}
                  title='Sign In With Instagram'
                  button
                  type='instagram'
                  onPress={() => navigate('Resorts') }
                />
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
    flex:6,
    alignContent: 'center',
    justifyContent: 'center'
  },
  social:{
    flex: 3
  },
  socialIcon:{
    padding: 40,
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
