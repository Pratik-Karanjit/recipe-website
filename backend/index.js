import express, { json } from "express";
import { port } from "./src/config/constant.js";
import cors from "cors"

let app = express();

app.use(json());

app.use(cors())

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
