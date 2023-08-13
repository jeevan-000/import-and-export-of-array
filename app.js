const express = require("express");
const add = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let first = new Date();
  let news = add(
    new Date(first.getFullYear(), first.getMonth(), first.getDate()),
    100
  );

  let result = `${news.getDate()}/${news.getMonth() + 1}/${news.getFullYear()}`;
  response.send(result);
});

module.exports = app;
