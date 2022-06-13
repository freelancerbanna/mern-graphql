require("dotenv").config();
const colors = require("colors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//
const schema = require("./schema/schema");

const { PORT, NODE_ENV, DB } = require("./env");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === "development",
  })
);

mongoose.connect(DB, {}).then(() => {
  app.listen(PORT, () => {
    console.log(
      `Server Working with PORT listening on ${PORT}`.rainbow.underline.bold
    );
  });
});
