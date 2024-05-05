import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet, Pressable} from 'react-native';
import fonts from '../utils/fonts';
import Ripple from 'react-native-material-ripple';
import {colors} from '../utils/Helper';

export default function PrimaryButton({
  title,
  titleStyle,
  onPress = () => {},
  style = {},
}) {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.ripple, style]} onPress={onPress}>
        {titleStyle ? (
          <Text style={titleStyle}>{title}</Text>
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  ripple: {
    backgroundColor: colors.PRIMARY,
    width: '90%',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontWeight: '400',
    fontSize: fonts._16,
    color: colors.WHITE,
  },
});
