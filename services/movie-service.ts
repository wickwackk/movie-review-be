import db from "../config/mongoose-config.js";
import Movie from "../model/Movie";

export async function getMovies(limit: number) {
  return await Movie.find({ poster: { $exists: true } })
    .limit(limit)
    .then((movies) => {
      return movies;
    })
    .catch((err) => {
      console.log("Error getting movies", err);
    });
}

// export async function addProducts() {
//   await Movie.insert({});
// }
