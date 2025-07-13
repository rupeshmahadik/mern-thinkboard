import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;
console.log(process.env.MONGO_URL);

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}
app.use(express.json());
// app.use(cors());
app.use("/api/notes", notesRoutes);

// Serve static files from the React app
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontind", "dist", "index.html"));
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
