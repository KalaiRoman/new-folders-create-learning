import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
};

export default hashPassword;
