import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import HeaderAuthor from '../components/headerAuthor';
import {setWidth} from '../cores/baseFuntion';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPage: 1,
      activeTab: 0,
      count: true,
      GridColumnsValue: true,
      ButtonDefaultText: 'CHANGE TO GRIDVIEW',
      dataCategory: [
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
        {name: 'Ngôn tình'},
        {name: 'Kinh doanh'},
        {name: 'Sách nói'},
      ],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={navigation.getParam('increaseCount')}>
            <Icon
              name={navigation.getParam('otherParam') ? 'menu' : 'view-grid'}
              type="MaterialCommunityIcons"
              style={{color: '#000', marginRight: 15}}
            />
          </TouchableOpacity>
          <Icon
            name="search1"
            type="AntDesign"
            style={{color: '#000', fontSize: 23}}
          />
        </View>
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({
      increaseCount: this._increaseCount,
    });
  }
  checkIcon() {
    this.props.navigation.setParams({
      otherParam: !this.state.count,
    });
  }

  _increaseCount = () => {
    this.setState({count: !this.state.count}, () => {
      this.checkIcon();
    });
  };
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    const gfidView = this.state.count;
    const color = [
      ['#a18cd1', '#fbc2eb'],
      ['#d8e76a', '#eb9454'],
      ['#b2e874', '#48A9BE'],
      ['#78BEF0', '#6131A1'],
      ['#EA0386', '#ff9a9e'],
      ['#ff9a9e', '#fecfef'],
    ];
    return (
      <View style={styles.saf}>
        {gfidView ? (
          <FlatList
            data={this.state.dataCategory}
            style={{
              marginHorizontal: setWidth('2%'),
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  // navigate('AllItem', {data: item});
                }}
                style={styles.tou}>
                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.5, y: 1.0}}
                  colors={color[index % color.length]}
                  style={styles.opacity}>
                  <Text style={styles.name}>{item.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
            numColumns={3}
            key={this.state.GridColumnsValue ? 'ONE COLUMN' : 'THERE COLUMN'}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <FlatList
            data={this.state.dataCategory}
            style={{
              marginHorizontal: setWidth('2%'),
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  // navigate('AllItem', {data: item});
                }}
                style={styles.tou}>
                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.5, y: 1.0}}
                  colors={color[index % color.length]}
                  style={styles.opacity}>
                  <Text style={styles.name}>{item.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  ImageComponentStyle: {
    height: setWidth('35%'),
    width: setWidth('30.6666666667%'),
  },
  viewItem: {
    marginLeft: setWidth('2%'),
    marginVertical: setWidth('2%'),
  },
  ItemTextStyle: {
    width: '100%',
    textAlign: 'center',
  },
  textName: {
    color: 'gray',
    fontSize: setWidth('4%'),
  },
  textName1: {
    fontSize: setWidth('4%'),
    // color: '#61afef',
  },

  ImageComponentStyle2: {
    height: setWidth('35%'),
    width: setWidth('30%'),
    margin: setWidth('1.5%'),
  },
  viewItem2: {
    margin: setWidth('2%'),
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  ItemTextStyle2: {
    paddingHorizontal: setWidth('2%'),
    marginTop: setWidth('2%'),
    width: setWidth('60%'),
  },
  text1Name1: {
    fontSize: setWidth('3%'),
    color: 'silver',
    marginVertical: setWidth('1%'),
  },
  text1Name11: {
    fontSize: setWidth('3.5%'),
    color: 'silver',
    marginVertical: setWidth('1%'),
  },
  text1Name2: {
    fontSize: setWidth('4.5%'),
  },
  text1Name22: {
    fontSize: setWidth('4%'),
  },
  opacity: {
    width: setWidth('28%'),
    height: setWidth('28%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: setWidth('2%'),
    marginTop: setWidth('4%'),
  },
  name: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
