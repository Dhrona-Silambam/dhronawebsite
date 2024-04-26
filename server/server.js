const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const pool = require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));

app.post('/form-data',async(req,res ) => {
    const {firstName, lastName, dob, gender, category, phoneNumber, email } = req.body
    const query = `INSERT INTO forms VALUES($1,$2,$3,$4,$5,$6,$7)`;
    const query2 = `select serial_number from forms where email1 = $1`;
    try{
        await pool.query(query,[firstName, lastName, dob, gender, category, phoneNumber, email])
        const result = await pool.query(query2,[email]);
        const user_id = result.rows[0]
        console.log(user_id)
        res.status(201).json({message:"success",user_id})
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"Failure"})
    }
})

app.listen(5000, () => console.log("Server listening on port: 5000"))