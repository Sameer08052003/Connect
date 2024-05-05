import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import global from '../../utils/global';
import constants from '../../utils/constants';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    global.getItem(constants.USER_DATA).then(result => {
      console.log('result', result);
      navigation.navigate(result ? 'MainStack' : 'onBoard');

      // setTimeout(() => {
      //   navigation.reset({
      //     index: 0,
      //     routes: [{name: route}],
      //   });
      // }, 1000);
    });
  }, []);

  return <></>;
}
