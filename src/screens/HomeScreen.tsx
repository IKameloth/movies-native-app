import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, View } from 'react-native'
import { PosterMovie } from '../components/PosterMovie'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { ScrollView } from 'react-native-gesture-handler'
import { HorizontalSlider } from '../components/HorizontalSlider'
import { GradientBackground } from '../components/GradientBackground'
import { IMAGE_BASE_URL } from '../constans'
import { getImageColors } from '../helpers'
import { GradientContext } from '../context/GradientContext'
import { useEffect } from 'react'

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()
  const { setMainColors } = useContext(GradientContext)

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = IMAGE_BASE_URL.concat(movie.poster_path)
    const [primaryColor = 'green', secondaryColor = 'blue'] = await getImageColors(uri)
    setMainColors({ primary: primaryColor, secondary: secondaryColor })
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={30} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying!}
              renderItem={({ item }: any) => <PosterMovie movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={(index) => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
