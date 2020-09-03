const mongoose = require("mongoose");
// const pass = require("../keys.js");
// mongodb + srv://admin:admin@cluster0.bp37d.mongodb.net/InvoiceSystem?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/myDB', { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("MongoDB Connection Successful");
  } else {
    console.log("Error in DB connection : " + err);
  }
});

require("./invoice.model");
require("./customer.model");
require("./user.model");
