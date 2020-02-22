import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
export default class NavigationDrawerStructure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    const {navigation} = this.props;
    // const {navigate} = this.props.navigation;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('../assets/image/menu.png')}
            style={{width: 20, height: 20, marginLeft: 10}}
          />
        </TouchableOpacity>
        {/* <View style={styles.accBar}>
          <TextInput
            autoFocus={true}
            round
            onChangeText={text => this.SearchFilterFunction(text)}
            onClear={text => this.SearchFilterFunction('')}
            placeholder="Search"
            // placeholderTextColor={ThemeConstants[theme].textColor}
            // value={this.state.search}
            style={[styles.input]}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.filter}>
            <Text style={[styles.txtBar]}>Cancel</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  accBar: {
    width: '94%',
    marginTop: '10%',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '71%',
    paddingHorizontal: '3%',
  },
  filter: {
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBar: {
    marginTop: 15,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
