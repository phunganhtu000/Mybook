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
      dataAuthor: [
        {
          name: 'Nguyễn Tuân',
          numbersp: '1',
          describe:
            'Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.Nguyễn Tuân, sở trường về tùy bút và ký, được tặng Giải thưởng Hồ Chí Minh về văn học nghệ thuật năm 1996. Tác phẩm của Nguyễn Tuân luôn thể hiện phong cách độc đáo, tài hoa, sự hiểu biết phong phú nhiều mặt và vốn ngôn ngữ, giàu có, điêu luyện.',
          birday: '10/07/1910',
          image:
            'https://vanvietnam.files.wordpress.com/2015/03/wpid-nhavannguyentuan1_jpg.jpeg',
        },
        {
          name: 'Nguyễn Trãi',
          numbersp: '1',
          describe:
            'Nguyễn Trãi là một vị anh hùng dân tộc, một nhà văn hóa kiệt xuất, nhân vật toàn tài số một của lịch sử Việt Nam thời phong kiến. Nguyễn Trãi tên hiệu ức Trai, sinh năm 1380, quê gốc ở xã Chi Ngại (Nay là xã Cộng Hòa, huyện Chí Linh, tỉnh Hải Dương) sau dời đến làng Nhị Khê (Thường Tín, Hà Tây).',
          birday: '1380',
          image:
            'https://jonathanvankin.com/wp-content/uploads/2018/11/tac-gia-nguyen-trai-mot-net-chinh-trong-cuoc-doi-va-su-nghiep-1-e1541994154625.jpg',
        },
        {
          name: 'Hàn Mặc Tử',
          numbersp: '1',
          describe:
            'Hàn Mặc Tử (1912-1940) tên khai sinh là Nguyễn Trọng Trí, quê ở làng Mĩ Lệ, tổng Võ Xá, huyện Phong Lộc, tỉnh Đồng Hới (nay thuộc tỉnh Quảng Bình). ... Năm 1936, Hàn Mặc Tử phải trở về Quy Nhơn để chữa bệnh, bốn năm sau ông mất do căn bệnh phong.',
          birday: '1912',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/08/Hanmactu.jpg',
        },
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
  _renderItemGrid = ({item}) => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.viewItem}
        onPress={() => navigate('AuthorDetail', {item: item})}>
        <Image style={styles.ImageComponentStyle} source={{uri: item.image}} />
        <View style={styles.ItemTextStyle}>
          <Text style={styles.textName1}>{item.name}</Text>
          <Text style={styles.textName} numberOfLines={1}>
            {item.numbersp} tác phẩm
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  _renderItem = ({item}) => {
    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.viewItem2}
        onPress={() => navigate('AuthorDetail', {item: item})}>
        <Image style={styles.ImageComponentStyle2} source={{uri: item.image}} />
        <View style={styles.ItemTextStyle2}>
          <Text style={styles.text1Name2} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.text1Name1} numberOfLines={1}>
            {item.birday}
          </Text>
          <Text style={styles.text1Name11} numberOfLines={1}>
            {item.numbersp} tác phẩm
          </Text>
          <Text style={styles.text1Name22} numberOfLines={3}>
            {item.describe}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {navigation} = this.props;
    const {navigate} = this.props.navigation;
    const gfidView = this.state.count;
    return (
      <View style={styles.saf}>
        {/* <HeaderAuthor
          iconLeft="ios-arrow-back"
          typeIconLeft="Ionicons"
          iconRight="ios-search"
          typeIconRight="Ionicons"
          navigationProps={navigation}
          title="Danh sách tác giả"
          onPressLeft={() => navigate('Menu_Scren')}
        /> */}
        {gfidView ? (
          <FlatList
            data={this.state.dataAuthor}
            renderItem={this._renderItemGrid}
            numColumns={3}
            key={this.state.GridColumnsValue ? 'ONE COLUMN' : 'THERE COLUMN'}
            keyExtractor={(item, index) => index}
          />
        ) : (
          <FlatList
            data={this.state.dataAuthor}
            renderItem={this._renderItem}
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
});
