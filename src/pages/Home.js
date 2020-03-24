import React, {Component} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import TrackPlayer from 'react-native-track-player';

import HeaderComponents from '../components/headerComponents';
import FastImage from 'react-native-fast-image';
import {setWidth, setHeight} from '../cores/baseFuntion';
import {ScrollView} from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';
import {Icon} from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      interval2: null,

      dataText: [
        {title: 'Ti1', content: 'Con1'},
        {title: 'Ti2', content: 'Con2'},
        {title: 'Ti3', content: 'Con3'},
        {title: 'Ti4', content: 'Con4'},
      ],
      stt: 0,
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
        {
          title: 'Title 3',
          caption: 'Caption 3',
          url:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
        },
        {
          title: 'Title 1',
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
        {
          title: 'Title 3',
          caption: 'Caption 3',
          url:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
        },
        {
          title: 'Title 1',
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
        {
          title: 'Title 3',
          caption: 'Caption 3',
          url:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
        },
        {
          title: 'Title 1',
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
        {
          title: 'Title 3',
          caption: 'Caption 3',
          url:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
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
  componentWillMount() {
    this.setState({
      interval2: setInterval(() => {
        this.setState({
          stt:
            this.state.stt === this.state.dataText.length - 1
              ? 0
              : this.state.stt + 1,
        });
      }, 6000),
    });
    // TrackPlayer.setupPlayer().then(async () => {
    //   // Adds a track to the queue
    //   await TrackPlayer.add({
    //     id: 'trackId',
    //     url: require('../assets/audio.mp3'),
    //     title: 'Track Title',
    //     artist: 'Track Artist',
    //     artwork: require('../assets/image/bookcase.png'),
    //   });

    //   // Starts playing it
    //   TrackPlayer.play();
    // });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    clearInterval(this.state.interval2);
  }

  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.saf}>
        <ScrollView>
          <HeaderComponents
            // title="hello"
            checkLeft
            checkRight
            iconLeft="menu"
            typeIconLeft="Feather"
            navigationProps={navigation}
          />
          <Swiper
            height={setHeight('27%')}
            width={setWidth('100%')}
            autoplay={true}
            style={styles.wrapper}>
            {this.state.dataSource.map(function(item) {
              return (
                <View style={styles.slide1}>
                  <FastImage
                    source={{
                      uri: item.url,
                    }}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              );
            })}
          </Swiper>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>
              {this.state.dataText[this.state.stt].title}
            </Text>
            <Text style={styles.textContent}>
              {this.state.dataText[this.state.stt].content}
            </Text>

            {/* <Text style={styles.textTitle}>Title</Text>
            <Text style={styles.textContent}>Content</Text> */}
          </View>
          <View style={styles.viewngang} />
          <View style={styles.viewSelling}>
            <Text style={{fontSize: setWidth('4.5%')}}>Sách mới nhất</Text>
            <TouchableOpacity onPress={() => navigate('Viewall')}>
              <Text style={{fontSize: setWidth('4.5%'), color: '#FF2D55'}}>
                XEM TẤT CẢ
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{
              marginTop: setWidth('3%'),
              paddingHorizontal: setWidth('2%'),
            }}
            horizontal
            data={this.state.dataSource.slice(0, 10)}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigate('BookDetail', {item: item})}
                style={styles.item}>
                <CardView>
                  <FastImage source={{uri: item.url}} style={styles.image} />
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
          <View style={styles.viewtrong} />
          <View style={styles.viewSelling}>
            <Text style={{fontSize: setWidth('4.5%')}}>Sách hot</Text>
            <Text style={{fontSize: setWidth('4.5%'), color: '#FF2D55'}}>
              XEM TẤT CẢ
            </Text>
          </View>
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
          <View style={styles.viewtrong} />
          <View style={styles.viewSelling}>
            <Text style={{fontSize: setWidth('4.5%')}}>Sách nói</Text>
            <Text style={{fontSize: setWidth('4.5%'), color: '#FF2D55'}}>
              XEM TẤT CẢ
            </Text>
          </View>
          <FlatList
            style={{
              marginTop: setWidth('3%'),
              paddingHorizontal: setWidth('2%'),
            }}
            horizontal
            data={this.state.dataSource.slice(0, 10)}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={1}
                // onPress={() => navigate('Details', {item: item})}
                style={styles.item}>
                <CardView
                // style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <FastImage source={{uri: item.url}} style={styles.image} />
                  <Text style={styles.textPosion}>10 phút</Text>
                  <View style={styles.viewPosion}>
                    <Icon
                      name="play"
                      type="FontAwesome5"
                      style={{fontSize: setWidth('5%'), color: '#ffffff6b'}}
                    />
                  </View>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 13,
    flex: 1,
    alignSelf: 'center',
    color: '#696969',
  },
  viewTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: setWidth('3%'),
  },
  textTitle: {
    fontSize: setWidth('5%'),
  },
  textContent: {
    fontSize: setWidth('4%'),
    color: 'gray',
  },
  viewngang: {
    marginHorizontal: setWidth('1.5%'),
    width: '97%',
    height: 0.2,
    backgroundColor: 'silver',
  },
  viewSelling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: setWidth('2.5%'),
    marginTop: setWidth('3%'),
  },
  item: {
    marginHorizontal: setWidth('2%'),
  },
  image: {
    width: setWidth('30%'),
    height: setWidth('45%'),
    // alignItems: 'center',
    // justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,

    // elevation: 8,
    // backgroundColor: '#fff',
  },
  item2: {
    marginHorizontal: setWidth('2%'),
    marginBottom: setWidth('1%'),
  },
  image2: {
    width: setWidth('28%'),
    height: setWidth('40%'),
  },
  viewtrong: {
    backgroundColor: '#DDE0DF',
    width: setWidth('100%'),
    height: setHeight('1.5%'),
    marginVertical: setWidth('3%'),
  },
  viewPosion: {
    width: setWidth('10%'),
    height: setWidth('10%'),
    borderRadius: setWidth('10%'),
    backgroundColor: '#0000008c',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: setWidth('17.5%'),
    left: setWidth('10%'),
  },
  textPosion: {
    color: '#fff',
    position: 'absolute',
    bottom: setWidth('0.5%'),
    left: setWidth('0.5%'),
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle2: {marginTop: setWidth('1%'), width: setWidth('28%')},
  textAuthor: {
    color: 'gray',
    width: setWidth('28%'),
    fontSize: setWidth('3.5%'),
  },
});
