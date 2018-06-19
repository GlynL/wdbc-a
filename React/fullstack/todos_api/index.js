const express = require("express");
const app = express();

var todoRoutes = require("./routes/todos");

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// static files
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(8080, () => console.log("app listening on port 8080."));
