const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/angular-posts",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
