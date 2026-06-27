const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getCommentsByIdea,
  getInteractedIdeas,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.get("/:ideaId", getCommentsByIdea);
router.get("/user/:email", verifyToken, getInteractedIdeas);
router.post("/", verifyToken, addComment);
router.put("/:id", verifyToken, updateComment);
router.delete("/:id", verifyToken, deleteComment);

module.exports = router;
