import "dotenv/config";
import connectDB from "./db/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(`MongoDB connected successfully ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("MongoDB Error!!!", err));
