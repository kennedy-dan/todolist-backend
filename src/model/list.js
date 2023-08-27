const mongoose = require("mongoose");

const ListSchema =new mongoose.Schema(
  {
    todolist: {
        type : String,
        required: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lists", ListSchema);

