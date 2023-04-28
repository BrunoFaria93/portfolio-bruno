const mongoose = require("mongoose");

require('dotenv').config();

const minhaSenha = process.env.PASSWORD;

mongoose.connect(
  "mongodb+srv://brunofaria:"+minhaSenha+"@user-db.3ggwjbe.mongodb.net/test");

mongoose.Promise = global.Promise;

module.exports = mongoose;
