import express, { NextFunction, Request, Response } from "express";

import todosRouter from "./routes/todo";

const app = express();

app.use(express.json());

app.use("/todos", todosRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
  });
});

app.listen(5000, () => console.log("App is running"));
