const express = require("express");

const app = express();

// middleware
app.use(express.json());

app.get("/myget", (req, res) => {
  console.log(req.body);

  res.send(req.body);
});

app.get("/", (req, res) => {
  console.log("Hello From Homepage")
  res.send(req.body);
})

app.listen(4001, () => console.log(`Server is running at port 4001...`));
