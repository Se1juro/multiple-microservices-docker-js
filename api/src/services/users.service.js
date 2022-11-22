const { axiosInstance } = require("../config");

const createNewUsers = async () => {
  const users = await axiosInstance.get("/");
  return users;
};

module.exports = { createNewUsers };
