import React, {Component} from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import Slideshow from 'react-native-slideshow';
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
      ],
    };
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length - 1
              ? 0
              : this.state.position + 1,
        });
      }, 3000),
      interval2: setInterval(() => {
        this.setState({
          stt:
            this.state.stt === this.state.dataText.length - 1
              ? 0
              : this.state.stt + 1,
        });
      }, 3000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    clearInterval(this.state.interval2);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.saf}>
        <ScrollView>
          <HeaderComponents
            // title="hello"
            iconLeft="menu"
            typeIconLeft="Feather"
            navigationProps={navigation}
          />
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
          />
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
                <CardView>
                  <FastImage source={{uri: item.url}} style={styles.image} />
                </CardView>
                <Text>{item.title}</Text>
                <Text style={{color: 'gray'}}>Author</Text>
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
                // onPress={() => navigate('Details', {item: item})}
                style={styles.item2}>
                <CardView>
                  <FastImage source={{uri: item.url}} style={styles.image2} />
                </CardView>
                <Text>{item.title}</Text>
                <Text style={{color: 'gray'}}>Author</Text>
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
                <Text>{item.title}</Text>
                <Text style={{color: 'gray'}}>Author</Text>
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
});
