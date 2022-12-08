import React from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { PosterMovie } from '../components/PosterMovie'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { ScrollView } from 'react-native-gesture-handler'
import { HorizontalSlider } from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying!}
            renderItem={({ item }: any) => <PosterMovie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  )
}
