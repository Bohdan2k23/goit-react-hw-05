import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTFkOTBlMjc1MjI4Mjc3ZWY5ZGYyYzU3ODgxZmFiMiIsInN1YiI6IjY2MjdmYTgzMjU4ODIzMDE2NDkyMDY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sYDfT15yaHIEUmIm6FySFORtR0JWwOFXBRoW_odb5OM"

// const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzgxM2E4YmNiODZiMTg5OTQxNTE2NzIxNzI2MjYwNCIsInN1YiI6IjY2MmNmOTBlMDI4ZjE0MDEyODY4N2QzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A-3rCUHOoKYpw_s-fAEogc9cRBVOsMxGw6eU1-1-GCs"

const apiUrlBase = "https://api.themoviedb.org/3/"
const apiUrlMovie = apiUrlBase + "movie/"
const trendUrl = apiUrlBase + 'trending/movie/day?language=en-US'
const options: AxiosRequestConfig = {
  params:{
    language: "en-US",
  },
  headers: {
    Authorization: 'Bearer ' + apiKey
  }
};

const getData = async (url: string, options: AxiosRequestConfig) => {
  return (await axios.get(url, options)).data
}

export const fetch = {
  trend: async () => getData(trendUrl, options),

  byId: async (movieId: string) => getData(apiUrlMovie + movieId, options),

  cast: async (movieId: string) => getData(`${apiUrlMovie + movieId}}/credits`, options),

  rewiews: async (movieId: string) => getData(`${apiUrlMovie + movieId}/reviews`, {
    ...options,
    params: {
      ...options.params,
      page: 1
    }
  }),

  search: async (query: string) => getData(`${apiUrlBase}/search/movie`, {
    ...options, 
    params: { 
      ...options.params, 
      query,
      include_adult: false,
      page: 1,
    }
  }) 
}

