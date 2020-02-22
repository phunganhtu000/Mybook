import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'native-base';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
    };
    this.proileImage =
      'https://i.a4vn.com/2018/6/20/can-tien-nu-than-tam-suoi-mac-thieu-vai-moi-goi-ca-do-bong-da-98c21b.jpg';
    this.items = [
      {
        navOptionName: 'Home',
        screenToNavigate: 'NavScreen1',
        icon: 'home',
        type: 'AntDesign',
      },
      {
        navOptionName: 'History',
        screenToNavigate: 'NavScreen2',
        icon: 'history',
        type: 'MaterialIcons',
      },
      {
        navOptionName: 'Settings',
        screenToNavigate: 'NavScreen3',
        icon: 'setting',
        type: 'AntDesign',
      },
    ];
  }

  componentDidMount() {}

  render() {
    return (
      <View style={[styles.sideMenuContainer]}>
        <View style={[styles.viewHeader]}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Image
              source={{
                uri:
                  'https://znews-photo.zadn.vn/w1024/Uploaded/kbd_bcvi/2019_11_23/5d828e8d6f24eb1eb5148f5c.jpg',
              }}
              style={styles.sideMenuProfileIcon}
            />
          </TouchableOpacity>
          <View style={{marginLeft: '4%'}}>
            <Text style={[styles.name]}>Anh tu</Text>
            <Text>gia :</Text>
            <Text>gia : 50,000</Text>
          </View>
        </View>
        {/*Setting up Navigation Options from option array using loop*/}
        <View>
          {this.items.map((item, key) => (
            <View
              style={{
                paddingLeft: '4%',
                paddingTop: '2%',
                paddingBottom: '2%',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              key={key}>
              <Icon
                name={item.icon}
                type={item.type}
                style={[styles.iconLeft]}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: 20,
                }}
                onPress={() => {
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{
            paddingLeft: '4%',
            paddingTop: '2%',
            paddingBottom: '2%',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => this.logout()}>
          <Icon name="log-out" type="Feather" style={[styles.iconLeft]} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 20,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
  },
  viewHeader: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginBottom: '4%',
    // paddingTop: setWidth('2%')
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sideMenuProfileIcon: {
    width: '20%',
    height: '20%',
    borderRadius: 20,
  },
  iconLeft: {
    fontSize: 10,
  },
});
