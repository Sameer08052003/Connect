import {AppState, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  _getHorizontalPadding,
  _getVerticalPadding,
  colors,
} from '../utils/Helper';
import {widthPixel} from '../utils/fonts';
import AppStyles from '../styles/AppStyles';

const FlatlistUsers = () => {
  const styles = AppStyles.getAllStyles();

  const data = [
    {
      profilePic: require('../assets/images/characters/img2.jpg'),
      isOnline: true,
      contactName: 'Alex Linderson',
      message: 'Have you recieved your parcel?',
      msgRecivedTime: '45 min ago',
      msgCount: 6,
    },
    {
      profilePic: require('../assets/images/characters/img3.jpg'),
      isOnline: false,
      contactName: 'John Ahraham',
      message: 'How you doing Today?',
      msgRecivedTime: '29 min ago',
      msgCount: 1,
    },
    {
      profilePic: require('../assets/images/characters/img4.jpg'),
      isOnline: true,
      contactName: 'Sabila Sayma',
      message: 'How was your day?',
      msgRecivedTime: '12 min ago',
      msgCount: 7,
    },
    {
      profilePic: require('../assets/images/characters/img5.jpg'),
      isOnline: true,
      contactName: 'John Borino',
      message: 'Call me whenever you are free?',
      msgRecivedTime: ' 1 day ago',
      msgCount: 1,
    },
    {
      profilePic: require('../assets/images/characters/img7.jpg'),
      isOnline: true,
      contactName: 'Ahraham',
      message: 'Hola',
      msgRecivedTime: '16 min ago',
      msgCount: 8,
    },
    {
      profilePic: require('../assets/images/characters/img8.jpg'),
      isOnline: false,
      contactName: 'Hafizur Rahman',
      message: 'Where are you?',
      msgRecivedTime: '10 min ago',
      msgCount: 6,
    },
    {
      profilePic: require('../assets/images/characters/img9.jpg'),
      isOnline: true,
      contactName: 'Angel Dayna',
      message: 'How are you today?',
      msgRecivedTime: '2 min ago',
      msgCount: 9,
    },
    {
      profilePic: require('../assets/images/characters/img10.jpg'),
      isOnline: false,
      contactName: 'Linderson',
      message: 'How are you today?',
      msgRecivedTime: ' 2h ago',
      msgCount: 5,
    },
    {
      profilePic: require('../assets/images/characters/img.jpg'),
      isOnline: true,
      contactName: 'Borino',
      message: 'How are you today?',
      msgRecivedTime: '7 min ago',
      msgCount: 1,
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        marginTop: widthPixel(30),
        paddingHorizontal: widthPixel(25),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{
                width: widthPixel(55),
                height: widthPixel(55),
                borderRadius: widthPixel(100),
              }}
              source={item.profilePic}
            />
            {item.isOnline && (
              <View
                style={{
                  width: widthPixel(10),
                  height: widthPixel(10),
                  backgroundColor: colors.GREEN,
                  borderRadius: widthPixel(100),
                  position: 'absolute',
                  bottom: 3,
                  right: 3,
                }}></View>
            )}
          </View>

          {_getHorizontalPadding(12)}

          <View style={{justifyContent: 'center'}}>
            <Text style={styles.text_20_Medium_Black}>{item.contactName}</Text>
            <Text style={styles.text_12_Regular_Grey}>{item.message}</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text style={styles.text_12_Regular_Grey}>{item.msgRecivedTime}</Text>

          {_getVerticalPadding(6)}

          <View
            style={{
              width: widthPixel(22),
              height: widthPixel(22),
              backgroundColor: colors.RED1,
              borderRadius: widthPixel(100),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.text_12_Regular_white}>{item.msgCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: widthPixel(40),
        borderTopRightRadius: widthPixel(40),
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatlistUsers;

const styles = StyleSheet.create({});
