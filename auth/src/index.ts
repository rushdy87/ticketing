import express from "express";

import { currentUserRouter } from "./routes/current-user.js";
import { signInRouter } from "./routes/signin.js";
import { signOutRouter } from "./routes/signout.js";
import { signUpRouter } from "./routes/signup.js";

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth service starting...`);
  console.log(`Running on port ${PORT} ...`);
});
