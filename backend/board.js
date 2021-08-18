const express = require('express')
const app = express()
const port = 8080
const axios = require('axios')
const xml2js = require('xml2js')
const router = express.Router();
const cors = require('cors');

 
const corsOptions = {
  origin: "http://localhost:3000 ",
  credentials: true
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  axios.get('http://18.221.196.18:8080/api/boards').then(data => {
 

    if(data.data){
      parser.parseString(data.data, function (err, result) {
        res.status(200).json(result.data);
      });
    }else{
      res.status(404).json('Not found');
    }
  })
})