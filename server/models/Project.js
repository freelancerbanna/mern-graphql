const mongoose = require("mongoose");

const ProjectShema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    status: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
