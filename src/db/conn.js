const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registrationForm",
). then(() =>{
    console.log(`connection successfull`);
}).catch((e) => {
    console.log(`no connection`);
})