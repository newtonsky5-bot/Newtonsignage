import mongoose from "mongoose";

const clientUserSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    screenings: {
      type: Number,
      default: 0,
    },

    memoryGB: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ClientUser", clientUserSchema);
