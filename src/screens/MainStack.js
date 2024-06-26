import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown : false}} name="Home" component={Home} />
      </Stack.Navigator>
  )
}
