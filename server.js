const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

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
