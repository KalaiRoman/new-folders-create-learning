import User_Model_Shema from "../../modules/Auth_shema.js";
import hashPassword from "../../utils/PasswordHash.js";

// register
const registerUser = async (req, res, error) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(404).json({
        message: "Please Enter UserName,Email,Password is Required...!",
        status: false,
      });
    } else {
      const existUser = await User_Model_Shema.findOne({ email });
      if (existUser)
        return res
          .status(404)
          .json({ message: "User Already Exists", status: false });
      const passwordHashed = await hashPassword(password);
      const response = await User_Model_Shema.create({
        userName,
        email,
        password: passwordHashed,
        userType: "user",
      });
      await response.save();
      return res.status(201).json({ message: "User Created Successfuuly...!" });
    }
  } catch (error) {
    console.log(error, "error");
  }
};

// login
const loginUser = async (req, res, error) => {
  try {
  } catch (error) {}
};

// update
const updateUser = async (req, res, error) => {
  try {
  } catch (error) {}
};

// delete
const deleteUser = async (req, res, error) => {
  try {
  } catch (error) {}
};
// all users

const allUsers = async (req, res, error) => {
  try {
  } catch (error) {}
};

export { registerUser, loginUser, updateUser, deleteUser, allUsers };
