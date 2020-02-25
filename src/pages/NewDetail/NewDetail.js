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
import {setWidth, setHeight} from '../../cores/baseFuntion';
import HeaderComponent from '../../components/CustomHeaderBack';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    const item = this.props.navigation.state.params.item;
    return (
      <View style={styles.saf}>
        <HeaderComponent
          iconRightStyle={{fontSize: 35}}
          iconLeft="ios-arrow-back"
          typeIconRight="EvilIcons"
          title={item.title}
          onPressLeft={() => navigation.goBack()}
        />
        <Image style={styles.imageview} source={{uri: item.image}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  imageview: {
    width: '100%',
    height: setWidth('55%'),
  },
});
