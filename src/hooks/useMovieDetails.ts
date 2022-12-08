import { useState, useEffect } from 'react'
import movieDB from '../api/movieDB'
import { CreditResponse, MovieFull, Cast } from '../interfaces'

interface MovieDetails {
  isLoading: boolean
  movieDetails?: MovieFull
  movieCast: Cast[]
}

export const useMovieDetails = (movieID: number) => {
  const [movieInformation, setMovieInformation] = useState<MovieDetails>({
    isLoading: true,
    movieDetails: undefined,
    movieCast: []
  })

  const getMovieDetails = async () => {
    const detailsPromise = movieDB.get<MovieFull>(`${movieID}`)
    const creditsPromise = movieDB.get<CreditResponse>(`${movieID}/credits`)

    const [details, credits] = await Promise.all([detailsPromise, creditsPromise])

    setMovieInformation({
      isLoading: false,
      movieDetails: details.data,
      movieCast: credits.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...movieInformation
  }
}
