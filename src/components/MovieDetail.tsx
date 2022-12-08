import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MovieFull, Cast } from '../interfaces'
import currencyFormatter from 'currency-formatter'
import { CastItem } from './CastItem'

interface Props {
  movie: MovieFull
  cast: Cast[]
}

export const MovieDetail = ({ movie, cast }: Props) => {
  return (
    <>
      <View style={myStyle.horizontal}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" size={16} />
          <Text>{movie.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>- {movie.genres.map((genre) => genre.name).join(', ')}</Text>
        </View>
      </View>
      <View style={myStyle.horizontal}>
        <Text style={myStyle.title}>History</Text>
        <Text style={myStyle.subTitle}>{movie.overview}</Text>
      </View>
      <View style={myStyle.horizontal}>
        <Text style={myStyle.title}>Budget</Text>
        <Text style={myStyle.subTitle}>{currencyFormatter.format(movie.budget, { code: 'USD' })}</Text>
      </View>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CastItem actor={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )
}

const myStyle = StyleSheet.create({
  horizontal: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16
  }
})
