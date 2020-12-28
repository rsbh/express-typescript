import express from "express";
import PostController from '../controllers/post.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new PostController();
  const response = await controller.getPosts();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.getPost(req.params.id);
  if (!response) res.status(404).send({message: "No post found"})
  return res.send(response);
});

export default router;