import "dotenv/config";
import connectDB from "./db/db.js";

connectDB()
.then(()=> console.log("MongoDB connected successfully"))
.catch((err)=>console.log("MongoDB Error!!!", err))
