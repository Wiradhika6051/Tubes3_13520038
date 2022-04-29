var express = require('express');
const multer = require("multer")
const path = require("path");
const cors = require("cors");
const mysql = require('mysql');
let kmp = require('../algo/kmp');
var fs = require('fs');
let levenshtein = require('../algo/levenshtein.js');
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "halodna_db"
})
const diskStorage = multer.diskStorage({
  destination: function(req,files,callback){
    //panggil callback function
    callback(null,path.join(__dirname,"..","..","..","/test/input_file"))
  },
  filename: function(req,files,callback){
    callback(null,file.fieldname+"-tes-"+file.originalname+path.extname(file.originalname))
  }
  }
);
var storage = multer({storage:diskStorage})
var router = express.Router();
/* menerima input tes dna*/
router.post('/',
//storage.single("myFile")
/*,*/ function(req, res) {
  const newPath = `${__dirname}\\storage\\ujiDNA\\` // Lokasi Penyimpanan File Upload
  const file = req.files.file // File Upload
  const fileName = file.name // Nama File Upload
  const namaPengguna = req.body.namaPengguna // Nama Pengguna yang telah diinput user
  const namaPenyakit = req.body.prediksiPenyakit // Nama Penyakit yang telah diinput user
  
  file.mv(`${newPath}${fileName}`, (err) => {
      if (err) {
          return ( res.status(500).send({ message : "File upload failed", code: 200 }))
      }

  })
  //dapetin nama sama rantai_dna (filenya)
  //const namaPengguna = req.body.inputNamaPengguna;
  //const namaPenyakit = req.body.inputPrediksiPenyakit;
  /*
  console.log(req.body)
  console.log(namaPengguna)
  const dna_file = req.file.myfile
  if(!dna_file){
    return res.status(400).send("Tidak ada file yang dikirimkan!")
  }
  */
  console.log("aman")
  //res.send(rantai_dna_file)

  //retrieve dari nama input field buat retrieve (misal: <input name="x")
  //let file = req.files.myfile
  //baca file
  console.log(__dirname)
  let data = null;
  try{
  data =  fs.readFileSync(fileName,"utf8")
  }catch(err){
    console.log(err)
  }
  console.log(`${newPath}${fileName}`)
  //sanitasi input
  const pattern = /[AGCT]+$/
  var today = new Date();
  let returnJSON = {
    "tanggal":today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
    "pengguna":namaPengguna,
    "penyakit":namaPenyakit,
    "similarity":null,
    "status":false
  }
  if(pattern.test(data)){
    sql_get = "SELECT rantai_dna FROM penyakit WHERE nama=\""+namaPenyakit+"\""
    con.query(sql_get,function(err,result){
      if(err)console.log(err.stack)
      console.log("query: "+sql_get)
      let dna_penyakit = result[0]["rantai_dna"]
      if(kmp.find(data, dna_penyakit)!=-1){
        returnJSON["status"] = true
      }
      //cari similarity
      let dist = levenshtein.lev(data, dna_penyakit)
      let bigger = Math.max(data.length,dna_penyakit.length)
      let percent = (bigger-dist)/bigger
      if(percent >=0.8){
        returnJSON["similarity"] = percent
        if(!returnJSON["status"]){
          returnJSON["status"] = true
        }
      }
      //tambahin ke database
      console.log(returnJSON["similarity"])
      let insert_query = "INSERT INTO hasil_tes(nama,penyakit,status,tanggal_tes,kemiripan) VALUES(\""+returnJSON["pengguna"]+
      "\",\""+returnJSON["penyakit"]+"\",\""+returnJSON["status"].toString().charAt(0).toUpperCase() + returnJSON["status"].toString().toLowerCase().slice(1)+
      "\",STR_TO_DATE('"+returnJSON["tanggal"].trim()+"\',\'%Y-%m-%d\'),"+returnJSON["similarity"]+")"
      con.query(insert_query,function(err,result){
        if(err)console.log(err.stack)
        console.log("entri berhasil ditambahkan!")
      })
      res.status(200).json(returnJSON)
    })
  }
  console.log(data)
  //asumsi yang disimpan itu stringnya

});

module.exports = router;