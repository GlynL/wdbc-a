require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 8081;
console.log(process.env.SECRET_KEY);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
