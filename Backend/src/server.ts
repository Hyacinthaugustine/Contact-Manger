import Express from "express";
import { config } from "dotenv";
config();
const port = process.env.PORT || 5000;

const app = Express();

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
