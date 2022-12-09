import { useRef } from 'react'
import { Animated } from 'react-native'

export const useFade = () => {
  const myOpacity = useRef(new Animated.Value(0)).current

  const fadeIn = (callback?: Function) => {
    Animated.timing(myOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => (callback ? callback() : null))
  }

  const fadeOut = () => {
    Animated.timing(myOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  return {
    myOpacity,
    fadeIn,
    fadeOut
  }
}
