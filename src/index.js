import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/users.js";
dotenv.config();

const app = express();
app.use(cors(), express.json());

// route
app.use(userRouter);

app.listen(process.env.SERVER_PORT, () => console.log("server up and running"));
