import {v4 as uuid} from "uuid";
import {db} from '../db.js';
import md5 from 'md5';

//router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded


let users = [];

export const login = (req,res)=> {
  const email   = req.body.email;
  const password = req.body.password;

  let sql = `SELECT * FROM bb_users WHERE email='${email}' AND password ='${md5(password)}'`;

  db.query(sql, function(err, row, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    if(row.length){
      res.json(row);
    } else {
      res.json('User not found.');
    }
    });
  }

export const getUsers = (req,res)=> {

let sql = "SELECT * FROM bb_users";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(rows)
  })
 //res.send(users);
}


export const createUser = (req,res)=> {
    
    const name  = req.body.name;
    const email   = req.body.email;
    const password = req.body.password;
    const contact_number = req.body.contact_number;
    const role_id = req.body.role_id;

    //users.push({...user,id:uuid() });

    const sql = `INSERT INTO bb_users (name, email,password, contact_number,fk_role_id,created_at) VALUES ("${name}", "${email}", "${md5(password)}", "${contact_number}", "${role_id}", NOW())`;
//res.send(sql);
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success','message':'New User added successfully.', id: result.insertId})
  })

    //res.send("New User added successfully.");    
   }

   export const getUser = (req,res)=>{

    const sql = `SELECT * FROM bb_users WHERE id =${req.params.id}`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success', 'data':result})
    });
    //const singleUser = users.filter((user)=>user.id === req.params.id);
    //res.send(singleUser);
   }


   export const deleteUser = (req,res)=>{
    //users = users.filter((user)=>user.id !== req.params.id);

    let sql = `DELETE FROM bb_users WHERE id=${req.params.id}`;
  db.query(sql, function(err, rows, fields) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status':'success','message':'User deleted successfully.'})
  })

    //res.send("User deleted successfully.");
   }

   export const updateUser = (req,res)=>{
    //const user = users.find((user)=>user.id===req.params.id);

    const name = req.body.name;
    const email = req.body.email;
    const contact_number = req.body.contact_number;
    const role_id = req.body.role_id;

    let sql = `UPDATE bb_users SET name='${name}',email='${email}',contact_number='${contact_number}',fk_role_id=${role_id} WHERE id=${req.params.id}`;
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status':'success','message':'User data updated successfully.'})
    });

    //res.send("User updated successfully.");
   }