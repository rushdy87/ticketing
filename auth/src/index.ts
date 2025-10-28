import express from "express";

const app = express();

app.use(express.json());

app.get("/api/users/currentuser", (req, res) => {
  res.send("Auth Service is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth service starting...`);
  console.log(`Running on port ${PORT} ...`);
});
