const mongoose = require("mongoose");

const User = mongoose.model("person", {
  firs_name: {
     type: String,
     required: false
   },
   last_name: {
     type: String,
     required: false
   },
   email_id: {
     type: String,
     required: false
   },
   phone_number: {
     type: String,
     required: false
   }
});
module.exports = mongoose.model("User", User);
