import { View, Text , FlatList , StyleSheet } from 'react-native'
import React from 'react'
import Slides from './Slides'
import OnBoardingItem from './OnBoardingItem'

const OnBoarding = () => {
  return (
    <View>
      <FlatList data={Slides} renderItem={({item}) => <OnBoardingItem />} />
    </View>
  )
}

export default OnBoarding