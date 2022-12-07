import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { PosterMovie } from '../components/PosterMovie'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { moviesNowPlaying, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={30} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top }}>
      <View style={{ height: 440 }}>
        <Carousel
          data={moviesNowPlaying}
          renderItem={({ item }: any) => <PosterMovie movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  )
}
