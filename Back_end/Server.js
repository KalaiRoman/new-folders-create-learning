// "dev": "NODE_ENV=development nodemon Server.js",
// "production": "NODE_ENV=production node Server.js",
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import DataBaseConnection from "./utils/DataBaseConnect.js";
import router from "./routes/index.js";
dotenv.config({ quiet: true });
DataBaseConnection();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(morgan("dev"));
app.get("/", (req, res, error) => {
  return res.json("Backend Running Successfully...!");
});

app.use("/lean",router);
app.listen(process.env.PORT, () => {
  console.log(`Backend Running Successfully ${process.env.PORT}`);
});
