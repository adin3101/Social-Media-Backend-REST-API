import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();

app.use(express.json());
app.use("/api/users", router);
app.use("/api/blogs", blogRouter);

mongoose
  .connect(
    "mongodb+srv://adinansari31:gYWn3ZFJ5mZBxLkX@cluster0.ar92iug.mongodb.net/BlogApp"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to the database and listening to local host 5000")
  )
  .catch((err) => console.log(err));
