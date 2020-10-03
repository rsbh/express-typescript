import express, { Application } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
