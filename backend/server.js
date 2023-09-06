import  express  from "express";
import router from "./routes/routes.js";
import dotenv from 'dotenv';
import cors from 'cors';
import DBConnection from "./database/db.js";
const app = express();
dotenv.config();


app.use(cors());
app.use('/',router);

DBConnection();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
})