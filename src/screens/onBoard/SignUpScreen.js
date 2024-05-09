import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPixel} from '../../utils/fonts';
import AppStyles from '../../styles/AppStyles';
import {_getVerticalPadding} from '../../utils/Helper';
import {useForm} from 'react-hook-form';
import CommonInput from '../../components/CommonInput';
import global from '../../utils/global';
import PrimaryButton from '../../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const style = AppStyles.getAllStyles();
  const [isLoading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  const data = [
    {
      name: 'Name',
      title: 'Name',
      pattern: null,
    },
    {
      name: 'Email',
      title: 'Email',
      pattern: global.getValidEmailIDRegex(),
    },
    {
      name: 'Password',
      title: 'Password',
      pattern: global.getPasswordRegex(),
    },
  ];

  const doSignup = data => {
    console.log('data', data);
    global.showMessage('SignUp Successfully', false);
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
        paddingHorizontal: widthPixel(24),
        marginTop: widthPixel(17),
      }}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.rippleBackBtn}>
        <Ionicons name="arrow-back" size={20} color="#000E08" />
      </Pressable>

      {_getVerticalPadding(45)}

      <View>
        <Text style={[style.text_18_Bold_black, {textAlign: 'center'}]}>
          Sign up with Email
        </Text>

        {_getVerticalPadding(17)}

        <Text
          style={[
            style.text_14_Medium_mainSubtextColor,
            {textAlign: 'center'},
          ]}>
          Get chatting with friends and family today by
        </Text>
        <Text
          style={[
            style.text_14_Medium_mainSubtextColor,
            {textAlign: 'center'},
          ]}>
          signing up for our chat app!
        </Text>

        {_getVerticalPadding(60)}

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View>
                <CommonInput
                  name={item.name}
                  title={item.title}
                  titleStyle={style.text_14_Medium_PrimaryColor}
                  starMark={false}
                  control={control}
                  errors={errors}
                  rules={{
                    required: true,
                    pattern: item.pattern,
                  }}
                />
                {_getVerticalPadding(30)}
              </View>
            );
          }}
        />
      </View>

      {_getVerticalPadding(30)}

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <PrimaryButton
          onPress={handleSubmit(doSignup)}
          title={'SignUp'}
          titleStyle={style.text_16_Bold_White}
          style={styles.PrimaryButton}></PrimaryButton>

        {_getVerticalPadding(16)}
      </View>
      {isLoading && global.getLoader()}
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  PrimaryButton: {
    backgroundColor: '#24786D',
    borderRadius: widthPixel(16),
    width: '100%',
  },
});
