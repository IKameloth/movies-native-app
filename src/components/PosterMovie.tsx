import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces'
import { IMAGE_BASE_URL } from '../constans/index'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
  movie: Movie
  height?: number
  width?: number
}

export const PosterMovie = ({ movie, height = 420, width = 300 }: Props) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen' as never, movie as never)}
      activeOpacity={0.8}
      style={{ ...customStyles.container, width, height }}
    >
      <Image style={customStyles.image} source={{ uri: IMAGE_BASE_URL.concat(movie.poster_path) }} />
    </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    marginHorizontal: 2,
    paddingHorizontal: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15
  },
  image: {
    flex: 1,
    borderRadius: 20
  }
})
