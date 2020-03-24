import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {Icon} from 'native-base';
import {setWidth} from '../../cores/baseFuntion';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import CardView from 'react-native-cardview';
import FastImage from 'react-native-fast-image';
export default class AuthorDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
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
          title: 'Title 3',
          caption: 'Caption 3',
          url:
            'https://i.pinimg.com/564x/f3/9b/8a/f39b8a9521adabdf5ce1bf9926fa4ddd.jpg',
        },
      ],
    };
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    const item = this.props.navigation.state.params.item;
    return (
      <View style={styles.saf}>
        <View style={styles.viewHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" type="EvilIcons" style={styles.iconClose} />
          </TouchableOpacity>
          <View />
        </View>
        <View style={styles.body}>
          <View style={styles.viewText}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDescribe} numberOfLines={4}>
              {item.describe}
            </Text>
            <TouchableOpacity onPress={this.toggleModal}>
              <Text style={styles.textMore}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewImage}>
            <Image style={styles.image} source={{uri: item.image}} />
          </View>
        </View>
        <View style={styles.viewNgang} />
        <View>
          <Modal isVisible={this.state.isModalVisible} backdropOpacity={0.8}>
            <View style={styles.modal}>
              <View style={styles.itemModal}>
                <Text style={styles.tittleModal}>Thông tin tác giả</Text>
                <View style={styles.viewNgang2} />
                <ScrollView
                  style={{
                    height: setWidth('90%'),
                    marginHorizontal: setWidth('1%'),
                  }}>
                  <Text style={styles.text1}>{item.describe}</Text>
                </ScrollView>
                <View style={styles.saparator} />
                <TouchableOpacity
                  style={styles.viewButtonModal}
                  onPress={this.toggleModal}>
                  <Text style={styles.btnCancel}>Đóng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.viewSp}>
          <Text style={styles.textTitle}>Tác phẩm</Text>
          <FlatList
            style={{
              marginTop: setWidth('5%'),
              marginHorizontal: setWidth('2%'),
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
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: setWidth('3%'),
  },
  iconClose: {
    fontSize: setWidth('9%'),
  },
  body: {
    flexDirection: 'row',
    paddingHorizontal: setWidth('3%'),
  },
  viewText: {
    width: setWidth('66%'),
  },
  viewImage: {
    width: setWidth('28%'),
  },
  image: {
    width: setWidth('24%'),
    marginLeft: setWidth('4%'),
    height: setWidth('30%'),
  },
  textName: {
    fontSize: setWidth('5%'),
    marginBottom: setWidth('3%'),
  },
  textDescribe: {
    marginBottom: setWidth('3%'),
  },
  textMore: {fontSize: setWidth('4%'), color: '#FF2D55'},
  viewNgang: {
    width: setWidth('94%'),
    marginHorizontal: setWidth('3%'),
    marginTop: setWidth('5%'),
    height: setWidth('0.2%'),
    backgroundColor: 'silver',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemModal: {
    paddingHorizontal: setWidth('2%'),
    width: setWidth('85%'),
    backgroundColor: '#fff',
    borderRadius: setWidth('3%'),
  },
  tittleModal: {
    fontSize: setWidth('5%'),
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: setWidth('3%'),
  },
  viewNgang2: {
    height: setWidth('0.2%'),
    backgroundColor: 'silver',
    marginBottom: setWidth('2%'),
  },
  viewButtonModal: {
    borderRadius: setWidth('2%'),
    borderColor: '#FF2D55',
    borderWidth: setWidth('0.2%'),
    width: setWidth('70%'),
    height: setWidth('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: setWidth('3%'),
    marginLeft: setWidth('4.5%'),
  },
  btnCancel: {
    color: '#FF2D55',
    fontSize: setWidth('5%'),
    fontWeight: '500',
  },
  saparator: {
    height: setWidth('0.2%'),
    backgroundColor: 'silver',
    marginVertical: setWidth('4%'),
  },
  viewSp: {
    paddingVertical: setWidth('3%'),
  },
  textTitle: {
    fontSize: setWidth('4.7%'),
    marginHorizontal: setWidth('3%'),
  },
  item2: {
    marginHorizontal: setWidth('2%'),
    marginBottom: setWidth('3%'),
  },
  image2: {
    width: setWidth('28%'),
    height: setWidth('40%'),
  },
  textTitle2: {marginTop: setWidth('1%'), width: setWidth('28%')},
});
