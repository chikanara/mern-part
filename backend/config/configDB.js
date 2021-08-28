const mongoose = require("mongoose");
const configDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = configDB;
