import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';

export default class Bookcase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.saf}>
        <HeaderComponents
          // title="hello"
          iconLeft="menu"
          typeIconLeft="Feather"
          navigationProps={navigation}
        />
        <Text>Book</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
});
