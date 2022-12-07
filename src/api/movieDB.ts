import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f8eb2a2a29a28e5cfa14006f544dfc47',
    languaje: 'es-ES'
  }
})

export default movieDB
