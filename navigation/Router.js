import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import Resorts from '../screens/Resorts';
import Details from '../screens/Details';
import SignUp from "./screens/SignUp";



export const FeedNavigator = StackNavigator({
  SignUp: {
  screen: SignUp,
  navigationOptions: {
    title: "Sign Up"
  }
},
  Resorts: {
        screen: Resorts,
        navigationOptions: {
        title: 'Resorts',
        header: null,
        },
      },
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,
      },
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Details',
      },
    },
  },
  {
    initialRouteName: 'Home',

  }

);

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
    Resorts: {
      screen: Resorts,
      navigationOptions: {
        tabBarLabel: 'Resorts',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
    Details: {
        screen: Details,
        navigationOptions: {
          header: null,
          tabBarLabel: 'Details',
          tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
  },
  {
    initialRouteName: 'Home',
  }
);
