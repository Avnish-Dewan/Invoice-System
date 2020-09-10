const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    verified: {
        type: String
    },
    role: {
        type: String
    },
    firstLogin: {
        type: Boolean
    },
<<<<<<< HEAD
    firstLogin:{
        type:Boolean
    },
    isLinkValid:{
        type:Boolean
    },
    resetLink : {
        type:String
=======
    isLinkValid: {
        type: Boolean
    },
    resetLink: {
        type: String
>>>>>>> 63580b4dea250b425d7679d086493e434d97ff57
    }
});

mongoose.model("User", userSchema);
