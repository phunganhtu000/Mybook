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
import CardView from 'react-native-cardview';
import FastImage from 'react-native-fast-image';
import {setWidth, setHeight} from '../../cores/baseFuntion';

export default class BookSpeak extends Component {
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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.saf}>
        {/* <View style={styles.viewTrong}>
          <FastImage
            source={require('../assets/image/bookcase.png')}
            style={styles.imageTrong}
          />
          <Text style={styles.textTrong}>Không có sách nào</Text>
        </View> */}
        <FlatList
          style={{
            marginTop: setWidth('3%'),
            paddingHorizontal: setWidth('2%'),
          }}
          numColumns={3}
          data={this.state.dataSource.slice(0, 9)}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigate('BookDetail', {item: item})}
              style={styles.item2}>
              <CardView>
                <FastImage source={{uri: item.url}} style={styles.image2} />
              </CardView>
              <Text style={styles.textTitle2} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.textAuthor} numberOfLines={1}>
                Author Author AuthorAuthor
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  viewTrong: {
    alignItems: 'center',
    justifyContent: 'center',
    width: setWidth('100%'),
    height: setHeight('65%'),
  },
  imageTrong: {
    width: setWidth('40%'),
    height: setWidth('40%'),
  },
  textTrong: {
    marginTop: setWidth('5%'),
    fontSize: setWidth('5%'),
    color: 'gray',
  },
  item2: {
    marginHorizontal: setWidth('2%'),
    marginBottom: setWidth('1%'),
  },
  image2: {
    width: setWidth('28%'),
    height: setWidth('40%'),
  },
  textTitle2: {marginTop: setWidth('1%'), width: setWidth('28%')},
  textAuthor: {
    color: 'gray',
    width: setWidth('28%'),
    fontSize: setWidth('3.5%'),
  },
});
