import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://ochirjamia:UP00211336@cluster0.2ntd7sr.mongodb.net/sample_mflix?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoose connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose.connection;
