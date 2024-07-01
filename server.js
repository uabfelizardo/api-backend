import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

// Aumentar o limite do tamanho de payload para 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(cors());
app.use(routes);

db.sync(() => console.log(`Connected to the database ${process.env.DB_NAME}`));

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("Server starting on port " + port + "|3001")
);
