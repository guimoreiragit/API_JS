import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/Helpers.js";

class MovieControllers {
    static async getMoviePlot (req, res){
        const movieName = req.query.movie;
        try {
            const moviePlot = await MovieService.getMovieInfo(movieName);
            const response = formatMovieObject(moviePlot);
            const translatedPlot = await MovieService.getTranlation(response);
            res.status(200).json(translatedPlot.translatedText);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
}

export default MovieControllers;