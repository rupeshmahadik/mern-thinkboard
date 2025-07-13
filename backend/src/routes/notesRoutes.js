import express from "express";
const router = express.Router();
import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  getNoteById,
} from "../controllers/notesControllers.js";

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
