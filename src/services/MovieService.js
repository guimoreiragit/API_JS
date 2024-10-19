import {fetchMovie, fatchTranslation} from "../utils/ApiConnect.js";

class MovieService {
    static async getMovieInfo (movieName){
        // fetch API
        const movie = await fetchMovie(movieName);
        return movie;

    }

    static async getTranlation(movieInfo){
        const translated = await fatchTranslation(movieInfo.plot)
        return translated;
    }

}

export default MovieService;