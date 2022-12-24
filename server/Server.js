import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/conn.js";
const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 8080;

app.use("/api", router);
app.get("/", (req, res) => {
  try {
    res.json("server started");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server started at port ${port}`);
      });
    } catch (error) {
      console.log("could not connect  to database ");
    }
  })
  .catch((error) => {
    console.log("Invalid Connection to database");
  });
