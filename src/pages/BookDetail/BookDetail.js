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
  ImageBackground,
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
      check: false,
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
  checkItem = () => {
    this.setState({check: !this.state.check});
  };
  render() {
    const {navigation} = this.props;
    const item = this.props.navigation.state.params.item;
    const checking = this.state.check;
    return (
      <View style={styles.saf}>
        <ScrollView>
          <ImageBackground style={styles.imageHeader} source={{uri: item.url}}>
            <View style={styles.viewOpa} />
            <View style={styles.viewHeader}>
              <View />
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="close" type="EvilIcons" style={styles.iconClose} />
              </TouchableOpacity>
            </View>
            <View style={styles.viewla}>
              <View style={styles.body}>
                <CardView style={styles.cardView}>
                  <Image style={styles.image} source={{uri: item.url}} />
                </CardView>
                <View style={styles.viewText}>
                  <Text style={styles.textName}>{item.title}</Text>
                  <Text style={styles.textAuthor}>Author</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.viewNgang} />
          {checking ? (
            <View style={styles.viewDes}>
              <Text style={styles.textTitleDes}>Mô tả sách</Text>
              <Text style={styles.textDes}>
                Trong 7 thói quen để thành đạt, Tác giả đưa ra một phương thức
                tiếp cận toàn diện, thống nhất và mang tính nguyên tắc trong
                việc giải quyết các vấn đề cá nhân và nghề nghiệp. Với sự thấu
                hiểu sâu sắc và những giai thoại đầy ý nghĩa, tác giả mở ra cho
                chúng ta một con đường để từng bước tiến đến một cuộc sống công
                bằng, trung thực, cống hiến và tự trọng – những nguyên tắc giúp
                chúng ta dễ dàng thích nghi với mọi thay đổi, đồng thời mang đến
                cho chúng ta trí thông minh và sức mạnh để có thể tận dụng được
                mọi cơ hội mà những thay đổi có mang đến.
              </Text>
              <TouchableOpacity
                onPress={this.checkItem}
                style={styles.viewdown}>
                <Icon
                  name="chevron-thin-up"
                  type="Entypo"
                  style={styles.icondown}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.viewDes}>
              <Text style={styles.textTitleDes}>Mô tả sách</Text>
              <Text style={styles.textDes} numberOfLines={5}>
                Trong 7 thói quen để thành đạt, Tác giả đưa ra một phương thức
                tiếp cận toàn diện, thống nhất và mang tính nguyên tắc trong
                việc giải quyết các vấn đề cá nhân và nghề nghiệp. Với sự thấu
                hiểu sâu sắc và những giai thoại đầy ý nghĩa, tác giả mở ra cho
                chúng ta một con đường để từng bước tiến đến một cuộc sống công
                bằng, trung thực, cống hiến và tự trọng – những nguyên tắc giúp
                chúng ta dễ dàng thích nghi với mọi thay đổi, đồng thời mang đến
                cho chúng ta trí thông minh và sức mạnh để có thể tận dụng được
                mọi cơ hội mà những thay đổi có mang đến.
              </Text>
              <TouchableOpacity
                onPress={this.checkItem}
                style={styles.viewdown}>
                <Icon
                  name="chevron-thin-down"
                  type="Entypo"
                  style={styles.icondown}
                />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.viewTrong} />
          <View style={styles.viewDetail}>
            <Text style={styles.textTitle3}>Thông tin chi tiết</Text>
            <View style={styles.textitem}>
              <Text style={styles.textcate}>Thể loại</Text>
              <Text style={styles.textnamecate}>Tên Thể loại</Text>
              <Icon
                name="chevron-small-right"
                type="Entypo"
                style={styles.iconright}
              />
            </View>
            <View style={styles.textitem}>
              <Text style={styles.textcate}>Tác giả</Text>
              <Text style={styles.textnamecate}>Tên Tác giả</Text>
              <Icon
                name="chevron-small-right"
                type="Entypo"
                style={styles.iconright}
              />
            </View>
            <View style={styles.textitem}>
              <Text style={styles.textcate}>Ngày xuất bản</Text>
              <Text style={styles.textnamecate}>Thời gian</Text>
              <Icon
                name="chevron-small-right"
                type="Entypo"
                style={styles.iconright}
              />
            </View>
          </View>
          <View style={styles.viewTrong} />
          <View style={styles.viewSp}>
            <Text style={styles.textTitle}>Có thể bạn thích</Text>
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
                  // onPress={() => navigate('Details', {item: item})}
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
        </ScrollView>
        <View style={styles.viewFooter}>
          <TouchableOpacity style={styles.toRead}>
            <Text style={styles.textFooter}>ĐỌC NGAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saf: {
    flex: 1,
  },
  imageHeader: {
    height: setWidth('50%'),
    justifyContent: 'center',
  },
  viewOpa: {
    backgroundColor: '#272525b3',
    height: setWidth('50%'),
    justifyContent: 'center',
  },
  viewla: {
    position: 'absolute',
    top: setWidth('13%'),
  },
  viewHeader: {
    top: setWidth('2.5%'),
    right: setWidth('3%'),
    position: 'absolute',
  },
  iconClose: {
    fontSize: setWidth('9%'),
    color: '#fff',
  },
  body: {
    flexDirection: 'row',
    paddingHorizontal: setWidth('3%'),
  },
  viewText: {
    width: setWidth('66%'),
    marginTop: setWidth('5%'),
  },
  cardView: {
    marginLeft: setWidth('7%'),
    marginRight: setWidth('7%'),
  },
  image: {
    width: setWidth('30%'),
    height: setWidth('45%'),
  },
  textName: {
    fontSize: setWidth('4.5%'),
    marginBottom: setWidth('3%'),
    color: '#fff',
  },
  textAuthor: {
    fontSize: setWidth('3.6%'),
    color: '#fff',
  },
  textDescribe: {
    marginBottom: setWidth('3%'),
  },
  textMore: {
    fontSize: setWidth('4%'),
    color: '#FF2D55',
  },
  viewNgang: {
    marginVertical: setWidth('7%'),
  },
  viewdown: {alignItems: 'center', marginTop: setWidth('2%')},
  icondown: {
    color: '#FF2D55',
    marginBottom: setWidth('3%'),
    marginTop: setWidth('2%'),
    fontSize: setWidth('6%'),
  },
  viewDes: {
    paddingHorizontal: setWidth('3%'),
  },
  textTitleDes: {
    fontSize: setWidth('5%'),
    marginBottom: setWidth('2%'),
  },
  textDes: {
    fontSize: setWidth('4%'),
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
  viewTrong: {
    backgroundColor: '#D4D4D4',
    width: setWidth('100%'),
    height: setWidth('1.7%'),
  },
  viewDetail: {
    padding: setWidth('5%'),
  },
  textTitle3: {
    fontSize: setWidth('5%'),
  },
  textitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: setWidth('3%'),
    marginTop: setWidth('3%'),
    borderTopWidth: setWidth('0.1%'),
    borderTopColor: 'silver',
  },
  textcate: {
    color: 'gray',
    width: setWidth('30%'),
    fontSize: setWidth('4%'),
  },
  textnamecate: {
    width: setWidth('55%'),
    fontSize: setWidth('4%'),
  },
  iconright: {
    color: 'silver',
    fontSize: setWidth('8%'),
    width: setWidth('5%'),
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
  viewFooter: {
    height: setWidth('14%'),
    borderTopColor: 'silver',
    borderTopWidth: setWidth('0.1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  toRead: {
    width: setWidth('80%'),
    height: setWidth('11%'),
    backgroundColor: '#FF2D55',
    borderRadius: setWidth('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    color: '#fff',
  },
});
