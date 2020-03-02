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
import {Icon, Tab, Tabs, ScrollableTab} from 'native-base';
import CardView from 'react-native-cardview';
import FastImage from 'react-native-fast-image';
import {setWidth, setHeight} from '../cores/baseFuntion';
import BookSpeak from './BookcaseDetail/BookSpeak';
import BookAudio from './BookcaseDetail/BookAudio';

export default class Bookcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          title: 'Title hello 1 1',
          caption: 'Caption 1',
          url:
            'https://i.pinimg.com/564x/9e/fb/e3/9efbe345df76481b9f06e3013a9ed7db.jpg',
        },
        {
          title: 'Title 2',
          caption: 'Caption 2',
          url:
            'https://i.pinimg.com/564x/5d/4e/bd/5d4ebdd2d066bb512b827b9e56f25838.jpg',
        },
      ],
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.saf}>
        <HeaderComponents
          checkRight
          iconLeft="menu"
          typeIconLeft="Feather"
          navigationProps={navigation}
        />
        <Tabs
          tabBarUnderlineStyle={{
            backgroundColor: '#FF2D55',
            height: setWidth('0.5%'),
          }}
          renderTabBar={() => (
            <ScrollableTab style={{backgroundColor: '#fff'}} />
          )}>
          <Tab
            heading="SÁCH ĐỌC"
            tabStyle={{backgroundColor: '#fff'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            textStyle={styles.textsty}
            activeTextStyle={styles.textsty2}>
            <BookSpeak navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading="SÁCH NÓI"
            tabStyle={{backgroundColor: '#fff'}}
            activeTabStyle={{backgroundColor: '#fff'}}
            textStyle={styles.textsty}
            activeTextStyle={styles.textsty2}>
            <BookAudio navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  textsty: {color: '#000'},
  textsty2: {color: '#FF2D55'},
});
