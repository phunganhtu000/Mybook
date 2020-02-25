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
import {setWidth, setHeight} from '../cores/baseFuntion';
import {ScrollView} from 'react-native-gesture-handler';
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      interval: null,
      dataNew: [
        {
          title: 'Titile New 1',
          content: 'Content New 1',
          image:
            'https://i.pinimg.com/564x/9e/fb/e3/9efbe345df76481b9f06e3013a9ed7db.jpg',
          time: '12/02/2020',
        },
        {
          title: 'Titile New 2',
          content: 'Content New 2',
          image:
            'https://i.pinimg.com/564x/5d/4e/bd/5d4ebdd2d066bb512b827b9e56f25838.jpg',
          time: '21/03/2020',
        },
        {
          title: 'Title New 3',
          caption: 'Caption New 3',
          image:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
          time: '29/04/2020',
        },
      ],
    };
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataNew.length - 1
              ? 0
              : this.state.position + 1,
        });
      }, 10000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    const data = this.state.dataNew[this.state.position];
    return (
      <View style={styles.saf}>
        <ScrollView>
          <HeaderComponents
            iconLeft="menu"
            typeIconLeft="Feather"
            navigationProps={navigation}
          />
          <TouchableOpacity
            style={styles.flatl}
            onPress={() => navigate('NewDetail', {item: data})}>
            <Image style={styles.imageview} source={{uri: data.image}} />
            <View>
              <Text style={styles.time}>{data.time}</Text>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.content}>{data.content}</Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={this.state.dataNew}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.flatl2}
                onPress={() => navigate('NewDetail', {item: item})}>
                <View style={styles.tou1}>
                  <Image style={styles.imageview1} source={{uri: item.image}} />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    width: setWidth('55%'),
                  }}>
                  <Text style={styles.title1} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.time1}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatl: {
    padding: setWidth('2%'),
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
  },
  imageview: {
    width: '100%',
    height: setWidth('55%'),
    borderRadius: setWidth('1.5%'),
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 5,
    color: '#000',
  },
  content: {
    fontSize: 13,
    marginTop: 5,
    color: '#000',
  },
  flatl2: {
    padding: setWidth('2%'),
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  tou1: {
    width: setWidth('35%'),
    height: setWidth('25%'),
  },
  imageview1: {
    width: setWidth('35%'),
    height: setWidth('25%'),
    borderRadius: setWidth('1.5%'),
  },
  title1: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  time1: {
    fontSize: 13,
    marginBottom: 5,
    color: 'silver',
    marginTop: 5,
  },
});
