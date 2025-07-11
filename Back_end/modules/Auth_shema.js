import mongoose from "mongoose";

const auth_shema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName is Required...!"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email is Required...!"],
    },
    password: {
      type: String,
      required: [true, "Password is Required...!"],
    },
    userType: {
      type: String,
      required: [true, "User Type is Required...!"],
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timeStamps: true,
  }
);

const User_Model_Shema =
  mongoose.model.user || mongoose.model("user", auth_shema);
export default User_Model_Shema;
