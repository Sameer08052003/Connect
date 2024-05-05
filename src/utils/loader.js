import React from 'react';
import {View} from 'react-native';
import {LoaderScreen} from 'react-native-ui-lib';
import {colors} from './Helper';

export default loader = () => {
  return (
    <View>
      <LoaderScreen color={colors.PRIMARY} message="Loading" overlay />
    </View>
  );
};
