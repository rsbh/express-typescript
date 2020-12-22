import express from "express";
import CommentController from '../controllers/comment.controller';

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CommentController();
  const response = await controller.getComments();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.createComment(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CommentController();
  const response = await controller.getComment(req.params.id);
  if (!response) res.status(404).send({message: "No comment found"})
  return res.send(response);
});

export default router;