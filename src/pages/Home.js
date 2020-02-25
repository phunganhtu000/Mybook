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




import HeaderComponents from '../components/headerComponents';
import FastImage from 'react-native-fast-image';
import {setWidth, setHeight} from '../cores/baseFuntion';
import {ScrollView} from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
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
      ],
    };
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 3000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
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
            <Text style={styles.textTitle}>Title</Text>
            <Text style={styles.textContent}>Content</Text>
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
  container: {
    flex: 1,
    //marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#E6E6E6',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: '20%',
    width: '20%',
    alignSelf: 'center',
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
