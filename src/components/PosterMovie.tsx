import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces'
import { IMAGE_BASE_URL } from '../constans/index'

interface Props {
  movie: Movie
}

export const PosterMovie = ({ movie }: Props) => {
  return (
    <View style={customStyles.container}>
      <Image style={customStyles.image} source={{ uri: IMAGE_BASE_URL.concat(movie.poster_path) }} />
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
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
