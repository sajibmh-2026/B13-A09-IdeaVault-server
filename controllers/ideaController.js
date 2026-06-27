const Idea = require("../models/Idea");

// Get all ideas (with search & filter)
const getAllIdeas = async (req, res) => {
  try {
    const { search, category, sort } = req.query;
    let query = {};

    // Search by title (case-insensitive)
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // Filter by category
    if (category && category !== "All") {
      query.category = category;
    }

    let sortOption = { createdAt: -1 }; // Default: newest first
    if (sort === "oldest") sortOption = { createdAt: 1 };
    if (sort === "views") sortOption = { views: -1 };

    const ideas = await Idea.find(query).sort(sortOption);
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get trending ideas (latest 6) using aggregation pipeline with $limit
const getTrendingIdeas = async (req, res) => {
  try {
    const ideas = await Idea.aggregate([
      { $sort: { createdAt: -1 } },
      { $limit: 6 },
    ]);
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single idea by ID
const getIdeaById = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    // Increment views
    idea.views += 1;
    await idea.save();

    res.json(idea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ideas by user email
const getIdeasByUser = async (req, res) => {
  try {
    const ideas = await Idea.find({ authorEmail: req.params.email }).sort({
      createdAt: -1,
    });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new idea
const createIdea = async (req, res) => {
  try {
    const idea = await Idea.create(req.body);
    res.status(201).json({ message: "Idea created successfully", idea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update idea
const updateIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    // Check ownership
    if (idea.authorEmail !== req.user.email) {
      return res.status(403).json({ message: "You can only update your own ideas" });
    }

    const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ message: "Idea updated successfully", idea: updatedIdea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete idea
const deleteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    // Check ownership
    if (idea.authorEmail !== req.user.email) {
      return res.status(403).json({ message: "You can only delete your own ideas" });
    }

    await Idea.findByIdAndDelete(req.params.id);
    res.json({ message: "Idea deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllIdeas,
  getTrendingIdeas,
  getIdeaById,
  getIdeasByUser,
  createIdea,
  updateIdea,
  deleteIdea,
};
