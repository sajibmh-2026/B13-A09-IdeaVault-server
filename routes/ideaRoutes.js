const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getAllIdeas,
  getTrendingIdeas,
  getIdeaById,
  getIdeasByUser,
  createIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/ideaController");

router.get("/", getAllIdeas);
router.get("/trending", getTrendingIdeas);
router.get("/:id", verifyToken, getIdeaById);
router.get("/user/:email", verifyToken, getIdeasByUser);
router.post("/", verifyToken, createIdea);
router.put("/:id", verifyToken, updateIdea);
router.delete("/:id", verifyToken, deleteIdea);

module.exports = router;
