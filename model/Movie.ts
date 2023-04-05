import { model, Schema } from "mongoose";
type AwardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type ImdbType = {
  rating: number;
  votes: number;
  id: number;
};
type ViewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type TomatoesType = { viewer: ViewerType; lastUpdated: Date };

interface MovieType {
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: AwardsType;
  lastupdated: string;
  year: number;
  imdb: ImdbType;
  countries: string[];
  type: string;
  tomatoes: TomatoesType;
}

const MovieSchema = new Schema<MovieType>({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastupdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
});

const Movie = model<MovieType>("Movie", MovieSchema);

export default Movie;
