var express = require('express');
const multer = require("multer")
const path = require("path");
const mysql = require('mysql');
var fs = require('fs');
var multipart = require('parse-multipart');
var bodyParser     = require('body-parser');
//app.use( bodyParser.urlencoded({ extended: true }));

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
/*storage.array('myFile',5)
,*/ function(req, res) {
 // console.log(req)
  //dapetin nama sama rantai_dna (filenya)
 // console.log(req.body)
 // console.log("a:"+req.body.name)
 let header = req.headers["content-type"]
 console.log(header)
  const body = req.body
  console.log(typeof req.body)
  console.log("cd")
  console.log(body)
  //let temp = body.split('\r\n')
  console.log(req.param.name)
  const nama = req.body.name;
  console.log("C:"+nama)
  let kirai = req["body"]["name"]
  console.log(kirai)
  const dna_file = req.file.myfile
  console.log("b:"+req.file)
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

//var express = require('express');