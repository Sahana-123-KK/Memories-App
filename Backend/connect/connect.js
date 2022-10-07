const mongoose = require("mongoose");
const DB =
  "mongodb+srv://sahana:sahana@cluster0.ngb2jks.mongodb.net/memories?retryWrites=true&w=majority";
// mongoose.set("useUnifiedTopology", true);
// mongoose.set("useNewUrlParser", true);
const connectToMongo = async () => {
  mongoose.connect(DB, () => {
    console.log("Connected To Mongo...");
  });
};

module.exports = connectToMongo;
