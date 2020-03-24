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
import CustomHeaderBack from '../../components/CustomHeaderBack';
// import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

export default class Viewall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.saf}>
        <CustomHeaderBack
          iconRightStyle={{fontSize: 35}}
          iconLeft="ios-arrow-back"
          typeIconRight="EvilIcons"
          title="View all"
          onPressLeft={() => navigation.goBack()}
        />
        <Text>Viewall</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
});
