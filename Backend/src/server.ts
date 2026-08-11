import Express from "express";
import { config } from "dotenv";
import ContactRouter from "./routes/contactRoutes";
import errorHandler from "./middleware/errorHandler";
import connectDB from "./config/dbConnection";

config();
connectDB();

const port = process.env.PORT || 5000;
const app = Express();

app.use(Express.json());
app.use("/api/contacts", ContactRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
