import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppStyles from '../../styles/AppStyles';
import CommonInput from '../../components/CommonInput';
import {useForm} from 'react-hook-form';
import global from '../../utils/global';
import {_getVerticalPadding} from '../../utils/Helper';
import PrimaryButton from '../../components/PrimaryButton';
import Ripple from 'react-native-material-ripple';
import {widthPixel} from '../../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import constants from '../../utils/constants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const style = AppStyles.getAllStyles();
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();
  const [isLoading, setLoading] = useState(false);

  const doLogin = data => {
    console.log('data', data);
    global.showMessage('Login Successfully', false);
    global.storeItem(constants.USER_DATA, data);
    setLoading(true);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'MainStack'}],
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'space-between',
        paddingHorizontal: 24,
      }}>
      {_getVerticalPadding(50)}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'grey',
        }}>
        <Text style={style.text_18_Regular_black}>Log in to Chatbox</Text>
        {_getVerticalPadding(11)}
        <Text style={style.text_14_Medium_mainSubtextColor}>
          Welcome back! Sign in using your social{' '}
        </Text>
        <Text style={style.text_14_Medium_mainSubtextColor}>
          account or email to continue us{' '}
        </Text>

        {_getVerticalPadding(30)}

        <Pressable style={styles.googleBtn}>
          <Image
            style={{height: 25, width: 25, borderRadius: 100}}
            source={require('../../assets/images/googleimg.png')}></Image>
        </Pressable>

        {_getVerticalPadding(30)}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{width: '40%', borderBottomWidth: 1, borderColor: 'grey'}}
          />
          <Text style={{paddingHorizontal: 10, color: 'grey'}}>OR</Text>
          <View
            style={{width: '40%', borderBottomWidth: 1, borderColor: 'grey'}}
          />
        </View>
      </View>

      {_getVerticalPadding(30)}

      <View>
        <CommonInput
          name={'Email'}
          title={'Email'}
          titleStyle={style.text_14_Medium_PrimaryColor}
          starMark={false}
          control={control}
          errors={errors}
          rules={{
            required: true,
            pattern: global.getValidEmailIDRegex(),
          }}
        />

        {_getVerticalPadding(30)}

        <CommonInput
          name={'Password'}
          title={'Password'}
          titleStyle={style.text_14_Medium_PrimaryColor}
          starMark={false}
          control={control}
          errors={errors}
          rules={{
            required: true,
            pattern: global.getPasswordRegex(),
          }}
          secureTextEntry={true}
        />
        <Pressable style={styles.rippleForgetBtn}>
          {_getVerticalPadding(5)}
          <Text style={[style.text_14_Medium_PrimaryColor]}>
            Forgot password?
          </Text>
        </Pressable>
        {_getVerticalPadding(50)}
      </View>

      {/* Login Button and Forgot Password */}
      {_getVerticalPadding(30)}

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <PrimaryButton
          onPress={handleSubmit(doLogin)}
          title={'Login'}
          titleStyle={style.text_16_Bold_White}
          style={styles.PrimaryButton}></PrimaryButton>

        <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
          <Text
            style={[style.text_14_Medium_PrimaryColor, {textAlign: 'center'}]}>
            Create account? Signup
          </Text>
        </Pressable>

        {_getVerticalPadding(16)}
      </View>
      {isLoading && global.getLoader()}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  googleBtn: {
    height: widthPixel(40),
    width: widthPixel(40),
    borderRadius: widthPixel(100),
    borderWidth: 1,
    borderColor: 'grey',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  PrimaryButton: {
    backgroundColor: '#24786D',
    borderRadius: widthPixel(16),
    width: '100%',
  },

  rippleBackBtn: {
    height: widthPixel(24),
    width: widthPixel(24),
    marginTop: widthPixel(17),
  },
  rippleForgetBtn: {
    width: widthPixel(120),
    height: widthPixel(25),
    justifyContent: 'center',
  },
});
