import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from './TabComponents/HomeTab.js';
import ManageTab from './TabComponents/ManageTab.js';
import NotificationTab from './TabComponents/NotificationTab.js';
import MoreTab from './TabComponents/MoreTab.js';

const AppTabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" style={{color: tintColor}} size={24} />
        ),
      },
    },
    Manage: {
      screen: ManageTab,
      navigationOptions: {
        tabBarLabel: 'Quản lý',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-podium" style={{color: tintColor}} size={24} />
        ),
      },
    },
    Notification: {
      screen: NotificationTab,
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-notifications" style={{color: tintColor}} size={24} />
        ),
      },
    },
    More: {
      screen: MoreTab,
      navigationOptions: {
        tabBarLabel: 'Cá nhân',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" style={{color: tintColor}} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#F9AA33',
    inactiveColor: '#fff',
    barStyle: {backgroundColor: '#344955'},
  },
);

const TabNavigator = createAppContainer(AppTabNavigator);

//const Drawer = createDrawerNavigator();

// //Handle Drawer
// function DrawerNavigator({navigation}) {
//   return (
//     <Drawer.Navigator
//       initialRouteName="MenuTab">
//       <Drawer.Screen name="MenuTab" component={TabNavigator} />
//       <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     </Drawer.Navigator>
//   );
// }

export default class MainScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
