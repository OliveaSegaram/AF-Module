import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT|| 5000;

app.use(express.json());
//allows to parse incoming request

app.get("/",(req, res)=>{
    res.send("Hello ");
});

app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port:",PORT);
});
//ar1MQhHgRzktoYOK
//mongodb+srv://it22267740:<db_password>@cluster0.31dyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0