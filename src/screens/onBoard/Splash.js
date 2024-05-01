import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}) => {
  
  useEffect(() => {
    let route = 'onBoard';
   
      setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: route }],
          });
      }, 1000)
}, [])

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})