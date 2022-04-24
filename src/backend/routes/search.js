const e = require('express');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "halodna_db"
})

/* menerima query searching*/
router.get('/search/:query', function(req, res) {
  //dapetin input
  let query = req.params.query;
  //establish database connection
  con.connect(function(err){
    if(err)throw err;
    console.log("Database terhubung!!")
    let sql = null
    let valid = true
    //sanitasi input
    if(query===null){
      //gaada query, kembaliin semua
      sql = "SELECT * FROM hasil_tes";
    }
    else{
      //parse query
      //ganti %20 dengan whitespace
      query = query.replace(/%20/gi," ")
      const pattern = /\s*(\d{0,2}[\s+-]\d{0,2}[\s+-]\d{0,4})?\s*.*/
      //cek apakah format querynya valid
      if(!pattern.test(query)){
        //format gak valid, return null
        res.send(null)
        valid = false
      }
      else{
        //format valid, parse query
      }
    }
    //panggil query
    if(valid){
      con.query(sql,function(err,result){
        if(err)throw err;
        res.send(result)
        console.log("Query berhasil!")
      })
    }
  }
);
});



module.exports = router;

//format regex:
/*
HARI-BULAN-TAHUN PENYAKIT
13 04 2022 mabok
valid:
\d{0,2}\s*\d{0,2}\s*\d{0,4}\s*(\^[a-zA-Z])*

dapetin tanggal:
\d{1,2}\s+\d{1,2}\s+\d{1,4}
dapetin nama:
\w+
*/