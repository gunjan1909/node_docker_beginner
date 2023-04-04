import express from "express";

const app = express();
const PORT = 3000;

app.get("/", async function (req, res) {
  res.send("Docker start");
});

app.listen(PORT, async function () {
  console.log(`App running on ${PORT}`);
});
