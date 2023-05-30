const express = require('express');
var cors = require('cors');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path : './config.env'});

const connectToMongo = require('./db');
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function(req, res){
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function(err){
      res.status(500).send(err);
    }
  );
});

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
});