import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import FastImage from 'react-native-fast-image';
import {setWidth} from '../cores/baseFuntion';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLeft: true,
      checkRight: true,
    };
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    // const {navigation} = this.props;
    const {navigate} = this.props.navigationProps;
    const checkLeft = this.props.checkLeft;
    const checkRight = this.props.checkRight;
    return (
      <View style={[styles.container]}>
        <View style={[styles.body]}>
          {checkLeft ? (
            <TouchableOpacity
              style={styles.btn}
              onPress={this.toggleDrawer.bind(this)}>
              <Icon
                name={this.props.iconLeft}
                type={this.props.typeIconLeft}
                style={[styles.icon]}
              />
            </TouchableOpacity>
          ) : null}
          {checkLeft ? (
            <TouchableOpacity
              onPress={() => navigate('Author')}
              style={styles.input}>
              <Icon
                name="ios-search"
                type="Ionicons"
                style={styles.iconSearch}
              />
              <Text>Tìm kiếm sách</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigate('Author')}
              style={styles.input2}>
              <Icon
                name="ios-search"
                type="Ionicons"
                style={styles.iconSearch}
              />
              <Text>Tìm kiếm sách</Text>
            </TouchableOpacity>
          )}

          {checkRight ? (
            <TouchableOpacity
              style={styles.btn}
              onPress={this.props.onPressRight}>
              <Icon
                name="heart"
                type="AntDesign"
                style={[
                  styles.icon,
                  this.props.iconRightStyle,
                  {color: '#FF2D55', fontSize: setWidth('7%')},
                ]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.3,
    borderBottomColor: 'silver',
    justifyContent: 'center',
  },
  body: {
    marginHorizontal: 10,
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: 35,
    height: 40,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#00003D',
  },
  title: {
    color: '#00003D',
    width: '50%',
    fontWeight: '400',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    width: '70%',
    height: '100%',
    paddingHorizontal: '6%',
    backgroundColor: '#E7E6E6',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input2: {
    width: setWidth('82%'),
    height: '100%',
    paddingHorizontal: '6%',
    backgroundColor: '#E7E6E6',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSearch: {
    fontSize: 20,
    marginRight: 10,
  },
});
