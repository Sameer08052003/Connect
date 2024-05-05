import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import global from '../utils/global';
import constants from '../utils/constants';
import fonts from '../utils/fonts';
import colors from '../styles/colors';

export default Toolbar = ({
  title,
  navigation,
  endRippleIcon,
  endRippleIconType,
  endRippleText,
  endRippleClick,
  showBackButton = false,
  styleEndRippleText,
  HeaderRightFunction,
}) => {
  const close = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.column1}>
        {showBackButton && (
          <TouchableHighlight
            style={[
              styles.btnBack,
              title
                ? {}
                : {
                    backgroundColor: colors.WHITE,
                  },
            ]}
            onPress={() => close()}
            underlayColor={colors.RIPPLE_EFFECT}>
            {global.drawIcon(
              constants.IC_IONiCONS,
              'ios-chevron-back-outline',
              24,
              colors.BLACK,
            )}
          </TouchableHighlight>
        )}
        {title && (
          <Text numberOfLines={1} style={[styles.title]}>
            {title}
          </Text>
        )}
      </View>

      {endRippleIcon && (
        <Ripple style={[styles.endIcon]} onPress={() => endRippleClick()}>
          {global.drawIcon(endRippleIconType, endRippleIcon, 16, colors.WHITE)}
        </Ripple>
      )}

      {/* {endRippleText &&
                <Ripple onPress={() => endRippleClick()}
                >
                   {
                    styleEndRippleText 
                    ?  
                    <Text style={styleEndRippleText}>{endRippleText}</Text>
                     :
                    <Text style={styles.endRippleText}>{endRippleText}</Text>

                   }
                </Ripple>
            }    */}

      {HeaderRightFunction()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 22,
  },
  column1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    height: 40,
    width: 40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
  },
  endIcon: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 4,
  },

  endRippleText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.PRIMARY,
    fontSize: fonts._13,
    fontFamily: fonts.FONT_FAMILY.REGULAR,
  },

  title: {
    color: colors.BLACK,
    fontSize: fonts._16,
    fontFamily: fonts.FONT_FAMILY.SemiBold,
  },
});
