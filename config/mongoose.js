const mongoose = require('mongoose');

main().catch(err => console.log(inverse(err)));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Sort-URL');
  console.log("Successfully connected to DataBase.");
}
const db=mongoose.connect;
module.exports=db;