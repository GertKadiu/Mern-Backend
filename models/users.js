const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    require: true,
    unique: true
},
email : {
    type : String,
    require: true,
    unique: true
},
password : {
    type : String,
    require: true,
},
image : {
    type : String
},
age : {
    type : Number,
},
posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "events", 
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
