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
  });
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
 const newPath = `${__dirname}\\storage\\addPenyakit\\` // Lokasi Penyimpanan File Upload
  const file = req.files.file // File Upload
  const fileName = file.name // Nama File Upload
  const namaPenyakit = req.body.namaPenyakit // Nama Penyakit yang telah diinput user
    
  file.mv('\\routes\\'+fileName, (err) => {
      if (err) {
            return ( res.status(500).send({ message : "File upload failed", code: 200 }))
        }

    })
  console.log("aman")
  console.log(fileName)
  console.log(newPath+fileName)
  let data = null;
  try{
  data =  fs.readFileSync(fileName,'utf8')
  }catch(err){
    console.log(err)
  }
  console.log("ngeeg")
  //sanitasi input
  console.log(data)
  const pattern = /[AGCT]+$/
  if(pattern.test(data)){
    sql = "INSERT INTO penyakit(nama,rantai_dna) VALUES(\""+namaPenyakit+"\",\""+data+"\")"
    con.query(sql,function(err,result){
      if(err)console.log(err.stack)
      console.log("query: "+sql)
      message = {}
      res.status(200).send({ message : "file uploaded", code: 200 })
    })
  }
  console.log("asu")
  //asumsi yang disimpan itu stringnya

});

module.exports = router;

//var express = require('express');