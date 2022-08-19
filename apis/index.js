import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import userRoutes from "./routes/users.js";
import {v4 as uuid} from "uuid"
const app = express();
const port = 5000;
app.use(bodyParser.json());

app.use(session({
secret:uuid(),
resave:false,
saveUninitialized:true
}));


app.use(cors());
app.use("/",userRoutes);
app.get("/",(req,res)=>res.send("Hello express"));

app.all("*",(req,res)=>res.send("That route does not exist."))

app.listen(port,()=>console.log(`Server is listening at port: http://localhost:${port}`));