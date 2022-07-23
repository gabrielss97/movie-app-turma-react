import axios from "axios";

const API_KEY = "3e074b6d14a7158d77bae02b97da066e";
const BASE_URL = "https://api.themoviedb.org/3/";

const baseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    static getMovies(){
        return axios(baseUrl('movie/popular'))
    }

    static getMovieDetail(id){
        return axios(baseUrl(`movie/${id}`))
    }
}