import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

db.sync(() => console.log(`Connected to the database ${process.env.DB_NAME}`));

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("Server starting on port " + port + "|3001")
);
