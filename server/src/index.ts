import express from "express";
import { stripeRouter, setStaticFolder } from "./router";

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", stripeRouter);
setStaticFolder(app);

app.listen(SERVER_PORT, () => {
  console.log(process.env);
  console.info(`>>> ${SERVER_PORT}`);
});
