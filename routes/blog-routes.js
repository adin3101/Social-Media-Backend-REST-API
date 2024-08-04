import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getbyId,
  getByuserId,
  updateBlog,
} from "../controller/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getbyId);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByuserId);
export default blogRouter;
