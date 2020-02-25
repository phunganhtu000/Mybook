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
import HeaderComponent from '../components/headerComponents';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.saf}>
        {/* <HeaderComponent title="hello" iconLeft="menu" typeIconLeft="Feather" /> */}
        <Text>Category</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
});
