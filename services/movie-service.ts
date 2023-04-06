import db from "../config/mongoose-config.js";
import Movie from "../model/Movie";

export async function getMovies(limit: number) {
  return await Movie.find({ poster: { $exists: true } })
    .limit(limit)
    .select({ title: 1, _id: 1, poster: 1, tomatoes: 1, year: 1 })
    .then((movies) => {
      return movies;
    })
    .catch((err) => {
      console.log("Error getting movies", err);
    });
}

export async function getSingleMovie(limit: number, reqId: string) {
  return await Movie.findOne({ _id: reqId })
    .limit(limit)
    .then((movie) => {
      return movie;
    })
    .catch((err) => {
      console.log("Error getting a single movie", err);
    });
}

// export async function addProducts() {
//   await Movie.insert({});
// }
