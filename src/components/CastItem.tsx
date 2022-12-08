import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { IMAGE_BASE_URL } from '../constans'
import { Cast } from '../interfaces'

interface Props {
  actor: Cast
}

export const CardItem = ({ actor }: Props) => {
  return (
    <View style={{ ...myStyle.shadow, flexDirection: 'row', backgroundColor: 'white', borderRadius: 10 }}>
      {actor.profile_path && (
        <Image
          source={{ uri: IMAGE_BASE_URL.concat(actor.profile_path) }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}

      <View style={{ marginLeft: 20, marginTop: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  )
}

export const CastItem = ({ actor }: Props) => {
  return (
    <View style={myStyle.container}>
      <CardItem actor={actor} />
    </View>
  )
}

const myStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    marginHorizontal: 20,
    paddingRight: 10
  }
})
