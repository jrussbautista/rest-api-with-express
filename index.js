const express = require("express"),
  app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "test only"
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
