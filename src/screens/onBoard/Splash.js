import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import global from '../../utils/global';
import constants from '../../utils/constants';
import {Text, View} from 'react-native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    global.getItem(constants.USER_DATA).then(result => {
      console.log('result', result);

      setTimeout(() => {
        navigation.navigate(result ? 'MainStack' : 'onBoard');
      }, 2000);
    });
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}
