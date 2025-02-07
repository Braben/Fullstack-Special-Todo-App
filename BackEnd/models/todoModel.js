const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  users: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

//export model
module.exports = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
