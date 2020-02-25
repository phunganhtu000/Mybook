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
} from 'react-native';
import {Icon} from 'native-base';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.saf}>
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
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    marginTop: 40,
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
