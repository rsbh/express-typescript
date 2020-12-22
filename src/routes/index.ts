import express from "express";
import PingController from "../controllers/ping.controller";
import UserController from "../controllers/user.controller";
import PostController from '../controllers/post.controller';

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.get("/users", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.send(response);
});

router.post("/users", async (req, res) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  return res.send(response);
});

router.get("/users/:id", async (req, res) => {
  const controller = new UserController();
  const response = await controller.getUser(req.params.id);
  if (!response) res.status(404).send({message: "No user found"})
  return res.send(response);
});

router.get("/posts", async (_req, res) => {
  const controller = new PostController();
  const response = await controller.getPosts();
  return res.send(response);
});

router.post("/posts", async (req, res) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);
  return res.send(response);
});

router.get("/posts/:id", async (req, res) => {
  const controller = new PostController();
  const response = await controller.getPost(req.params.id);
  if (!response) res.status(404).send({message: "No post found"})
  return res.send(response);
});

export default router;
