import cors from "cors";
import express, { Router } from "express";
import { docsRoutes, transactionRoutes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const apiRouter = Router();
transactionRoutes(apiRouter);

const docsRouter = Router();
docsRoutes(docsRouter);

app.get("/", (_req, response) =>
  response.send("Welcome to Kronoos Fullstack Challenge API")
);

app.use("/api", apiRouter);
app.use(docsRouter);

export { app };
