var express = require('express');
const multer = require("multer")
const path = require("path");
const cors = require("cors");
const mysql = require('mysql');
var fs = require('fs');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "halodna_db"
})

//setup multer
const diskStorage = multer.diskStorage({
  destination: function(req,files,callback){
    //panggil callback function
    callback(null,path.join(__dirname,"..","..","..","/test/input_file"))
  },
  filename: function(req,files,callback){
    callback(null,file.fieldname+"-"+file.originalname+path.extname(file.originalname))
  }
  }
);
var router = express.Router();
var storage = multer({storage:diskStorage})
/* menambahkan penyakit ke database */
router.post('/',
storage.single("myFile")
, function(req, res) {
  //dapetin nama sama rantai_dna (filenya)
  const nama = req.body.inputPenyakit;
  console.log(req.body)
  console.log(nama)
  const dna_file = req.file.myfile
  if(!dna_file){
    return res.status(400).send("Tidak ada file yang dikirimkan!")
  }
  console.log("aman")
  //res.send(rantai_dna_file)

  //retrieve dari nama input field buat retrieve (misal: <input name="x")
  //let file = req.files.myfile
  //baca file
  let data =  fs.readFileSync(path.join(__dirname,"..","..","..","test","input_file","myFile-"+file.originalname+path.extname(file.originalname))).toString()
  //sanitasi input
  const pattern = /[AGCT]+$/
  if(pattern.test(data)){
    sql = "INSERT INTO penyakit(nama,rantai_dna) VALUES(\""+nama+"\",\""+data+"\")"
    con.query(sql,function(err,result){
      if(err)console.log(err.stack)
      console.log("query: "+sql)
      message = {}
      res.json(message)
    })
  }
  //asumsi yang disimpan itu stringnya

});

module.exports = router;

var express = require('express');