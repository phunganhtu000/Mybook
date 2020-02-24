import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import Home from './pages/Home';
// import Bookcase from './pages/Bookcase';
// import News from './pages/News';
// import Profile from './pages/Profile';

import Home from './pages/Home';
import Author from './pages/Author';
import Category from './pages/Category';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import HeaderComponents from './components/headerComponents';
import CustomHeaderHome from './components/CustomHeaderHome';

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Author: {
    screen: Author,
    navigationOptions: ({navigation}) => ({
      title: 'Tác giả',
      headerLeft: <CustomHeaderHome navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#E4CDCD',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
      title: 'Thể loại',
      headerLeft: <CustomHeaderHome navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#E4CDCD',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Menu_Scren = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
});
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Menu_Scren: {
    screen: Menu_Scren,
    navigationOptions: {
      title: 'Trang chủ',
    },
  },
  NavScreen1: {
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      title: 'Tác giả',
    },
  },
  NavScreen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      title: 'Thể loại',
    },
  },
});
const AppNavigator = createStackNavigator({
  DrawerNavigatorExample: {
    screen: DrawerNavigatorExample,
    navigationOptions: {
      header: null,
    },
  },
  // Menu: {
  //   screen: DrawerNavigatorExample,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
});

const App = createAppContainer(AppNavigator);
export default App;
