import express, { application } from "express";
import MovieControllers from "../controllers/MovieControler.js"; // possivel separar para melhor aplicação

const routes = (app) => {
    app.route("/").get((rec, res ) => res.status(200).send("rota inicial"));
    app.use(express.json());
    app.get("/movie/search", MovieControllers.getMoviePlot);
}

export default routes;