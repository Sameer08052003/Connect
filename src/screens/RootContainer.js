import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
// import OnBoardContainer from './OnBoardContainer';
import MainStack from './MainStack';
import Splash from './onBoard/Splash';
import OnBoardStack from './OnBoardStack';


const Stack = createNativeStackNavigator();

export default function RootContainer() {
  
  return (
    <NavigationContainer independent={true}>
    {/* <NavigationContainer> */}
      <Stack.Navigator 
       screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="onBoard" component={OnBoardStack} />
      {/* <Stack.Screen name="MainStack" component={MainStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}