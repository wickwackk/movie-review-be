import express, { Express, Request, Response } from "express";
import { getMovies, getSingleMovie } from "../services/movie-service";
// import { getProducts } from "../services/product-service.js";

const movie_router = express.Router();

// const upload = multer({ dest: "/tmp" });

movie_router.get("/movies", async (req: Request, res: Response) => {
  console.log("request to get products");
  const movies = await getMovies(10);
  res.status(200).json(movies);
});

movie_router.get("/movie/:id", async (req: Request, res: Response) => {
  // console.log(req.params.id);
  const reqId = req.params.id;
  const movie = await getSingleMovie(1, reqId);
  res.status(200).json(movie);
});

// movie_router.post("/product", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
//     public_id: req.file.originalname,
//     folder: "product",
//     use_file: true,
//   });

//   const newProduct = { image: secure_url, ...JSON.parse(req.body.details) };

//   // console.log("resfromCloud", resFromCloud);
//   console.log("new product: ", newProduct);
// });

export default movie_router;
