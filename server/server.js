const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const pool = require("./database");
const multer = require('multer');


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






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../dhrona-silambam/src/components/imageshowers');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  
  
  const upload = multer({ storage: storage });
  
  // POST endpoint to handle file uploads and form data
  app.post('/upload', upload.single('image'), async (req, res) => {
    console.log("image uploaded");
    try {
      // Save file information to PostgreSQL database
      const { name, college, type, department, batch } = req.body;
      
      const result = await pool.query('INSERT INTO files (filename, path, name, college, type, department, batch) VALUES ($1, $2, $3, $4, $5, $6, $7)', [req.file.filename, req.file.path, name, college, type, department, batch]);
      console.log("File and data inserted successfully");
      res.status(201).json({message:"success"})
      //res.status(201).send('File uploaded successfully');
      //res.send(`<script>alert('Details successfully added to achievements.'); window.location.href = '/services';</script>`);
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file');
    }
  });



  // Endpoint to fetch all image data
app.post('/images', async (req, res) => {
   
      const {type}=req.body;
      console.log('Received type:', type);
  
     
     // Query the files table to fetch all image data
if(type==='international'){

try {
  const query2 = `select * from files where type = $1`;
  const result = await pool.query(query2,[type]);

if (result.rowCount === 0) {
  console.log("No images in the database");
  res.status(404).json({ error: "No images found" });
} else {
  console.log("Images sent");
  const images = result.rows;
  console.log("result ", result);
 
  res.json(images);
}
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
 }
 else if(type==='national'){

  try {
    const query2 = `select * from files where type = $1`;
    const result = await pool.query(query2,[type]);
  
  if (result.rowCount === 0) {
    console.log("No images in the database");
    res.status(404).json({ error: "No images found" });
  } else {
    console.log("Images sent");
    const images = result.rows;
    console.log("result ", result);
   

    res.json(images);
  }
      } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
   }
else if(type==='state'){

    try {
      const query2 = `select * from files where type = $1`;
      const result = await pool.query(query2,[type]);
    
    if (result.rowCount === 0) {
      console.log("No images in the database");
      res.status(404).json({ error: "No images found" });
    } else {
      console.log("Images sent");
      const images = result.rows;
      console.log("result ", result);
     
      res.json(images);
    }
        } catch (error) {
          console.error('Error fetching images:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
     }
else if(type==='district'){

      try {
        const query2 = `select * from files where type = $1`;
        const result = await pool.query(query2,[type]);
      
      if (result.rowCount === 0) {
        console.log("No images in the database");
        res.status(404).json({ error: "No images found" });
      } else {
        console.log("Images sent");
        const images = result.rows;
        console.log("result ", result);
     

        res.json(images);
      }
          } catch (error) {
            console.error('Error fetching images:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
       }
else if(type==='cmtrophy'){

        try {
          const query2 = `select * from files where type = $1`;
          const result = await pool.query(query2,[type]);
        
        if (result.rowCount === 0) {
          console.log("No images in the database");
          res.status(404).json({ error: "No images found" });
        } else {
          console.log("Images sent");
          const images = result.rows;
          console.log("result ", result);
      

          res.json(images);
        }
            } catch (error) {
              console.error('Error fetching images:', error);
              res.status(500).json({ error: 'Internal server error' });
            }
         }
  else {
 
      console.log("No images in the database for this type");
      
    }
    
  });



 



app.listen(5000, () => console.log("Server listening on port: 5000"))