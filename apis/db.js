import mysql  from 'mysql';

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"bubbles"
});

db.connect(function(err) {
  //if (err) throw err;
  if (err){
    console.log('Unable to connect with database.');
  } else {
    console.log("Connected!");
  }
});
