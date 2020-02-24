import {Alert, AsyncStorage} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const setWidth = value => {
  return wp(value);
};

const setHeight = value => {
  return hp(value);
};

export {setWidth};
export {setHeight};
