import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import contactRoutes from "./routes/contact-route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);
app.use("/", contactRoutes);

export default app;
