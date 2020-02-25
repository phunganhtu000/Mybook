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
import {setWidth} from '../cores/baseFuntion';
import FastImage from 'react-native-fast-image';

export default class HeaderAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigationProps;
    return (
      <View style={[styles.container]}>
        <View style={[styles.body]}>
          <TouchableOpacity style={styles.btn} onPress={this.props.onPressLeft}>
            <Icon
              name={this.props.iconLeft}
              type={this.props.typeIconLeft}
              style={[styles.icon]}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <TouchableOpacity onPress={this.props.getParam('increaseCount')}>
              <Icon
                name={this.props.getParam('otherParam') ? 'menu' : 'view-grid'}
                type="MaterialCommunityIcons"
                style={{color: '#000', marginRight: 15}}
              />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.btn}
              onPress={this.props.onPressRight}>
              <Icon
                name={this.props.iconRight}
                type={this.props.typeIconRight}
                style={[styles.icon, this.props.iconRightStyle]}
              />
            </TouchableOpacity>
          </View>
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
    fontWeight: '400',
    fontSize: setWidth('5%'),
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
  iconSearch: {
    fontSize: 20,
    marginRight: 10,
  },
});
