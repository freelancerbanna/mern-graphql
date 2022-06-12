require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const app = express();

//
const schema = require("./schema/schema");

const { PORT, NODE_ENV } = require("./env");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`PORT listening on ${PORT}`);
});
