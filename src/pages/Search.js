import React, {useEffect, Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponent from '../components/CustomHeaderBack';
// import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.saf}>
        {/* <HeaderComponent
          iconRightStyle={{fontSize: 35}}
          iconLeft="ios-arrow-back"
          typeIconRight="EvilIcons"
          title="Profile"
          onPressLeft={() => navigation.goBack()}
        /> */}
        <Text>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
});
