import Express from "express";
import { config } from "dotenv";
import ContactRouter from "./routes/contactRoutes";

config();
const port = process.env.PORT || 5000;
const app = Express();

app.use("/api/contacts", ContactRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
