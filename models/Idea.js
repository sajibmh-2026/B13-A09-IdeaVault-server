const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Idea title is required"],
    trim: true,
  },
  shortDescription: {
    type: String,
    required: [true, "Short description is required"],
    maxlength: 200,
  },
  detailedDescription: {
    type: String,
    required: [true, "Detailed description is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: [
      "Technology",
      "Health",
      "Finance",
      "Education",
      "E-Commerce",
      "Social Impact",
      "Entertainment",
      "Food & Beverage",
      "Real Estate",
      "Transportation",
      "Sustainability",
      "Other",
    ],
  },
  tags: {
    type: [String],
    default: [],
  },
  imageURL: {
    type: String,
    default: "",
  },
  estimatedBudget: {
    type: String,
    default: "Not specified",
  },
  targetAudience: {
    type: String,
    default: "",
  },
  problemStatement: {
    type: String,
    default: "",
  },
  proposedSolution: {
    type: String,
    default: "",
  },
  authorEmail: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorPhoto: {
    type: String,
    default: "",
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Idea", ideaSchema);
