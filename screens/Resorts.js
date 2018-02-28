import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, FlatList, Header, Divider, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


export default class Resorts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resorts: [
        {
          "name": "Hotel Atlantis",
          "stars": "4",
          "images": [
            { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Current_water_ride_at_Atlantis_Bahamas.jpg/1024px-The_Current_water_ride_at_Atlantis_Bahamas.jpg" },
            ],
          "price" : "599.00"
        },
        {
          "name": "Hotel Atlantis",
          "stars": "4",
          "images": [
            { "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Current_water_ride_at_Atlantis_Bahamas.jpg/1024px-The_Current_water_ride_at_Atlantis_Bahamas.jpg" },
            ],
          "price" : "599.00"
        },
      ],
    }
  }
  static navigationOptions = {
    title: 'Resorts'
  };
  _onLearnMore(){
    this.props.navigation.navigate('Details');
  };
  countStars(stars){
  let payments = [];
	for(let i = 0; i < stars; i++){
		payments.push(
			<Icon name='star' color='#f9a825' key={i}/>
		)
   };
   return payments;
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>


        <View style={styles.header}>
          <Header
            style={styles.headerComponent}
            statusBarProps={{ barStyle: 'light-content' }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Atlantis Tours', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            innerContainerStyles={{ justifyContent: 'space-between',}}
          />
        </View>
        <ScrollView style={styles.scroll}>
        <View style={styles.subHeader}>
        </View>
        <View style={styles.resorts}>
            <Card title="Resorts">
            {
              this.state.resorts.map((u, i) => {
                return (
                <TouchableHighlight onPress={()=>navigate('Details')} key={i} >
                  <View style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.images[0].url }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View>
                        <Text style={styles.name}>{u.name}</Text>
                      </View>
                      <View>
                        <Text style={styles.price}>Five Days</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={styles.rate}>
                        {this.countStars(u.stars)}
                      </View>
                      <View>
                        <Text style={{color: '#f9a825', fontSize: 19}}>USD {u.price}</Text>
                      </View>
                    </View>
                    <Divider style={{ backgroundColor: 'white', height: 0.3, marginTop: 10, marginBottom: 10 }} />
                  </View>
                </TouchableHighlight>
                );
              })
            }
          </Card>
       </View>
       </ScrollView>

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
    fontSize: 16,
    color: '#37474f'
  },
  price:{
    marginTop: 14,
    marginBottom: 5,
    fontWeight:'300',
    fontSize: 12,
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
