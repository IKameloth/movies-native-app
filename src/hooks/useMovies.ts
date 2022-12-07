import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieNowPlaying, Movie } from '../interfaces/index'

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])

  const getNowPlaying = async () => {
    const resp = await movieDB.get<MovieNowPlaying>('/now_playing')
    setMoviesNowPlaying(resp.data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getNowPlaying()
  }, [])

  return {
    moviesNowPlaying,
    isLoading
  }
}
