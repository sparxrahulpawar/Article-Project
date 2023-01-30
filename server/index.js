import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./db/Connection.js";
import userRouter from "./routes/userRoute.js";

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(cors());

//mongodb connection using dotenv
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

//middleware
app.use((req, res, next) => {
  console.log("Http Method = " + req.method + ", Url = " + req.url);
  next();
});

//convert in json form
app.use(express.json());

//Load Routes
app.use("/api/", userRouter);

app.listen(port, () => {
  console.log(` Server listening on port ${port}`);
});
