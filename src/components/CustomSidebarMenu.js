//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon} from 'native-base';
import {setWidth} from '../cores/baseFuntion';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.saf}>
        <ImageBackground
          style={styles.viewHeader}
          source={{
            uri:
              'https://i.pinimg.com/564x/9e/fb/e3/9efbe345df76481b9f06e3013a9ed7db.jpg',
          }}>
          <View style={styles.viewOpa} />
          <View style={styles.viewBody}>
            <Image
              source={{
                uri:
                  'https://i.pinimg.com/564x/9e/fb/e3/9efbe345df76481b9f06e3013a9ed7db.jpg',
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.textName}>Mai Anh Tu</Text>
              <Text style={styles.textUser}>maianhty</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.sideMenuContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Menu')}
            style={styles.rowView}>
            <Icon name="home" type="AntDesign" style={styles.icon} />
            <Text style={styles.text}>Trang chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Author')}
            style={styles.rowView}>
            <Icon name="user" type="SimpleLineIcons" style={styles.icon} />
            <Text style={styles.text}>Tác giả</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Category')}
            style={styles.rowView}>
            <Icon name="appstore-o" type="AntDesign" style={styles.icon} />
            <Text style={styles.text}>Thể loại</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  viewHeader: {
    height: setWidth('50%'),
    justifyContent: 'center',
  },
  viewOpa: {
    backgroundColor: '#000000bd',
    height: setWidth('50%'),
    justifyContent: 'center',
  },
  viewBody: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  image: {
    width: setWidth('20%'),
    height: setWidth('20%'),
    marginLeft: setWidth('7%'),
    marginRight: setWidth('3%'),
    borderRadius: setWidth('25%'),
  },
  textName: {
    color: '#fff',
    fontSize: setWidth('5%'),
  },
  textUser: {color: '#fff', fontSize: setWidth('4.5%')},
  sideMenuContainer: {
    width: '100%',
    height: '100%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  icon: {
    paddingHorizontal: 20,
    fontSize: 26,
  },
  text: {
    fontSize: 18,
    textAlign: 'left',
  },
});
