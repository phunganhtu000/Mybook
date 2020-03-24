import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'native-base';
import Home from './pages/Home';
import {setWidth} from './cores/baseFuntion';
import NewDetail from './pages/NewDetail/NewDetail';
import Author from './pages/Author';
import AuthorDetail from './pages/AuthorDetail/AuthorDetail';
import Category from './pages/Category';
import BookDetail from './pages/BookDetail/BookDetail';
import Profile from './pages/Profile';
import Menu from './pages/Menu';
import HeaderComponents from './components/headerComponents';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import CustomHeaderHome from './components/CustomHeaderHome';
import HeaderAuthor from './components/headerAuthor';
import BookSpeak from './pages/BookcaseDetail/BookSpeak';
import BookAudio from './pages/BookcaseDetail/BookAudio';
import Viewall from './pages/BookDetail/Viewall';
import Search from './pages/Search';

class HeaderLefp extends Component {
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigationProps;
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: setWidth('5%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => navigate('Menu_Scren')}>
        <Icon
          name="ios-arrow-back"
          type="Ionicons"
          style={{fontSize: 25, color: '#00003D'}}
        />
      </TouchableOpacity>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Author: {
    screen: Author,
    navigationOptions: ({navigation}) => ({
      title: 'Danh sách tác giả',
      headerLeft: <HeaderLefp navigationProps={navigation} />,
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Category: {
    screen: Category,
    navigationOptions: ({navigation}) => ({
      title: 'Danh sách thể loại',
      headerLeft: <HeaderLefp navigationProps={navigation} />,
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
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Menu_Scren: {
      screen: Menu_Scren,
      navigationOptions: {
        title: 'Trang chủ',
      },
    },
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: ({navigation}) => ({
        title: 'Tác giả',
      }),
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        title: 'Thể loại',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 100,
  },
);
const AppNavigator = createStackNavigator({
  DrawerNavigatorExample: {
    screen: DrawerNavigatorExample,
    navigationOptions: {
      header: null,
    },
  },
  NewDetail: {
    screen: NewDetail,
    navigationOptions: {
      header: null,
    },
  },
  BookDetail: {
    screen: BookDetail,
    navigationOptions: {
      header: null,
    },
  },
  AuthorDetail: {
    screen: AuthorDetail,
    navigationOptions: {
      header: null,
    },
  },
  BookSpeak: {
    screen: BookSpeak,
    navigationOptions: {
      header: null,
    },
  },
  BookAudio: {
    screen: BookAudio,
    navigationOptions: {
      header: null,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  Viewall: {
    screen: Viewall,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createAppContainer(AppNavigator);
export default App;
