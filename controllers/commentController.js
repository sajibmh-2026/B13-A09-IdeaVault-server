const Comment = require("../models/Comment");

// Get comments for an idea
const getCommentsByIdea = async (req, res) => {
  try {
    const comments = await Comment.find({ ideaId: req.params.ideaId }).sort({
      createdAt: -1,
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ideas the user has commented on
const getInteractedIdeas = async (req, res) => {
  try {
    const comments = await Comment.find({ userEmail: req.params.email });
    const ideaIds = [...new Set(comments.map((c) => c.ideaId.toString()))];

    const Idea = require("../models/Idea");
    const ideas = await Idea.find({ _id: { $in: ideaIds } }).sort({
      createdAt: -1,
    });

    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add comment
const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update comment
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check ownership
    if (comment.userEmail !== req.user.email) {
      return res.status(403).json({ message: "You can only edit your own comments" });
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text, updatedAt: Date.now() },
      { new: true }
    );

    res.json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Check ownership
    if (comment.userEmail !== req.user.email) {
      return res.status(403).json({ message: "You can only delete your own comments" });
    }

    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCommentsByIdea,
  getInteractedIdeas,
  addComment,
  updateComment,
  deleteComment,
};
