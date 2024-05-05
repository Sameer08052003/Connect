import React from 'react';
import {View, TextInput} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../styles/colors';
import styles from '../styles/styles';
import constants from '../utils/constants';
import fonts from '../utils/fonts';
import global from '../utils/global';
export default function SearchBox({placeholder, onIconClick, style = {}}) {
  const [searchText, setSearchText] = React.useState('');

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 40,
          paddingHorizontal: 13,
          borderRadius: 4,
          backgroundColor: colors.WHITE,
        },
        style,
      ]}>
      <TextInput
        placeholder={placeholder}
        style={{
          fontSize: fonts.FONT_SIZE._13,
        }}
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
        }}
      />

      <Ripple
        onPress={() => {
          onIconClick(searchText);
        }}
        style={{
          alignSelf: 'center',
          padding: 10,
        }}>
        {global.drawIcon(
          constants.IC_FNT_AWESOME,
          'search',
          18,
          colors.GREY_iCON,
        )}
      </Ripple>
    </View>
  );
}
