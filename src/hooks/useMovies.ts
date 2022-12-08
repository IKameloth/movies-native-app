import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieDBResponse, Movie } from '../interfaces/index'

interface MoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  })

  const getNowPlaying = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing')
    const popular = movieDB.get<MovieDBResponse>('/popular')
    const topRated = movieDB.get<MovieDBResponse>('/top_rated')
    const upcoming = movieDB.get<MovieDBResponse>('/upcoming')

    const response = await Promise.all([nowPlaying, popular, topRated, upcoming])

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results
    })

    setIsLoading(false)
  }

  useEffect(() => {
    getNowPlaying()
  }, [])

  return {
    ...moviesState,
    isLoading
  }
}
