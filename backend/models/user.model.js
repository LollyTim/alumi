import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["superUser", "admin", "member"],
    default: "member",
  },
  // Add other profile fields as needed
});

const User = mongoose.model("User", userSchema);
export default User;
