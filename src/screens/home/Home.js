import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPixel} from '../../utils/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppStyles from '../../styles/AppStyles';
import {colors} from '../../utils/Helper';
import FlatlistUsers from '../../components/FlatlistUsers';

const Home = () => {
  const styles = AppStyles.getAllStyles();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.BLACK,
      }}>
      <View
        style={{
          marginTop: widthPixel(17),
          paddingHorizontal: widthPixel(24),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 44,
            height: 44,
            borderWidth: 1,
            borderColor: colors.DARK_BORDER_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="search1" size={20} color="#FFFFFF" />
        </View>

        <Text style={styles.text_20_Medium_White}>Home</Text>

        <View
          style={{
            borderRadius: 100,
            backgroundColor: 'red',
            width: 44,
            height: 44,
            borderWidth: 1,
          }}>
          <Image
            style={{
              width: widthPixel(44),
              height: widthPixel(44),
              borderRadius: 100,
            }}
            source={require('../../assets/images/characters/img.jpg')}></Image>
        </View>
      </View>

      <FlatlistUsers />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
