import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { IMAGE_BASE_URL } from '../constans'
import { RootStackParams } from '../navigation'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetail } from '../components/MovieDetail'
import Icon from 'react-native-vector-icons/Ionicons'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const { height: screenHeight } = Dimensions.get('window')

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params
  const { isLoading, movieCast, movieDetails } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={myStyle.container}>
        <Image style={myStyle.imagePoster} source={{ uri: IMAGE_BASE_URL.concat(movie.poster_path) }} />
      </View>
      <View style={myStyle.marginContainer}>
        <Text style={myStyle.subTitle}>{movie.original_title}</Text>
        <Text style={myStyle.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color="blue" size={30} />
      ) : (
        <MovieDetail movie={movieDetails!} cast={movieCast!} />
      )}
      <View style={myStyle.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const myStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  imagePoster: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden'
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8
  },
  back: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 10
  }
})
