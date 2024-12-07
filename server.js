// import npm packages
import express from "express";

// import the config files
import "./config/dotenv.js";
import "./config/mongodb.js";

// Internal imports
import router from "./routes/router.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route
app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
