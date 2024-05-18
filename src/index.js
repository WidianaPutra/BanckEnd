import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoute from "./routes/users.js";
import commentRoute from "./routes/commants.js";
import collectionRoute from "./routes/collection.js";
dotenv.config();

const app = express();
app.use(cors(), express.json());

// route
app.use(userRoute);
app.use(commentRoute);
app.use(collectionRoute);

app.listen(process.env.SERVER_PORT, () => console.log("server up and running"));
