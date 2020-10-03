import express, { Application } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import Router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
