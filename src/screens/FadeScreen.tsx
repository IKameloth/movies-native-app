import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {
  const { myOpacity: opacity, fadeIn, fadeOut } = useFade()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity
        }}
      />

      <Button onPress={() => fadeIn} title="fade in" />
      <Button onPress={() => fadeOut} title="fade out" />
    </View>
  )
}
