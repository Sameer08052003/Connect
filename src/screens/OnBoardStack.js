import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './onBoard/LoginScreen';
import SignUp from './onBoard/SignUpScreen';
import SignUpScreen from './onBoard/SignUpScreen';

const OnboardStack = createNativeStackNavigator();


const OnBoardStack = () => {


  return (
    <OnboardStack.Navigator>
      <OnboardStack.Screen 
       options={{headerShown:false}}
       name="LoginScreen" component={LoginScreen}
      />
      <OnboardStack.Screen 
       options={{headerShown:false}}
       name="SignUpScreen" component={SignUpScreen}
      />
     
    </OnboardStack.Navigator>
  )
}

export default OnBoardStack

const styles = StyleSheet.create({})