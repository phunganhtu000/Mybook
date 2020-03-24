import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import {setWidth} from '../cores/baseFuntion';
import FastImage from 'react-native-fast-image';

export default class CustomHeaderBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewRef: null,
      data: [],
    };
  }

  render() {
    const data = this.state.data;
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
          <Text style={[styles.title, this.props.style]} numberOfLines={1}>
            {this.props.title}
          </Text>
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
  },
  body: {
    marginLeft: 10,
    alignItems: 'center',
    height: setWidth('15%'),
    flexDirection: 'row',
  },
  btn: {
    marginLeft: setWidth('4%'),
    marginRight: setWidth('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: setWidth('6%'),
    color: '#00003D',
  },
  title: {
    color: '#00003D',
    fontSize: setWidth('5.5%'),
    fontWeight: '600',
  },
});
