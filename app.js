const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ msg: "Hello World" }).status(200);
});

app.get("/func", (req, res) => {
  (async function () {
    setTimeout(() => {
      res.json({ msg: "execute function" });
    }, 1000);
  });
});

app.post("/post", (req, res) => {
  const body = req.body;

  res.json({ msg: body }).status(200);
});

app.listen(8080, () => {
  console.log("Server o in http://localhost:8080");
  console.log("-------------------------------");
  console.log("endpoint: 'GET', path:  '/'");
  console.log("-------------------------------");
  console.log("endpoint: 'GET', path: '/func'");
  console.log("-------------------------------");
  console.log("endpoint: 'POST', path: '/post'");
  console.log("-------------------------------");
});
