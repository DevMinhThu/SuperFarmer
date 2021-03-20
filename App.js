import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import MainScreen from './Components/MainScreen';
import MoreTab from './Components/TabComponents/MoreTab';
import HomeTab from './Components/TabComponents/HomeTab';
import ManageTab from './Components/TabComponents/ManageTab';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificationTab from './Components/TabComponents/NotificationTab';
import MaterialTabNavigation from './Components/MainScreen';
import Login from './Components/Screens/Login';
import Splash from './Components/Screens/Splash';
import Register from './Components/Screens/Register';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: MainScreen,
    },
    Home: {
      screen: HomeTab,
      navigationOptions: {
        header: null,
      },
    },
    Manage: {
      screen: ManageTab,
      navigationOptions: {
        title: 'Manage',
      },
    },
    Notification: {
      screen: NotificationTab,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(RootStack);

// const AppContainer = createAppContainer(RootStack);

// export default class App extends Component {
//   render() {
//     return (
//        <AppContainer />
//     )
//   }
// }
